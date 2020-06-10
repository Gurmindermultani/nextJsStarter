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
import Slide from '../VisibilitySensor/Slide';

const customers = [
  {
    name: 'lafarge',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'oneplus',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'cocacola',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'airasia',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'concentrix',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'rpg',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'tata',
    type: 'Aviation',
    employees: '20,000+'
  },
];

const CustomersStyles = styled.div`
  padding: 40px;
  .carousalContainer {
    height: 100%;
    .details {
      margin-top: 60px;
      display: none;
      justify-content: space-between;
      text-align: center;
    }
    img {
      height: 42px;
      width: 73px;
      margin: auto;
      transition: transform 420ms cubic-bezier(.165,.84,.44,1);
      opacity: 0.5;
      &.rpg {
        width: 72px;
        height: 30px;
      }
      &.tata {
        width: 142px;
        height: 30px;
      }
      &.airasia {
        width: 50px;
        height: 50px;
      }
    }
  }
  .slick-slide {
    margin-top: 30px;
    min-height: 200px;
    padding-top: 30px;
    width: 200px;
  }
  .slick-center {
    padding: 0px 30px;
    width: 300px;
    .details {
      display: flex;
      .heading {
        margin-top: 20px;
        margin-bottom: 10px;
      }
    }
    img {
      transform: scale(2);
      opacity: 1;
    }
  }
`;

function Customers(props) {
  return (
    <Slide>
      <CustomersStyles>
        <Carousal variant="centerMode">
          {customers.map( customer => 
            <div className="carousalContainer center" key={customer.name}>
              <img className={customer.name} name={customer.name} src={`/images/clients/${customer.name}.png`} />
              <div className="details">
                <div className="row">
                  <Typography className="heading" variant="paragraph2" fontSize="13px" text="Type"/>
                  <br/>
                  <Typography variant="h6" fontSize="13px" text={customer.type}/>
                </div>
                <div className="row">
                  <Typography className="heading" variant="paragraph2" fontSize="13px" text="Employees"/>
                  <br/>
                  <Typography variant="h6" fontSize="13px" text={customer.employees}/>
                </div>
              </div>
            </div>
          )}
        </Carousal>
      </CustomersStyles>
    </Slide>
  );
}

Customers.propTypes = {};

export default memo(Customers);