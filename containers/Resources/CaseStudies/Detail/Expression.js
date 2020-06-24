/**
 *
 * Expression
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../components/Typography';
import FadeIn from '../../../../components/VisibilitySensor/FadeIn';

const ExpressionStyles = styled.div`
  padding: 70px 100px;
  text-align: center;
  .header {
    margin-bottom: 48px;
  }
  .body {
  }
  @media only screen and (max-width: 760px) {
    padding: 40px 30px;
  }
`;

function Expression(props) {
  console.log(props);
  return (
    <FadeIn>
      <ExpressionStyles>
        <div className="header">
          <Typography className="rowValue" color="#212121" variant="h1" fontSizes={[28, 34, 38]} text={props.heading}/>
        </div>
        <div className="body">
          <Typography className="rowValue" fontWeight="400" color="#212121" variant="h1" fontSizes={[18, 20, 22]} text={props.text}/>
        </div>
      </ExpressionStyles>
    </FadeIn>
  );
}

Expression.propTypes = {};

export default memo(Expression);