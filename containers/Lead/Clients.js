/**
 *
 * Clients
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Carousal from '../../components/Carousal';
import Slide from '../../components/VisibilitySensor/Slide';
import FadeIn from '../../components/VisibilitySensor/FadeIn';

const clients = [
  {
    name: 'cocacola',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'oneplus',
    type: 'Aviation',
    employees: '20,000+'
  },
  {
    name: 'hitachi',
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
    name: 'vodafone',
    type: 'Aviation',
    employees: '20,000+'
  },
];

const ClientsStyles = styled.div`
  &.deskTop {
    display: flex;
    align-items: center;
    .carousalContainer {
      transform: scale(0.8);
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 7px 46px #00000029;
      border-radius: 14px;
      padding: 20px;
      img {
        width: 100%;
        height: 100%;
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
          min-height: 210px;
          display: flex;
          align-items: center;
          transition: transform 420ms cubic-bezier(.165,.84,.44,1);
          transform: scale(0.8);
          background: #FFFFFF 0% 0% no-repeat padding-box;
          box-shadow: 0px 7px 46px #00000029;
          border-radius: 14px;
          padding: 20px;
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

function Clients(props) {
  return (
    <Slide>
      <ClientsStyles className="deskTop">
          {clients.map( customer => 
            <div className={"carousalContainer center " + customer.name} key={customer.name}>
              <img name={customer.name} src={`/images/clients/${customer.name}.png`} />
            </div>
          )}
      </ClientsStyles>
      <ClientsStyles className="mobile">
        <Carousal variant="mobileCarousal">
          {clients.map( customer => 
            <div className="carousalContainer center" key={customer.name}>
              <div className={"clientImage " +  customer.name}>
                <img name={customer.name} src={`/images/clients/${customer.name}.png`} />
              </div>
            </div>
          )}
        </Carousal>
      </ClientsStyles>
    </Slide>
  );
}

Clients.propTypes = {};

export default memo(Clients);