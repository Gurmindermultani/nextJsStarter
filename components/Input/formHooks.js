/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
// higher order components using input and providing validation
import { useState, useEffect, useRef } from 'react';

export const useField = (
  name,
  form,
  {
    defaultValue,
    validations = [],
    fieldsToValidateOnChange = [name],
    onBlur = () => {},
  } = {},
) => {
  const [value, setValue] = useState(defaultValue);
  const [errors, setErrors] = useState([]);
  const [pristine, setPristine] = useState(true);
  const [validating, setValidating] = useState(false);
  const validateCounter = useRef(0);

  const validate = async () => {
    // eslint-disable-next-line no-plusplus
    const validateIteration = ++validateCounter.current;
    setValidating(true);
    const formData = form.getFormData();
    let errorMessages = await Promise.all(
      validations.map(validation => validation(formData, name)),
    );
    errorMessages = errorMessages.filter(errorMsg => !!errorMsg);
    if (validateIteration === validateCounter.current) {
      // this is the most recent invocation
      setErrors(errorMessages);
      setValidating(false);
    }
    const fieldValid = errorMessages.length === 0;
    return fieldValid;
  };

  useEffect(
    () => {
      if (pristine) return; // Avoid validate on mount
      form.validateFields(fieldsToValidateOnChange);
    },
    [value],
  );

  const updateValue = newValue => {
    setValue(newValue);
    if(!newValue){
      setPristine(true);
    }
  };

  const field = {
    name,
    value,
    errors,
    setErrors,
    pristine,
    onChange: e => {
      if (pristine) {
        setPristine(false);
      }
      setValue(e.target.value);
    },
    updateValue,
    validate,
    validating,
    onBlur,
    required: !!validations.length,
  };
  form.addField(field);
  return field;
};

export const useForm = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fields = [];
  const fieldNames = [];

  const validateFields = async fieldNames => {
    let fieldsToValidate;
    if (fieldNames instanceof Array) {
      fieldsToValidate = fields.filter(field =>
        fieldNames.includes(field.name),
      );
    } else {
      // if fieldNames not provided, validate all fields
      fieldsToValidate = fields;
    }
    const fieldsValid = await Promise.all(
      fieldsToValidate.map(field => field.validate()),
    );
    const formValid = fieldsValid.every(isValid => isValid === true);
    return formValid;
  };

  const getFormData = () => {
    return fields.reduce((formData, f) => {
      formData[f.name] = f.value;
      return formData;
    }, {});
  };

  const reset = () => {
    return fields.forEach(field => {
      field.updateValue('');
    });
  };

  const addField = field => {
    let index = fieldNames.indexOf(field.name);
    if(index === -1){
      fieldNames.push(field.name);
      fields.push(field);
    }else{
      fieldNames[index] = field.name;   
      fields[index] = field;
    }
  };

  const removeField = field => {
    //console.log(fields);
  };

  return {
    onSubmit: async e => {
      e.preventDefault();
      setSubmitting(true);
      setSubmitted(true); // User has attempted to submit form at least once
      const formValid = await validateFields();
      const returnVal = await onSubmit(getFormData(), formValid);
      setSubmitting(false);
      return returnVal;
    },
    isValid: () => fields.every(f => f.errors.length === 0),
    addField,
    removeField,
    getFormData,
    validateFields,
    submitted,
    submitting,
    reset,
  };
};
