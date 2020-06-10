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
  padding: 70px 150px;
  text-align: center;
  .header {
    margin-bottom: 48px;
  }
  .body {
    span {
      line-height: 44px;
    }
  }
`;

function Expression(props) {
  console.log(props);
  return (
    <FadeIn>
      <ExpressionStyles>
        <div className="header">
          <Typography className="rowValue" color="#212121" variant="h1" fontSize="48px" text={props.heading}/>
        </div>
        <div className="body">
          <Typography className="rowValue" color="#212121" variant="paragraph2" fontSize="20px" text={props.text}/>
        </div>
      </ExpressionStyles>
    </FadeIn>
  );
}

Expression.propTypes = {};

export default memo(Expression);