/**
 *
 * ReadCaseStudies
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Slide from '../VisibilitySensor/Slide';

const ReadCaseStudiesStyles = styled.div`
  .singleCaseStudy {
    max-width: 342px;
    border-radius: 4px;
    background: #0F72EE;
    text-align: left;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 12px 36px #00000029;
    .leftContainer {
      width: 50%;
      .logo {
        width: 130px;
        height: 100px;
        background: white;
        transform: rotate(15deg);
        position: absolute;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        margin-top: 00px;
        padding: 0 16px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
  
  }
`;

const caseStudies = [
  {
    name: 'airasia',
    text: 'Discover how Airasia transformed employee query resolution with Leena AI',
    cover: '/images/airasia/book.png',
  }
];

function ReadCaseStudies(props) {
  return (
    <Slide>
      <ReadCaseStudiesStyles className="caseStudies">
        {caseStudies.map( caseStudy => 
          <div key={caseStudy.name} className="singleCaseStudy">
            <div className="leftContainer">
              <div className="logo">
                {/* <img alt="air asia" src={`/images/clients/${caseStudy.name}.png`} /> */}
              </div>
              <div className="text">
                <Typography variant="h6" color="#ffffff" fontSizes={[14, 14, 14]} text={caseStudy.text}/>
              </div>
            </div>
          </div>
        )}
      </ReadCaseStudiesStyles>
    </Slide>
  );
}

ReadCaseStudies.propTypes = {};

export default memo(ReadCaseStudies);