/**
 *
 * MobileDemo
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Slide from '../VisibilitySensor/Slide';
import UserAvatar from '../UserAvatar';

const MobileDemoStyles = styled.div`
  display: flex;
  .leftContainer {
    flex-basis: 30%;
    background: ${props => props.theme.palette.primary.main};
  }
  .rightContainer {
    flex-basis: 70%;
    background: ${props => props.theme.palette.primary.dark};
  }
  @media only screen and (max-width: 760px) {
    
  }
`;

function MobileDemo(props) {
  return (
    <MobileDemoStyles>
      <div className="leftContainer">
        adasd
      </div>
      <div className="rightContainer">

      </div>
    </MobileDemoStyles>
  );
}

MobileDemo.propTypes = {};

export default memo(MobileDemo);