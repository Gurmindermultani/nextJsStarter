/* eslint-disable indent */
/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import { useTransition, animated } from 'react-spring';
import Info from '../Info';

const MainContainer = styled.div`
  &.fullWidth{
    width: 100%;
  }
  .form-group {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    .form-label {
      width: 10px;
    }
    input,
    textarea {
      width: 100%;
      color: ${props => props.theme.palette.text.secondary};
      font-size: 14px;
      border: solid 0.5px ${props => props.theme.palette.text.secondary};
      font-weight: '400';
      font-family: 'Poppins';
      border-radius: 4px;
      height: 45px;
      line-height: 25px;
      padding-left: 15px;
      outline: none;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      &:focus {
        outline: ${props => props.theme.palette.primary.main};
        border: solid 0.5px ${props => props.theme.palette.primary.main};
      }
      &:disabled {
        background: ${props => props.theme.palette.border.light};
      }
    }

    .input-prefix {
      padding-left: 36px;
    }
    .loader {
      position: absolute;
      top: 0;
      right: 0;
    }
    .aboutText {
      position: absolute;
      color: ${props => props.theme.palette.text.secondary};
      height: 100%;
      padding: 8px 15px;
      font-size: 14px;
      height: 100%;
      line-height: 25px;
    }

    .suffix {
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      i{
        font-size: 1.2rem;
      }
    }

    .prefix {
      top: 0;
      left: 0;
    }

    textarea {
      height: 80px;
    }

    .editText {
      height: 100%;
      line-height: 24px;
      padding: 8px 15px;
      font-size: 14px;
      color: ${props => props.theme.accent};
      border-left: solid 1px ${props => props.theme.border};
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .errorContainer {
    padding: 10px 0;
    .error {
      span{
        color: red;
      }
      color: red;
      font-size: 14px;
    }
    .errorMessage{
      color: ${props => props.theme.palette.accent.error };
      margin-left: 16px;
    }
  }

  .required:after {
    content: ' *';
    color: ${props => props.theme.negativeAction};
  }
  &.notesInput, &.commentsInput{
    .form-group{
      margin-top: 10px;
    }
    textarea{
      height: 34px;
      line-height: 30px;
      border: 0.5px solid ${props => props.theme.palette.smoke};
      background: ${props => props.theme.palette.smoke};
      padding-left: 40px;
      &:focus {
        outline: none;
        border: none;
        box-shadow: none;
        box-shadow: 0px 1px 4px #00000029;
        background: ${props => props.theme.palette.white};
        border: 0.5px solid ${props => props.theme.palette.primary.main};
        height: 68px;
      }
    }
    .aboutText{
      padding: 8px 15px;
    }
    .prefix{
      border: none;
    }
    i{
      font-size: 1rem;
    }
  }
  &.commentsInput{
    textarea{
      height: 34px;
      padding-left: 16px;
    }
  }
  &.small{
    .form-group{
      input, textarea{
        height: 28px;
        line-height: 26px;
      }
      i{
        font-size: 1.3rem;
      }
    }
    .aboutText{
      display: flex;
      padding: 5px 8px;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

const onBlur = (evt, props) => {
  // eslint-disable-next-line no-unused-expressions
  !props.pristine && (props.validate ? props.validate() : '');
  if (props.onBlur) {
    props.onBlur(evt.target.value);
  }
};

const onFocus = (evt, props) => {
  // eslint-disable-next-line no-unused-expressions
  if (props.onFocus) {
    props.onFocus(evt.target.value);
  }
};

const Input = props => {
  const errors = props.errors ? props.errors : [];
  const showErrors = !!errors.length;
  const editText = props.editText ? props.editText : 'Edit';
  const addActivityTransition = useTransition(showErrors, null, {
    from: { opacity: 0, height: '0px' },
    enter: { opacity: 1, height: '22px' },
    leave: { opacity: 0, height: '0px' },
    unique: true,
  });

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      //e.target.blur();
      if(props.onEnter){
        props.onEnter(e);
      }
    }
  }
  return (
    <MainContainer className={props.type + ' ' + props.size + ' ' + props.className}>
      {props.label &&
        <>
          <Typography variant="paragraphM1" text={<span className={props.required ? 'required' : ''}>{props.label}</span>} />
          {(props.formItem && props.formItem.info) &&
            <Info title={props.formItem.info}></Info>
           }
        </>
      }
      <div className="form-group">
        {props.aboutText &&
          props.aboutPosition === 'prefix' && (
            <span className="aboutText prefix regular">{props.aboutText}</span>
          )}
        {props.type === 'textArea' || props.type === 'notesInput' || props.type === 'commentsInput' ? (
          <textarea
            className="form-input"
            disabled={props.disabled}
            variant={props.variant}
            onKeyDown={_handleKeyDown}
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            onBlur={evt => onBlur(evt, props)}
            onFocus={evt => onFocus(evt, props)}
          />
        ) : (
          <input
            className={
              props.aboutPosition === 'prefix'
                ? 'form-input input-prefix'
                : 'form-input'
            }
            disabled={props.disabled}
            variant={props.variant}
            id={props.name}
            onKeyDown={_handleKeyDown}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            onBlur={evt => onBlur(evt, props)}
            onFocus={evt => onFocus(evt, props)}
          />
        )}
        {props.validating && <span className="loader">...</span>}
        {props.aboutText &&
          props.aboutPosition !== 'prefix' && (
            <span className="aboutText suffix regular">{props.aboutText}</span>
          )}
          {props.searchIcon &&
            <span className="aboutText suffix regular">{props.searchIcon}</span>
          }
        {props.onEditClick && (
          <span
            data-gtm={`${editText} ${props.label}`}
            onClick={() => props.onEditClick(props.value)}
            className="editText regular gtm"
            role="button"
            tabIndex={0}
            onKeyPress={() => props.onEditClick(props.value)}
          >
            {editText}
          </span>
        )}
      </div>
      <div className="errorContainer">
          {
        addActivityTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {errors.map(errorMsg => (
                <span className="error" key={errorMsg}>
                  <Typography className="errorMessage" variant="paragraphS2" text={errorMsg} />
                </span>
              ))}
              </animated.div>
            )
        )
      }
      </div>
    </MainContainer>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  editText: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  aboutPosition: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validating: PropTypes.bool,
  onEditClick: PropTypes.func,
  value: PropTypes.any,
};

export default Input;
