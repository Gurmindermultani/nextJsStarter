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
import ScheduleDemoDialog from './ScheduleDemoDialog';
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
      {
        name: 'integrations',
        label: 'Integrations',
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
  const [showDialog, setShowDialog] = useState('');
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
              <img className="leenaMainLogo" alt="Logo LeenaAI" src="/images/leenaLogo.svg"/>
            </a>
          </Link>
        </div>
        <div className="navigation">
          {navigation.map( groupNav => 
            <div key={groupNav.name} className="groupNav">
              <div className="groupName pointer">
                <Typography className="groupHeader" variant="h6" fontWeight="500" fontSize="16px" color="#212121" text={groupNav.label}/>
                <img alt="down-arrow" src="/images/icons/down-arrow-blue.svg"/>
              </div>
              <div className="links">
                <span className="header-pointer "/>
                {groupNav.links.map( link => {
                  if (link.href) {
                    return (
                      <div className="link" key={link.name}>
                        <a href={`${link.href}`} target="_blank">
                          <div>
                            <Typography variant="paragraph2" fontWeight="500" fontSize="15px" color="#212121" text={link.label}/>
                          </div>
                        </a>
                      </div>
                    )
                  }
                  return (
                    <div className={"link " + (props.router.pathname === `/${link.name}` ? 'selected ' : ' ')} key={link.name}>
                      <Link href={{ pathname: `/${link.name}`, query: props.router.query }}>
                        <a>
                          <Typography variant="paragraph2" fontWeight="500" fontSize="15px" color="#212121" text={link.label}/>
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
          {props.router.pathname.indexOf('schedule-demo') > -1 &&
            <div className="demo">
              <img className="mailImage" alt="mail" src="/images/icons/mail.svg"/>
              <a href="mailto:support@leena.ai">
                <Typography fontWeight="300" color="#212121" fontSize="16px" variant="paragraph2" text="support@leena.ai"/>
              </a>
            </div>
          }
          {props.router.pathname.indexOf('schedule-demo') === -1 && props.router.pathname.indexOf('employee-engagement') === -1 &&
            <Link href="/schedule-demo">
              <div>
                <Button className="headerScheduleDemo" variant="contained" size="medium" name="Schedule demo" />
              </div>
            </Link>
          }
          {props.router.pathname.indexOf('employee-engagement') > -1 &&
            <div>
              <Button onClick={() => setShowDialog('form')} className="headerScheduleDemo" variant="contained" size="medium" name="Start free trial" />
            </div>
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
      <ScheduleDemoDialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
    </HeaderStyles>
  );
}

Header.propTypes = {};

export default memo(withRouter(Header));