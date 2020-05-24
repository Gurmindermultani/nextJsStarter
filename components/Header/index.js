/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../Button';
import Typography from '../Typography';

import { HeaderStyles } from './styles';

export const navigation = [
  {
    name: 'product',
    label: 'Product',
    links: [
      {
        name: 'caseManagement',
        label: 'Case Management',
      },
      {
        name: 'faqAutomation',
        label: 'FAQ Automation',
      },
      {
        name: 'hrWorkflows',
        label: 'HR workflows',
      },
      {
        name: 'engagement',
        label: 'Engagement',
      },
      {
        name: 'wfhSurveys',
        label: 'WFH surveys',
      },
    ]
  },
  {
    name: 'resources',
    label: 'Resources',
    links: [
      {
        name: 'blogs',
        label: 'Blogs',
      },
      {
        name: 'caseStudies',
        label: 'Case Studies',
      },
      {
        name: 'newsAndMedia',
        label: 'News and Media',
      },
      {
        name: 'roiCalculator',
        label: 'ROI calculator',
      }
    ]
  },
  {
    name: 'company',
    label: 'Company',
    links: [
      {
        name: 'careers',
        label: 'Careers',
      },
      {
        name: 'aboutUs',
        label: 'About Us',
      },
      {
        name: 'contactUs',
        label: 'Contact Us',
      },
    ]
  },
];

function Header(props) {
  return (
    <HeaderStyles>
      <div className="logo">
        <img src="/images/leenaLogo.png"/>
      </div>
      <div className="navigation">
        {navigation.map( groupNav => 
          <div key={groupNav.name} className="groupNav">
            <div className="groupName">
              <Typography className="groupHeader" variant="h6" fontSize="16px" color="#212121" text={groupNav.label}/>
              <img alt="down-arrow" src="/images/icons/down-arrow-blue.svg"/>
            </div>
            <div className="links">
              {groupNav.links.map( link => 
                <div className="link" key={link.name}>
                  <Typography variant="paragraph2" fontSize="14px" color="#0F72EE" text={link.label}/>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="buttons">
        <Button variant="contained" name="Schedule Demo" />
      </div>
    </HeaderStyles>
  );
}

Header.propTypes = {};

export default memo(Header);