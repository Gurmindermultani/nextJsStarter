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
    heading: 'Leave management',
    text: 'Let your employees manage leaves on the go. Employees can view their leave balance and fill up the leave request form via chat itself.',
  },
  {
    heading: 'Holiday calendar',
    text: 'Don’t kill your employees’ excitement by making it hard for them to find your annual holiday calendar. Make it available for them in a single click.',
  },
  {
    heading: 'Generate payslip',
    text: 'Make it easy for your employees to extract all their payslips whenever they need. Just a simple message is all it takes.',
  },
  {
    heading: 'Know tax and deductions',
    text: 'Don’t burden your HR folks with repetitive tax queries. Let the virtual HR assistant give instant replies to your employees.',
  },
  {
    heading: 'Search employees',
    text: 'Ensure super smooth employee experience with easy-to-use employee search option. When stuck in a problem, your employees can easily know whom to reach out.',
  },
  {
    heading: 'Claim reimbursement',
    text: 'Manage employee reimbursement claims in the easiest way possible. Your employees just need to upload the receipt photo and add details on the chat itself.',
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