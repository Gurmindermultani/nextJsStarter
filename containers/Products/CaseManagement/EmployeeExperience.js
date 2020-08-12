/**
 *
 * EmployeeExperience
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

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
  const [expanded, setExpanded] = React.useState('panel1');

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
          <div className="image">
            <img src="/images/home/connect.svg"/>
          </div>
        </div>
        <div className="rightContainer">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
            <Button variant="contained" size="large" name="Schedule demo"/>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

EmployeeExperience.propTypes = {};

export default memo(EmployeeExperience);