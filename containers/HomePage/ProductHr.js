/**
 *
 * ProductHr
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Button from '../../components/Button';

import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "../../components/VisibilitySensor";
import Slide from "../../components/VisibilitySensor/Slide";
import FadeIn from "../../components/VisibilitySensor/FadeIn";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ProductStyles = styled.div`
  overflow: hidden; 
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
      padding-left: 10px;
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
        top: -45px;
        left: 0;
        width: 70%;
      }
      &.a2 {
        top: 16px;
        right: 38px;
        width: 36%;
      }
      &.a3 {
        bottom: -30px;
        right: -40px;
        width: 88%;
      }
      &.b1 {
        top: -28px;
        left: 0;
        width: 85%;
      }
      &.b2 {
        top: 76px;
        right: -30px;
        width: 31%;
      }
      &.b3 {
        bottom: -10px;
        right: -10px;
        width: 88%;
      }
      &.c1 {
        top: -28px;
        left: 0;
        width: 80%;
      }
      &.c2 {
        top: 40px;
        right: -10px;
        width: 31%;
      }
      &.c3 {
        bottom: 0px;
        right: 0px;
        width: 82%;
      }
    }
  }
  .rightContainer {
    padding-right: 30px;
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
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ProductStyles>
    <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateX(0)"
                : "translateX(-200px)",
          }}>
            {({ opacity, transform }) => (
              <div style={{opacity, transform}} className="productHeader">
                <div>
                  <img src="/images/home/helpdesk.svg"/>
                </div>
                <div className="text">
                  <Typography variant="h4" fontSize="20px" text={props.heading}/>
                  <Typography className="description" variant="paragraph2" fontSize="18px" text={props.description}/>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
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
                          text={`FAQ automation`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Transform your policy queries into AI-enabled conversational chat. Give instant automatic replies for all employee queries that’s documented in your knowledge base."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Case management`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Let your employees raise tickets right on the chat. Also, give them real-time updates about the resolution status. It's intuitive, efficient and quick."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`HR workflows`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Make it easy for your employees to access the services they need. Get rid of complicated forms and tedious workflows."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <div className="buttons">
                    <Button variant="contained" size="large" name="Get HR helpdesk"/>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <div className="rightContainer">
          {expanded === "panel1" &&
            <div className="image center">
              <img src="/images/bg1.svg"/>
              <Slide from='left' className="a1">
                <img src="/images/home/helpdesk/a1.svg"/>
              </Slide>
              <Slide from='right' className="a2">
                <img src="/images/home/helpdesk/a2.svg"/>
              </Slide>
              <Slide from='up' className="a3">
                <img src="/images/home/helpdesk/a3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel2" &&
            <div className="image center">
              <img src="/images/bg1.svg"/>
              <Slide from='left' className="b1">
                <img src="/images/home/helpdesk/b1.svg"/>
              </Slide>
              <Slide from='right' className="b2">
                <img src="/images/home/helpdesk/b2.svg"/>
              </Slide>
              <Slide from='up' className="b3">
                <img src="/images/home/helpdesk/b3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel3" &&
            <div className="image center">
              <img src="/images/bg1.svg"/>
              <Slide from='left' className="c1">
                <img src="/images/home/helpdesk/c1.svg"/>
              </Slide>
              <Slide from='right' className="c2">
                <img src="/images/home/helpdesk/c2.svg"/>
              </Slide>
              <Slide from='up' className="c3">
                <img src="/images/home/helpdesk/c3.svg"/>
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