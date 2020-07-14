/**
 *
 * CaseStudies
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Typography from '../../../components/Typography';
import Slide from '../../../components/VisibilitySensor/Slide';
import { ROIStyles } from './styles';
import Form from './Form';
import Graph from './Graph';


function CaseStudies(props) {
  const [showResult, setShowResult] = useState(true);
  return (
    <ROIStyles>
      <div className="topForm">
        <Slide from='left' className="leftContainer">
          <div className="image">
            <img alt="top buildings" src="/images/roi/roi1.svg" />
          </div>
          <div className="textCenter">
            <Typography className="demoText" variant="h1" fontSizes={[24, 38, 40]} text="Estimate the value you can achieve with Leena AI"/>
          </div>
          <div className="textCenter">
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[16, 18, 22]} variant="h1" text="Calculate the potential return on investment you could realize by enhancing your employee experience with the Leena AI products."/>
          </div>
          <div className="textCenter">
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[16, 18, 22]} variant="h1" text=""/>
          </div>
        </Slide>
        <Slide from='right' className="rightContainer desktop">
          <Form />
        </Slide>
      </div>
      <div className="result">
        <div className="header">
          <Typography className="demoText" variant="h1" fontSizes={[24, 38, 40]} text="Your potential return on investment"/>
        </div>
        <div className="body">
          <Graph />
          <div className="text">
            <div className="row">
              <img alt="roi result time" src="/images/roi/time.svg" />
              <div className="text">
                <Typography fontWeight="500" color="#616161" fontSizes={[14, 14, 14]} variant="h1" text="Total time saved"/>
                <Typography className="value" fontWeight="600" color="#212121" fontSizes={[18, 18, 18]} variant="h1" text="14,200 hrs"/>
              </div>
            </div>
            <div className="row">
              <img alt="roi result time" src="/images/roi/money.svg" />
              <div className="text">
                <Typography fontWeight="500" color="#616161" fontSizes={[14, 14, 14]} variant="h1" text="Total money saved"/>
                <Typography className="value" fontWeight="600" color="#212121" fontSizes={[18, 18, 18]} variant="h1" text="$16,000,000"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ROIStyles>
  );
}

CaseStudies.propTypes = {};

export default memo(CaseStudies);