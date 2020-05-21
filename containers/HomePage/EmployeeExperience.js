/**
 *
 * EmployeeExperience
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Button from '../../components/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ProductStyles = styled.div`
  margin-top: 96px;
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
  }
  .buttons {
    margin-top: 48px;
    button {
      min-width: 172px;
    }
  }
`;

function EmployeeExperience(props) {
  const [expanded, setExpanded] = React.useState(false);

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
          <div className="image">
            <img src="/images/home/connect.svg"/>
          </div>
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
            <Button variant="contained" size="large" name="Schedule Demo"/>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

EmployeeExperience.propTypes = {};

export default memo(EmployeeExperience);