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


function CaseStudies(props) {
  return (
    <ROIStyles>
      <Slide from='left' className="leftContainer">
        <div className="image">
          <img alt="top buildings" src="images/roi/roi.svg" />
        </div>
        <div className="textCenter">
          <Typography className="demoText" variant="h1" fontSizes={[24, 40, 40]} text="Estimate the value you can achieve with Leena AI"/>
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
    </ROIStyles>
  );
}

CaseStudies.propTypes = {};

export default memo(CaseStudies);