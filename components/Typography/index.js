import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TypographyContainer } from './styles';

function Typography(props) {
  const {
      text,
    } = props;

  return (
    <TypographyContainer 
      onClick={props.onClick ? props.onClick : null} 
      {...props} 
      className={props.className ? props.className : ''}
    >
      {text}
    </TypographyContainer>
  );
}

Typography.propTypes = {
  text: PropTypes.any
}
 

export default Typography;