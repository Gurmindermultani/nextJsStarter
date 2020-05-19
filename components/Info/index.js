/**
 *
 * Info
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tooltip from '../Tooltip';
import Icon from '../Icon';

const InfoContainer = styled.span`
  margin-left: 5px;
  .infoIcon{
    color: #616161;
    font-size: 1.2rem;
  }
`;

function Info(props) {
  return (
    <InfoContainer> 
      <Tooltip placement="top" title={props.title}>
        <Icon className="infoIcon" name="la-info-circle" />
      </Tooltip>
    </InfoContainer>
  );
}

Info.propTypes = {};

export default memo(Info);
