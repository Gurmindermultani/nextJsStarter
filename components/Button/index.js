/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'leena_dls';
import Icon from '../Icon';
import Loader from '../Loader';
import { ButtonWrapper, FilterButtonWrapper } from './styles';

function Button(props) {
  let className = props.variant ? props.variant : 'contained';
  className += ' ';
  className += props.size ? props.size : 'medium';
  className += props.fullWidth ? ' fullWidth' : ' ';
  className += props.disabled ? ' disabled' : ' ';
  className += ( props.iconName && !props.name ) ? ' iconButton' : ' ';

  return (
    <ButtonWrapper
      data-gtm={props.gtm}
      type={props.type ? props.type : 'button'}
      className={`${className} ${props.className} gtm`}
      onClick={props.onClick}
      data-value={props.dataValue}
    >
      {props.iconLoading === true ? (
        <>
        {props.iconPosition === 'prefix' && (
          <Loader style={{width : '16px', height: '16px', marginLeft: '5px'}} className=" loaderButtonIcon " />
        )}
        <Typography variant="button" text={props.name}>{props.name}</Typography>
        {props.iconPosition === 'suffix' && (
          <Loader style={{width : '16px', height: '16px', marginLeft: '5px'}} className=" loaderButtonIcon " />
        )}
        </>
      ) : (
        <>
          {props.iconPosition === 'prefix' && (
            <Icon className=" prefix " name={props.iconName} />
          )}
          <Typography variant="button" text={props.name}>{props.name}</Typography>
          {props.iconPosition === 'suffix' && (
            <Icon className=" suffix " name={props.iconName} />
          )}
        </>
      )}
      {props.loading && (
        <Loader style={{width : '16px', height: '16px', marginLeft: '5px', color: "white"}} className=" loaderButtonIcon " />
      )}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  isBold: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  gtm: PropTypes.string,
  className: PropTypes.string,
  iconPosition: PropTypes.string,
  dataValue: PropTypes.string,
  iconName: PropTypes.string,
  onClickHandler: PropTypes.func,
  icon: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;
