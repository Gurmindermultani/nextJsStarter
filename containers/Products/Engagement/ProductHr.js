/**
 *
 * ProductHr
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import ScheduleDemoButton from '../../../components/ScheduleDemoButton';

import { Spring } from 'react-spring/renderprops.cjs';
import Slide from "../../../components/VisibilitySensor/Slide";
import VisibilitySensor from "../../../components/VisibilitySensor";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ProductStyles = styled.div`
  margin-bottom: 100px;
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
  .rightContainer {
    display: flex;
    padding-right: 30px;
  }
  .image {
    position: relative;
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: -50px;
        left: -70px;
        width: 105%;
      }
      &.a2 {
        top: 86px;
        left: 28px;
        width: 110%;
      }
      &.a3 {
        bottom: 0px;
        right: -50px;
        width: 100%;
      }
      &.b1 {
        top: -30px;
        left: -50px;
        width: 100%;
      }
      &.b2 {
        top: 96px;
        right: -70px;
        width: 80%;
      }
      &.c1 {
        top: -50px;
        left: -70px;
        width: 105%;
      }
      &.c2 {
        top: 95px;
        left: 28px;
        width: 110%;
      }
      &.c3 {
        bottom: 20px;
        right: -50px;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .body {
      .leftContainer {
        flex-basis: 100%;
      }
      .rightContainer {
        display: none;
      }
    }
  }
`;

function ProductHr(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : panel);
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
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <div className="rightContainer">
          {expanded === "panel1" &&
            <div className="image">
              <img src="/images/engage/abg.svg"/>
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
            <div className="image">
              <img src="/images/bg4.svg"/>
              <Slide from='left' className="b1">
                <img src="/images/engage/b1.svg"/>
              </Slide>
              <Slide from='right' className="b2">
                <img src="/images/engage/b2.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel3" &&
            <div className="image">
              <img src="/images/engage/abg.svg"/>
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
        </div>
      </div>
    </ProductStyles>
  );
}

ProductHr.propTypes = {};

export default memo(ProductHr);