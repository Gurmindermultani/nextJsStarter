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
    heading: 'Natural language understanding',
    text: 'Understand your employee queries accurately and let the virtual HR assistant reply instantly.',
  },
  {
    heading: 'Knowledge management',
    text: 'Combine your policy documents with our intelligent knowledge base and give your employees personalized experience.',
  },
  {
    heading: 'Multiple platforms and channels',
    text: 'Easily integrate your existing HRIS and collaboration platforms to enterprise conversational AI experience.',
  },
  {
    heading: 'Self-learning AI experience',
    text: 'Employee experience platform improves itself with every user-interaction and AI-driven feedback loop.',
  },
  {
    heading: 'Conversational interface',
    text: 'Give your employees an interactive user interface where they chat directly with the virtual HR assistant.',
  },
  {
    heading: 'Nudge notifications',
    text: 'Inform all employees about important announcements and events at once by sending bulk notifications.',
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