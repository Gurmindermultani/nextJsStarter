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
import FadeIn from '../VisibilitySensor/FadeIn';

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
    name: 'sony',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'nestle',
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
  &.deskTop {
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
  }
  &.mobile {
    display: none;
  }
  @media only screen and (max-width: 760px) {
    &.mobile {
      display: block;
      .carousalContainer {
        overflow: hidden;
        outline: none;
        .clientImage {
          transform: scale(0.6);
          min-height: 210px;
          display: flex;
          align-items: center;
          transition: transform 420ms cubic-bezier(.165,.84,.44,1);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .details {
          margin-top: 10px;
          display: none;
          justify-content: space-between;
          text-align: center;
          .heading {
            margin-bottom: 10px;
          }
        }
      }
      .slick-slide {
        padding: 0 0px;
      }
      .slick-center {
        .clientImage {
          transform: scale(0.9);
          
        }
        .details {
          display: flex;
        }
      }
    }
    &.deskTop {
      display: none;
    }
  }
`;

function Customers(props) {
  return (
    <Slide>
      <CustomersStyles className="deskTop">
        <Carousal variant="centerMode">
          {customers.map( customer => 
            <div className={"carousalContainer center " + customer.name} key={customer.name}>
              <img name={customer.name} src={`/images/clients/${customer.name}.png`} />
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
      <CustomersStyles className="mobile">
        <Carousal variant="mobileCarousal">
          {customers.map( customer => 
            <div className="carousalContainer center" key={customer.name}>
              <div className={"clientImage " +  customer.name}>
                <img name={customer.name} src={`/images/clients/${customer.name}.png`} />
              </div>
              <FadeIn delay={10} className="details">
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
              </FadeIn>
            </div>
          )}
        </Carousal>
      </CustomersStyles>
    </Slide>
  );
}

Customers.propTypes = {};

export default memo(Customers);