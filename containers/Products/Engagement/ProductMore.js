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
    flex-direction: row-reverse;
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
      &.d1 {
        top: -30px;
        left: -50px;
        width: 100%;
      }
      &.d2 {
        top: 96px;
        right: -70px;
        width: 80%;
      }
      &.e1 {
        top: -30px;
        left: -60px;
        width: 100%;
      }
      &.e2 {
        top: 116px;
        left: 38px;
        width: 110%;
      }
      &.e3 {
        top: 20px;
        right: -20px;
        width: 38%;
      }
      &.e4 {
        bottom: -20px;
        right: -60px;
        width: 100%;
      }
      &.f1 {
        top: -10px;
        left: -40px;
        width: 110%;
      }
      &.f2 {
        top: -30px;
        right: -20px;
        width: 46%;
      }
      &.f3 {
        bottom: 48px;
        right: -90px;
        width: 46%;
      }
      &.f4 {
        bottom: -60px;
        right: -30px;
        width: 46%;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .body {
      margin-top: 0;
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
  const [expanded, setExpanded] = React.useState('panel4');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : panel);
  };
  return (
    <ProductStyles>
      <div className="body">
        <div className="leftContainer">
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
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Get to know real-time actionable insights right on your dashboard. Know the factors that require improvement, and challenges faced by employees."}/>
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
            <ScheduleDemoButton type="link" />
          </div>
        </div>
        <div className="rightContainer">
          {expanded === "panel4" &&
            <div className="image center">
              <img src="/images/bg4.svg"/>
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
              <img src="/images/bg4.svg"/>
              <Slide from='left' className="e1">
                <img src="/images/engage/e1.svg"/>
              </Slide>
              <Slide from='right' className="e2">
                <img src="/images/engage/e2.svg"/>
              </Slide>
              <Slide from='right' className="e3">
                <img src="/images/engage/e3.svg"/>
              </Slide>
              <Slide from='up' className="e4">
                <img src="/images/engage/e4.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel6" &&
            <div className="image center">
              <img src="/images/bg4.svg"/>
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