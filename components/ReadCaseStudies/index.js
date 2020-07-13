/**
 *
 * ReadCaseStudies
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'
import Typography from '../Typography';
import Button from '../Button';
import Slide from '../VisibilitySensor/Slide';

const ReadCaseStudiesStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  .singleCaseStudy {
    max-width: 342px;
    border-radius: 4px;
    text-align: left;
    .cardBody {
      img {
        width: 342px;
        box-shadow: 0px 12px 36px #00000029;
      }
    }
    .cardFooter {
      margin-top: 16px;
      button {
        width: 152px;
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
    link: '/airasia-employee-query-resolution',
  }
];

function ReadCaseStudies(props) {
  return (
    <Slide>
      <ReadCaseStudiesStyles className="caseStudies">
        {caseStudies.map( caseStudy => 
          <div key={caseStudy.name} className="singleCaseStudy">
            <div className="cardBody">
              <img alt="case studies" src={`/images/caseStudies/${caseStudy.name}.png`} />
            </div>
            <div className="cardFooter">
              <Link href={caseStudy.link}>
                <a>
                  <Button name="Read now">
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </ReadCaseStudiesStyles>
    </Slide>
  );
}

ReadCaseStudies.propTypes = {};

export default memo(ReadCaseStudies);