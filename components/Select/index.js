/**
 *
SelectComponent *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from 'react-select';
import Error from '../Error';

import { theme } from '../../theme';

export const customStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 45,
    borderRadius: '4px',
    borderWidth : '0.5px !important',
    border: state.isFocused
      ? `solid 0.5px ${theme.palette.primary.main}`
      : `solid 0.5px ${theme.palette.text.secondary}`,
    overFlow: 'visible',
    fontSize : '14px',
    color: `${theme.palette.text.primary}`,
    boxShadow: 'none',
  }),
  option: (base,state) => ({
    ...base,
    padding: 10,
    cursor: "pointer",
    fontSize : '13px',
    color: '#212121',
    background: state.isSelected ? '#f6f6f6' : theme.palette.white,
    '&:hover': {
      background: '#f6f6f6',
    },
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: 4,
  }),
  clearIndicator: base => ({
    ...base,
    padding: 4,
  }),
  multiValue: base => ({
    ...base,
  }),
  menu: base => ({
    ...base,
    'z-index': 4,
    marginTop: 5,
    border: 'none',
    boxShadow: 'rgba(9, 30, 66, 0.13) 0px 0px 0px 1px, rgba(9, 30, 66, 0.13) 0px 4px 11px',
    overFlow: 'hidden',
    minWidth: '220px'
  }),
  input: base => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  placeholder: base => ({
    ...base,
    fontSize : '14px',
    color: '#616161',
    opacity: '0.9',
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),
  valueContainer: (base, state) => ({
    ...base,
    fontSize : '14px',
    color: `${theme.palette.text.primary}`,
    padding: '2px 15px',
  })
};

const SelectWrapper = styled.div`
  min-width: 160px;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  margin: ${props => (props.margin ? props.margin : '13px 0 0 0')};
  .errorContainer {
    min-height: 22px;
    .error {
      color: red;
      font-size: 14px;
    }
  }
  #react-select-2-input {
    height: 28px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class SelectComponent extends React.PureComponent {
  handleChange = (value, name) => {
    // validation hook
    if (this.props.onChange) {
      // const self = this;
      const e = { target: { value: value.value } };
      this.props.onChange(e);
    }
    if (this.props.handleFieldChange) {
      this.props.handleFieldChange(value, name);
    }
    if (this.props.validate) {
      setTimeout(() => this.props.validate(), 100);
    }
  };

  render() {
    const { props } = this;

    const errors = props.errors ? props.errors : [];
    const showErrors = !!errors.length;
    return (
      <SelectWrapper {...props} className={"single-select " + (props.className ? props.className : " ")}>
        <Select
          closeMenuOnSelect={!props.closeMenuOnSelect}
          styles={customStyles}
          value={props.value}
          isDisabled={!!props.disabled}
          maxMenuHeight={220}
          options={props.options}
          menuPlacement={props.istop ? 'top' : 'auto'}
          placeholder={props.placeholder}
          onChange={value => this.handleChange(value, props.name)}
          onBlur={() => (props.validate ? props.validate() : '')}
        />
        <div className="errorContainer">
          <Error errors={errors} showErrors={showErrors} />
        </div>
      </SelectWrapper>
    );
  }
}

SelectComponent.propTypes = {};

export default SelectComponent;
