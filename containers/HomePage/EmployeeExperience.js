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
import KnowMore from '../../components/KnowMore';
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
      padding-right: 10px;
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
        right: 0;
        bottom: 10px;
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
          {expanded === "panel1" &&
            <div className="image center">
              <img src="/images/bg2.svg"/>
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
              <img src="/images/bg2.svg"/>
              <Slide from='right' className="b1">
                <img src="/images/home/experience/b1.svg"/>
              </Slide>
              <Slide from='left' className="b2">
                <img src="/images/home/experience/b2.svg"/>
              </Slide>
            </div>
          }
        </div>
        <div className="rightContainer">
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
            <KnowMore to="/employee-engagement"/>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

EmployeeExperience.propTypes = {};

export default memo(EmployeeExperience);