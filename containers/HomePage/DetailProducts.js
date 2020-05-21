/**
 *
 * DetailsProducts
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import ProductHr from './ProductHr';
import EmployeeExperience from './EmployeeExperience';

const DetailsProductsStyles = styled.div`
  .highContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &.bottomMargin {
      margin-bottom: 93px;
    }
  }
`;

function DetailsProducts(props) {
  return (
    <DetailsProductsStyles>
      <ProductHr heading="HR helpdesk" description="Take a step ahead to make your workplace happier. Let the virtual HR assistant be available for your employees round the clock."/>
      <EmployeeExperience heading="Employee experience" description="Know the pulse of your employees by accessing their motivation and challenges through periodic conversational surveys."/>
    </DetailsProductsStyles>
  );
}

DetailsProducts.propTypes = {};

export default memo(DetailsProducts);