/**
 *
 * ProductHr
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';

import { Spring } from 'react-spring/renderprops.cjs';
import Slide from "../../../components/VisibilitySensor/Slide";
import VisibilitySensor from "../../../components/VisibilitySensor";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ProductStyles = styled.div`
  .productHeader {
    display: flex;
    .text {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
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
    .leftContainer {
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
        top: 10px;
        left: 0;
        width: 70%;
      }
      &.a2 {
        top: 106px;
        left: 78px;
        width: 80%;
      }
      &.a3 {
        bottom: 30px;
        right: 0px;
        width: 78%;
      }
      &.b1 {
        top: 0px;
        left: -10px;
        width: 80%;
      }
      &.b2 {
        top: 96px;
        right: 0px;
        width: 70%;
      }
      &.c1 {
        top: 10px;
        left: 0;
        width: 70%;
      }
      &.c2 {
        top: 106px;
        left: 78px;
        width: 80%;
      }
      &.c3 {
        bottom: 30px;
        right: 0px;
        width: 78%;
      }
      &.d1 {
        top: 0px;
        left: -10px;
        width: 80%;
      }
      &.d2 {
        top: 96px;
        right: 0px;
        width: 70%;
      }
      &.e1 {
        top: 10px;
        left: 0;
        width: 70%;
      }
      &.e2 {
        top: 106px;
        left: 78px;
        width: 80%;
      }
      &.e3 {
        top: 20px;
        right: 40px;
        width: 38%;
      }
      &.e4 {
        bottom: 30px;
        right: 0px;
        width: 78%;
      }
      &.f1 {
        top: 22px;
        left: 0;
        width: 80%;
      }
      &.f2 {
        top: 0px;
        right: 40px;
        width: 40%;
      }
      &.f3 {
        bottom: 68px;
        right: -10px;
        width: 40%;
      }
      &.f4 {
        bottom: -10px;
        right: 40px;
        width: 40%;
      }
    }
  }
`;

function ProductHr(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ProductStyles>
      <div className="body">
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring delay={300} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateX(0)"
                  : "translateX(-200px)",
            }}>
              {({ opacity, transform }) => (
                <div style={{opacity, transform}} className="leftContainer">
                  <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary>
                      <div className="accordianHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Conversational surveys`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Make your surveys conversational and employee-friendly. Get rid of long boring forms and poor user interface."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Analytical reports`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Access survey feedback instantly on your dashboard. Get high-quality actionable insights about happiness score of your organization, and know about your unhappy employees."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Periodic surveys`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Conduct surveys periodically throughout the employees’ lifecycle. Save your HR from biased and inaccurate feedback."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Actionable insights`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Get to know real-time actionable insights right on your dashboard. Know the factors that require improvement and challenges faced by employees."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Timely reminders`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Set automated reminders for your employees to participate in the engagement surveys. Ensure that all your employees give the feedback."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Easy integration`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Integrate your engagement platform easily with your existing HRIS or workflow channels. Take the survey where your employees are."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <div className="buttons">
                    <Button variant="contained" size="large" name="Schedule demo"/>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <div className="rightContainer">
          {expanded === "panel1" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="a1">
                <img src="/images/engage/a1.svg"/>
              </Slide>
              <Slide from='right' className="a2">
                <img src="/images/engage/a2.svg"/>
              </Slide>
              <Slide from='up' className="a3">
                <img src="/images/engage/a3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel2" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="b1">
                <img src="/images/engage/b1.svg"/>
              </Slide>
              <Slide from='right' className="b2">
                <img src="/images/engage/b2.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel3" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="c1">
                <img src="/images/engage/c1.svg"/>
              </Slide>
              <Slide from='right' className="c2">
                <img src="/images/engage/c2.svg"/>
              </Slide>
              <Slide from='up' className="c3">
                <img src="/images/engage/c3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel4" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="d1">
                <img src="/images/engage/d1.svg"/>
              </Slide>
              <Slide from='right' className="d2">
                <img src="/images/engage/d2.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel5" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="e1">
                <img src="/images/engage/e1.svg"/>
              </Slide>
              <Slide from='right' className="e2">
                <img src="/images/engage/e2.svg"/>
              </Slide>
              <Slide from='up' className="e3">
                <img src="/images/engage/e3.svg"/>
              </Slide>
              <Slide from='up' className="e4">
                <img src="/images/engage/e4.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel6" &&
            <div className="image center">
              <img src="/images/bg.svg"/>
              <Slide from='left' className="f1">
                <img src="/images/engage/f1.svg"/>
              </Slide>
              <Slide from='right' className="f2">
                <img src="/images/engage/f2.svg"/>
              </Slide>
              <Slide from='right' className="f3">
                <img src="/images/engage/f3.svg"/>
              </Slide>
              <Slide from='right' className="f4">
                <img src="/images/engage/f4.svg"/>
              </Slide>
            </div>
          }
        </div>
      </div>
    </ProductStyles>
  );
}

ProductHr.propTypes = {};

export default memo(ProductHr);