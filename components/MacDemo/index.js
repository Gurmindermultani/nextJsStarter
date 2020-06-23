/**
 *
 * MobileDemo
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Desktop from './Desktop';
import Mobile from './Mobile';

const MobileDemoStyles = styled.div`
  @media only screen and (max-width: 760px) {
    
  }
`;

function MobileDemo(props) {
  return (
    <MobileDemoStyles>
      <div className="desktop">
        <Desktop {...props} />
      </div>
      <div className="mobile">
        <Mobile {...props} />
      </div>
    </MobileDemoStyles>
  );
}

MobileDemo.propTypes = {};

export default memo(MobileDemo);