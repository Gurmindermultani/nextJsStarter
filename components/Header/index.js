/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useSpring, animated, config } from 'react-spring';

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
  const animatedHeader = useSpring({
    from: { opacity: 1, top: '-80px', height: '0px' },
    to: { opacity: 1, top: '0px', height: '80px',},
  });
  return (
    <HeaderStyles>
      <animated.div className="animatedHeader" style={animatedHeader}>
        <div className="logo pointer">
          <Link href="/">
            <img src="/images/leenaLogo.png"/>
          </Link>
        </div>
        <div className="navigation">
          {navigation.map( groupNav => 
            <div key={groupNav.name} className="groupNav">
              <div className="groupName pointer">
                <Typography className="groupHeader" variant="h6" fontSize="16px" color="#212121" text={groupNav.label}/>
                <img alt="down-arrow" src="/images/icons/down-arrow-blue.svg"/>
              </div>
              <div className="links">
                {groupNav.links.map( link => 
                  <div className="link" key={link.name}>
                    <Link href={`/${groupNav.name}/${link.name}`}>
                      <div>
                        <Typography variant="paragraph2" fontSize="14px" color="#212121" text={link.label}/>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="buttons">
          {props.router.pathname.indexOf('scheduleDemo') > -1 &&
            <div className="demo">
              <img className="phoneImage" alt="phone" src="/images/icons/phone.svg"/>
              <Typography fontWeight="300" color="#212121" fontSize="16px" variant="paragraph2" text="+91 8851168842"/>
              <img className="mailImage" alt="mail" src="/images/icons/mail.svg"/>
              <Typography fontWeight="300" color="#212121" fontSize="16px" variant="paragraph2" text="sales@leena.ai"/>
            </div>
          }
          {props.router.pathname.indexOf('scheduleDemo') === -1 &&
            <Link href="/scheduleDemo">
              <div>
                <Button variant="contained" name="Schedule Demo" />
              </div>
            </Link>
          }
        </div>
      </animated.div>
    </HeaderStyles>
  );
}

Header.propTypes = {};

export default memo(withRouter(Header));