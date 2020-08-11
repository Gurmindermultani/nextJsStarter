/**
 *
 * ProductHr
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const ProductStyles = styled.div`
  .body {
    display: flex;
    .leftContainer {
      padding-left: 10px;
      padding-right: 10px;
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
  @media only screen and (max-width: 760px) {
  
  }
`;

const faqData = [
  {
    heading: 'Conversational interface',
    text: 'Make it simple for your employees to give feedback with easy-to-use AI-powered conversations. Eliminate the hassle of poor user interface and long feedback forms.',
  },
  {
    heading: 'Easy predictive replies',
    text: 'Save your employees’ time by giving them the option of replying with a single click. Show predictive replies upfront on the chat.',
  },
  {
    heading: 'Easy integration',
    text: 'Easily integrate WFH surveys with the workflow channels and HRIS you already use. Take the WFH feedback surveys where your employees are.',
  },
  {
    heading: 'Textual answers',
    text: 'Allow your employees to give elaborate feedback through textual answers. Reply to these feedbacks separately while the rest get analyzed automatically.',
  },
  {
    heading: 'Analytical dashboard',
    text: 'Get detailed real-time actionable insights right on your analytical dashboard. Analyze employees’ response without any bias with the help of AI.',
  },
  {
    heading: 'Multiple parameters',
    text: 'Measure your remote employee engagement on multiple parameters. Get separate scores against each parameter and see where you need to improve.',
  }
];

function ProductHr(props) {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
  };
  return (
    <ProductStyles>
      <div className="body">
        <div className="leftContainer">
          {faqData.map( (data, idx) => 
            <Accordion key={'panel' + idx} expanded={expanded === ('panel' + idx)} onChange={handleChange('panel' + idx)}>
              <AccordionSummary>
                <div className="accordianHeader">
                  <Typography
                    variant="h4" 
                    fontSize="20px"
                    text={data.heading}
                  />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="description" variant="paragraph2" fontSize="16px" text={data.text}/>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      </div>
    </ProductStyles>
  );
}

ProductHr.propTypes = {};

export default memo(ProductHr);