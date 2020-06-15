/**
 *
 * EmployeeExperience
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "../../components/VisibilitySensor";

import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Slide from "../../components/VisibilitySensor/Slide";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ProductStyles = styled.div`
  overflow: hidden;
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
      .MuiExpansionPanel-root {
        box-shadow: none;
        margin: 0px;
        margin-bottom: 16px;
        &::before {
          height: 0px;
        }
        .MuiExpansionPanelSummary-root {
          padding: 0px;
          min-height: auto;
          .MuiExpansionPanelSummary-content {
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
          .MuiExpansionPanelSummary-expandIcon {
            padding: 0px;
          }
        }
        .MuiExpansionPanelDetails-root {
          padding: 0 24px 16px 24px;
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
    button {
      min-width: 172px;
    }
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
        bottom: 0px;
        right: 0px;
        width: 78%;
      }
      &.a2 {
        top: 116px;
        left: 58px;
        width: 81%;
        z-index: 1;
      }
      &.a3 {
        top: 0;
        left: 0;
        width: 60%;
      }
      &.b1 {
        top: -38px;
        left: 0;
        width: 90%;
      }
      &.b2 {
        top: 76px;
        right: 0px;
        width: 31%;
      }
      &.b3 {
        bottom: 0px;
        right: 0px;
        width: 78%;
      }
      &.c1 {
        top: -38px;
        left: 0;
        width: 90%;
      }
      &.c2 {
        top: 50px;
        right: 0px;
        width: 31%;
      }
      &.c3 {
        bottom: 0px;
        right: 0px;
        width: 78%;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .body {
      .rightContainer {
        flex-basis: 100%;
      }
      .leftContainer {
        display: none;
      }
    }
  }
`;

function EmployeeExperience(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ProductStyles>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateY(0)"
                : "translateY(200px)",
          }}>
            {({ opacity, transform }) => (
              <div style={{opacity, transform}} className="productHeader">
                <div className="text">
                  <Typography variant="h4" fontSize="20px" text={props.heading}/>
                  <Typography className="description" variant="paragraph2" fontSize="18px" text={props.description}/>
                </div>
                <div>
                  <img src="/images/home/experience.svg"/>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <div className="body">
        <div className="leftContainer">
          {expanded === "panel1" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="a1">
                <img src="/images/home/experience/a1.svg"/>
              </Slide>
              <Slide from='right' className="a2">
                <img src="/images/home/experience/a2.svg"/>
              </Slide>
              <Slide from='up' className="a3">
                <img src="/images/home/experience/a3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel2" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="b1">
                <img src="/images/home/experience/b1.svg"/>
              </Slide>
              <Slide from='right' className="b2">
                <img src="/images/home/experience/b2.svg"/>
              </Slide>
              <Slide from='up' className="b3">
                <img src="/images/home/experience/b3.svg"/>
              </Slide>
            </div>
          }
        </div>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring delay={300} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateX(0)"
                  : "translateX(200px)",
            }}>
              {({ opacity, transform }) => (
                <div style={{opacity, transform}} className="rightContainer">
                  <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary>
                      <div className="accordianHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Connect with your employees`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Conduct AI-driven surveys throughout the employees’ lifecycle. Build an open and transparent work culture."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Intelligent analytics`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Get personalized reports about the happiness score of your employees. Know if they are aligned with the organization goals."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <div className="buttons">
                    <Button variant="contained" size="large" name="Schedule Demo"/>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </ProductStyles>
  );
}

EmployeeExperience.propTypes = {};

export default memo(EmployeeExperience);