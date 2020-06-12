/**
 *
 * CaseManagment
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '../../components/Typography';
import FadeIn from '../../components/VisibilitySensor/FadeIn';
import Slide from '../../components/VisibilitySensor/Slide';

import Form from './Form';
const InsightsStyles = styled.div`
  .itemsContainer {
    display: flex;
    justify-content: space-between;
    .insight {
      text-align: center;
      box-shadow: 0px 7px 46px #00000029;
      border-radius: 14px;
      background: #fff;
      max-width: 350px;
      padding: 30px 10px;
      margin: 0 10px;
      img {
        margin-bottom: 30px;
      }
      span {
        line-height: 32px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .itemsContainer {
      flex-wrap: wrap;
      .insight {
        margin-top: 20px;
      }
    }
  }
`;

const insights = [
  {
    icon: '/images/icons/top.svg',
    text: 'Challenges People and Culture (PAC) Team faced at AirAsia',
  },
  {
    icon: '/images/icons/problem.svg',
    text: 'Leena AI capabilities that helped AirAsia increase employee satisfaction',
  },
  {
    icon: '/images/icons/growth.svg',
    text: 'Results AirAsia achieved after deploying AskPAC, the enterprise conversational AI',
  },
  {
    icon: '/images/icons/virus.svg',
    text: 'How Leena AI helped AirAsia battle COVID-19 crisis',
  },
];

function CaseManagment(props) {
  return (
    <InsightsStyles>
      <FadeIn className="textContainer textCenter">
        <Typography className="topText" color="#fff" variant="h1" fontSizes={[20, 32, 32]} text="What insights will you get?"/>
      </FadeIn>
      <div className="itemsContainer">
        {insights.map ( (insight, idx) => 
          <Slide className="insight" key={"insight" + idx} delay={idx*100} from='up'>
            <img src={insight.icon} />
            <Typography className="insightText" color="#212121" variant="paragraph2" fontSizes={[14, 16, 20]} text={insight.text} />
          </Slide>
        )}
      </div>
    </InsightsStyles>
  );
}

CaseManagment.propTypes = {};

export default memo(CaseManagment);