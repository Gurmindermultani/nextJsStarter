/*
* MobileMenu
*
*/

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import ScheduleDemoButton from '../ScheduleDemoButton';
import Link from 'next/link'

import { navigation } from './index';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const Styles = styled.div`
  height: calc(100vh - 60px);
  background: white;
  overflow: hidden;
  .MuiAccordion-root {
    box-shadow: none;
    margin: 0px;
    &::before {
      height: 0px;
    }
    .MuiAccordionSummary-root {
      padding: 0px;
      padding-right: 34px;
      min-height: auto;
      background: ${props => props.theme.palette.smoke};
      .MuiAccordionSummary-content {
        margin: 0;
        min-height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 30px;
      }
      .MuiAccordionSummary-expandIcon {
        /* padding: 0px; */
      }
    }
    .MuiAccordionDetails-root {
      padding: 16px 30px 16px 30px;
    }
    &.Mui-expanded {
      box-shadow: 0px 4px 16px #00000014;
      background: ${props => props.theme.palette.white};
      margin: 0px;
    }
  }
  .links {
    background: white;
    .link {
      margin-top: 10px;
      cursor: pointer;
      &:first-child {
        margin-top: 0;
      }
      &:hover {
        span {
          color: #0F72EE;
        }
      }
    }
  }
  .buttons {
    padding: 0 30px;
    margin-top: 110px;
    button {
      width: 100%;
    }
  }
`;

function MobileMenu(props) {
  const [expanded, setExpanded] = React.useState('product');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : panel);
  };
  return (
    <Styles>
      {navigation.map( groupNav => 
        <Accordion key={groupNav.name} expanded={expanded === groupNav.name} onChange={handleChange(groupNav.name)}>
          <AccordionSummary expandIcon={<img src='/images/icons/down-arrow-blue.svg' />}>
            <div className="accordianHeader">
              <Typography
                variant="h6"
                fontSizes={[16, 16, 16]}
                text={groupNav.label}
              />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="links">
              {groupNav.links.map( link => {
                if (link.href) {
                  return (
                    <div className="link" key={link.name}>
                      <a href={`${link.href}`} target="_blank">
                        <div>
                          <Typography variant="paragraph2" fontSizes={[15, 15, 15]} color="#212121" text={link.label}/>
                        </div>
                      </a>
                    </div>
                  )
                }
                return (
                  <div className="link" key={link.name}>
                    <Link href={`/${link.name}`}>
                      <a>
                        <Typography variant="paragraph2" fontSizes={[15, 15, 15]} color="#212121" text={link.label}/>
                      </a>
                    </Link>
                  </div>
                )
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      )}
      <div className="buttons">
        <ScheduleDemoButton type="link" fullWidth />
      </div>
    </Styles>
  )
};

MobileMenu.propTypes = {};

export default memo(MobileMenu);