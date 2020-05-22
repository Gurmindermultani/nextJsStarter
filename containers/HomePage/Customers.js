/**
 *
 * Customers
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Carousal from '../../components/Carousal';

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
  
`;

function Customers(props) {
  return (
    <CustomersStyles>
      <Carousal variant="centerMode">
        {customers.map( customer => 
          <div className="customer" key={customer.name}>
            <img name={customer.name} src={`/images/home/${customer.name}.png`} />
          </div>
        )}
      </Carousal>
    </CustomersStyles>
  );
}

Customers.propTypes = {};

export default memo(Customers);