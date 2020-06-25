/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'
import { withRouter } from 'next/router'

import Button from '../Button';
import Typography from '../Typography';
import GrowIcon from '../GrowIcon';
import FadeIn from '../VisibilitySensor/FadeIn';
import Slide from '../VisibilitySensor/Slide';

import MobileMenu from './MobileMenu';
import { HeaderStyles } from './styles';

export const navigation = [
  {
    name: 'product',
    label: 'Products',
    links: [
      {
        name: 'employee-query-management',
        label: 'FAQ automation',
      },
      {
        name: 'hr-case-management',
        label: 'Case management',
      },
      {
        name: 'hr-workflows',
        label: 'HR workflows',
      },
      {
        name: 'employee-engagement',
        label: 'Employee engagement',
      },
      {
        name: 'wfh-surveys',
        label: 'WFH surveys',
      },
    ]
  },
  {
    name: 'resources',
    label: 'Resources',
    links: [
      {
        name: 'blog',
        label: 'Blog',
      },
      {
        name: 'case-studies',
        label: 'Case studies',
      },
      // {
      //   name: 'roi-calculator',
      //   label: 'ROI calculator',
      // }
    ]
  },
  {
    name: 'company',
    label: 'Company',
    links: [
      {
        name: 'careers',
        label: 'Careers',
        href: 'https://angel.co/company/leena_ai/jobs'
      },
      {
        name: 'about-us',
        label: 'About us',
      },
      {
        name: 'contact-us',
        label: 'Contact us',
      },
    ]
  },
];

function Header(props) {
  const [ anim, setAnim ] = useState({});
  const [ showMenu, setShowMenu ] = useState(false);
  const play = () => {
    if (showMenu) {
      toggleAlt();
    } else {
      toggle();
    }
    anim.setSpeed(2);
    setShowMenu(!showMenu);
  }
  const toggle = () => {
    anim.playSegments([0,40], true);
    // anim.stop();
  };

  const toggleAlt = () => {
    anim.playSegments([40, 75]);
    // anim.stop();
  };
  return (
    <HeaderStyles>
      <Slide onLoad from='down' className="animatedHeader">
        <div className="logo pointer">
          <Link href="/">
            <a>
              <img src="/images/leenaLogo.svg"/>
            </a>
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
                {groupNav.links.map( link => {
                  if (link.href) {
                    return (
                      <div className="link" key={link.name}>
                        <a href={`${link.href}`} target="_blank">
                          <div>
                            <Typography variant="paragraph2" fontSize="14px" color="#212121" text={link.label}/>
                          </div>
                        </a>
                      </div>
                    )
                  }
                  return (
                    <div className={"link " + (props.router.pathname === `/${link.name}` ? 'selected ' : ' ')} key={link.name}>
                      <Link href={`/${link.name}`}>
                        <a>
                          <Typography variant="paragraph2" fontSize="14px" color="#212121" text={link.label}/>
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
        <div className="buttons desktop">
          {props.router.pathname.indexOf('scheduleDemo') > -1 &&
            <div className="demo">
              <img className="phoneImage" alt="phone" src="/images/icons/phone.svg"/>
              <Typography fontWeight="300" color="#212121" fontSize="16px" variant="paragraph2" text="+91 8851168842"/>
              <img className="mailImage" alt="mail" src="/images/icons/mail.svg"/>
              <Typography fontWeight="300" color="#212121" fontSize="16px" variant="paragraph2" text="sales@leena.ai"/>
            </div>
          }
          {props.router.pathname.indexOf('scheduleDemo') === -1 &&
            <Link href="/schedule-demo">
              <div>
                <Button variant="contained" size="medium" name="Schedule Demo" />
              </div>
            </Link>
          }
        </div>
        <div className="buttons mobile">
          <div className="playDiv" onClick={() => play()}>
            <GrowIcon setAnim={setAnim} name='burger' />
          </div>
        </div>
      </Slide>
      {showMenu && 
        <FadeIn delay={1} className="mobileMenu">
          <MobileMenu />
        </FadeIn>
      }
    </HeaderStyles>
  );
}

Header.propTypes = {};

export default memo(withRouter(Header));