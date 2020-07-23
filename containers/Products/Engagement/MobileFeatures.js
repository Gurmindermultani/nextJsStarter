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
          padding: 0 32px 16px 24px;
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
      margin: auto;
    }
  }
  @media only screen and (max-width: 760px) {
    margin-bottom: 0px;
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
        <div className="leftContainer">
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
            <Button size="large" variant="contained" name={props.scheduleDemoName} onClick={() => props.scheduleDemoClickFn()} />
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

ProductHr.propTypes = {};

export default memo(ProductHr);