/**
 *
 * CaseStudy
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';

const CaseStudyStyles = styled.div`
  
`;

function CaseStudy(props) {
  return (
    <CaseStudyStyles style={props.style} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
      asdasdads
    </CaseStudyStyles>
  );
}

CaseStudy.propTypes = {};

export default memo(CaseStudy);