/**
 *
 * Customers
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Carousal from '../Carousal';

const customers = [
  {
    name: 'lafarge',
  },
  {
    name: 'oneplus',
  },
  {
    name: 'cocacola',
  },
  {
    name: 'airasia',
  },
  {
    name: 'concentrix',
  },
  {
    name: 'rpg',
  },
  {
    name: 'tata',
  },
];

const CustomersStyles = styled.div`
  overflow: visible !important;
  padding: 40px;
  min-height: 300px;
  .carousalContainer {
    text-align: center;
    img {
      height: 42px;
      width: 73px;
    }
  }
`;

function Customers(props) {
  return (
    <CustomersStyles>
      <Carousal variant="centerMode">
        {customers.map( customer => 
          <div className="carousalContainer" key={customer.name}>
            <img name={customer.name} src={`/images/clients/${customer.name}.png`} />
          </div>
        )}
      </Carousal>
    </CustomersStyles>
  );
}

Customers.propTypes = {};

export default memo(Customers);