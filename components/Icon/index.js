/**
 *
 * Icon
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${props => props.theme.palette.text.primary};
  font-size: 1.5rem;
  &.secondary{
    color: ${props => props.theme.palette.text.secondary}; 
  }
  &.small{
    font-size: 1rem;
  }
  &.button {
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    :hover {
      background: #8080801c; 
    }
  }
  &.disabled{
    opacity: 0.4;
    cursor: default !important;
    :hover {
      background: none;
    }
  }
`;

function Icon(props) {
  return (
    <StyledIcon
      onClick={props.onClick}
      className={`la ${props.name + ' ' +
        (props.className ? props.className : ' ') + ' ' +
        (props.size ? props.size : ' ') + ' ' +
        (props.disabled ? 'disabled' : ' ') + ' ' +
        (props.type ? props.type : ' ')}`
      }
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default memo(Icon);
