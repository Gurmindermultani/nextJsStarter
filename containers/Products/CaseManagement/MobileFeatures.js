/**
 *
 * ProductHr
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ProductStyles = styled.div`
  .body {
    display: flex;
    .leftContainer {
      padding-left: 10px;
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
  }
  @media only screen and (max-width: 760px) {
  
  }
`;

const faqData = [
  {
    heading: 'Conversational UI',
    text: 'Chat interface ticketing platform that simply talks to your employees instead of throwing complicated forms on them.',
  },
  {
    heading: 'Pre-built topics',
    text: 'Huge knowledge base and artificial intelligence combined with domain expertise gives employees pre-built topics upfront.',
  },
  {
    heading: 'Multiple platforms and channels',
    text: 'Easily integrate your HRIS system and collaboration platforms you are using to the conversational ticketing platform.',
  },
  {
    heading: 'Intelligent case assignment',
    text: 'Make the process super efficient by assigning the ticket automatically to the person responsible for resolving it.',
  },
  {
    heading: 'Smart ticketing',
    text: 'Get rid of answering repetitive questions. Add frequently asked questions directly to your knowledge base with a single click and auto-answer repetitive queries.',
  },
  {
    heading: 'Real-time updates',
    text: 'Keep your employees updated with the real-time ticket status and eliminate the need of employee follow-ups.',
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
            <ExpansionPanel key={'panel' + idx} expanded={expanded === ('panel' + idx)} onChange={handleChange('panel' + idx)}>
              <ExpansionPanelSummary>
                <div className="accordianHeader">
                  <Typography
                    variant="h4" 
                    fontSize="20px"
                    text={data.heading}
                  />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="description" variant="paragraph2" fontSize="16px" text={data.text}/>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )}
        </div>
      </div>
    </ProductStyles>
  );
}

ProductHr.propTypes = {};

export default memo(ProductHr);