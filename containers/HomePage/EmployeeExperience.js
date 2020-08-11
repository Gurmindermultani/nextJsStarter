/**
 *
 * EmployeeExperience
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '../../components/Typography';
import KnowMore from '../../components/KnowMore';
import Image from '../../components/Image';
import Slide from "../../components/VisibilitySensor/Slide";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const ProductStyles = styled.div`
  margin-top: 46px;
  .productHeader {
    display: flex;
    justify-content: flex-end;
    .text {
      display: flex;
      flex-direction: column;
      margin-right: 16px;
      text-align: right;
      .description {
        max-width: 710px;
        margin-top: 10px;
        line-height: 26px;
      }
    }
  }
  .body {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    .rightContainer {
      flex-basis: 50%;
      padding-right: 10px;
      padding-left: 10px;
      min-height: 350px;
      .MuiAccordion-root {
        box-shadow: none;
        margin: 0px;
        margin-bottom: 16px;
        &::before {
          height: 0px;
        }
        .MuiAccordionSummary-root {
          padding: 0px;
          min-height: auto;
          .MuiAccordionSummary-content {
            margin: 0;
            min-height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${props => props.theme.palette.smoke};
            padding: 16px 24px;
            &.Mui-expanded {
              background: ${props => props.theme.palette.white};
            }
          }
          .MuiAccordionSummary-expandIcon {
            padding: 0px;
          }
        }
        .MuiAccordionDetails-root {
          padding: 0 22px 16px 24px;
        }
        &.Mui-expanded {
          box-shadow: 0px 4px 16px #00000014;
          background: ${props => props.theme.palette.white};
        }
      }
    }
    .description {
      line-height: 26px;
    }
  }
  .buttons {
    margin-top: 48px;
  }
  .image {
    position: relative;
    width: 400px;
    height: 310px;
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        left: -40px;
        top: -20px;
        width: 88%;
      }
      &.a2 {
        top: 102px;
        left: 68px;
        width: 94%;
        z-index: 1;
      }
      &.a3 {
        right: -36px;
        bottom: -14px;
        width: 90%;
      }
      &.b1 {
        bottom: -27px;
        right: -55px;
        width: 70%;
        z-index: 1;
      }
      &.b2 {
        top: -25px;
        left: 0px;
        width: 81%;
      }
    }
  }
  .leftContainer {
    padding-left: 30px;
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 760px) {
    margin-top: 0px;
    .productHeader {
      display: flex;
      flex-direction: column-reverse;
      padding: 0 30px;
      .text {
        margin-top: 8px;
        text-align: left;
      }
    }
    .body {
      margin-top: 24px;
      padding: 0 20px;
      .rightContainer {
        flex-basis: 100%;
      }
      .leftContainer {
        display: none;
      }
    }
    .buttons {
      button {
        margin: auto;
      }
    }
  }
`;

function EmployeeExperience(props) {
  const [expanded, setExpanded] = React.useState('panel4');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
  };
  return (
    <ProductStyles>
      <div className="productHeader">
        <div className="text">
          <Typography variant="h4" fontSize="20px" text={props.heading}/>
          <Typography className="description" variant="paragraph2" fontSize="18px" text={props.description}/>
        </div>
        <div>
          <img src="/images/home/experience.svg"/>
        </div>
      </div>
      <div className="body">
        <div className="leftContainer">
          {expanded === "panel4" &&
            <div className="image center">
              <img alt="employee engagement" src="/images/bg2.svg"/>
              <Slide from='left' className="a1">
                <img alt="employee engagement" src="/images/home/experience/a1.svg"/>
              </Slide>
              <Slide from='right' className="a2">
                <img alt="employee engagement" src="/images/home/experience/a2.svg"/>
              </Slide>
              <Slide from='up' className="a3">
                <img alt="employee engagement" src="/images/home/experience/a3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel5" &&
            <div className="image center">
              <img alt="employee engagement" src="/images/bg2.svg"/>
              <Slide from='right' className="b1">
                <img alt="employee engagement" src="/images/home/experience/b1.svg"/>
              </Slide>
              <Slide from='left' className="b2">
                <img alt="employee engagement" src="/images/home/experience/b2.svg"/>
              </Slide>
            </div>
          }
        </div>
        <div className="rightContainer">
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary>
              <div className="accordianHeader">
                <Typography
                  variant="h4" 
                  fontSize="20px"
                  text={`Connect with your employees`}
                />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Conduct AI-driven surveys throughout the employees’ lifecycle. Build an open and transparent work culture."}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary>
              <div className="questionHeader">
                <Typography
                  variant="h4" 
                  fontSize="20px"
                  text={`Intelligent analytics`}
                />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Get personalized reports about the happiness score of your employees. Know if they are aligned with the organization goals."}/>
            </AccordionDetails>
          </Accordion>
          <div className="buttons">
            <KnowMore className="experienceKnowMore" name="Know more" to="/employee-engagement"/>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

EmployeeExperience.propTypes = {};

export default memo(EmployeeExperience);