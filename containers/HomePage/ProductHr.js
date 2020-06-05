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
import VisibilitySensor from "react-visibility-sensor";

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
  }
  .buttons {
    margin-top: 48px;
    button {
      min-width: 172px;
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
    <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateY(0)"
                : "translateY(200px)",
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
        <VisibilitySensor partialVisibility>
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
                          text={`FAQ Automation`}
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
                          text={`Case Management`}
                        />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className="description" variant="paragraph2" fontSize="16px" text={"Transform your policy queries into AI-enabled conversational chat. Give instant automatic replies for all employee queries that’s documented in your knowledge base."}/>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <ExpansionPanelSummary>
                      <div className="questionHeader">
                        <Typography
                          variant="h4" 
                          fontSize="20px"
                          text={`Employee Transactions`}
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
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={300} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateX(0)"
                  : "translateX(200px)",
            }}>
              {({ opacity, transform }) => (
                <div style={{opacity, transform}} className="rightContainer">
                  <div className="image">
                    <img src="/images/home/faq.svg"/>
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

ProductHr.propTypes = {};

export default memo(ProductHr);