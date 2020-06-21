/**
 *
 * Footer
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'
import Button from '../Button';
import Typography from '../Typography';
import Input from '../Input';
import { navigation } from '../Header';

const FooterStyles = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  .lowerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 64px;
    .empty {
      min-width: 100px;
    }
  }
  .upperContainer {
    display: flex;
    justify-content: space-between;
    .logo {
      .phone {
        margin-top: 32px;
      }
      .email {
        margin-top: 8px;
      }
    }
    .navigation {
      width: 476px;
      display: flex;
      justify-content: space-between;
      .links {
        .link {
          margin-top: 10px;
          &:hover {
            span {
              color: #0F72EE;
            }
          }
        }
      }
    }
    .subscribe {
      max-width: 288px;
      .middleText {
        margin: 12px 0;
      }
    }
  }
  .certs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      &.soc {
        width: 134px;
        height: 38px;
      }
      &.iso {
        margin-left: 20px;
        width: 88px;
        height: 38px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 0 30px;
    .upperContainer {
      flex-wrap: wrap;
      .logo {
        text-align: center;
        width: 100%;
      }
      .navigation {
        display: none;
      }
      .subscribe {
        margin: 64px 0 48px 0;
        max-width: none;
      }
    }
    .lowerContainer {
      flex-wrap: wrap-reverse;
      text-align: center;
      margin-top: 32px;
      .certs {
        justify-content: center;
        width: 100%;
        margin-bottom: 16px;
      }
      .copyright, .terms {
        width: 100%;
      }
    }
  }
`;

function Footer(props) {
  return (
    <FooterStyles>
      <div className="upperContainer">
        <div className="logo">
          <div className="image">
            <img src="/images/leenaLogo.svg"/>
          </div>
          <div className="phone">
            <Typography className="halfBackground" variant="paragraph2" fontSize="16px" color="#212121" text="Phone: "/>
            {" "}
            <Typography variant="paragraph2" fontSize="16px" color="#212121" text="+91 8851168842"/>
          </div>
          <div className="email">
            <Typography className="halfBackground" variant="paragraph2" fontSize="16px" color="#212121" text="Email: "/>
            {" "}
            <Typography variant="paragraph2" fontSize="16px" color="#0F72EE" text="sales@leena.ai"/>
          </div>
        </div>
        <div className="navigation">
          {navigation.map( groupNav => 
            <div key={groupNav.name} className="groupNav">
              <Typography className="groupHeader" variant="h6" fontSize="16px" color="#212121" text={groupNav.label}/>
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
                      <div className="link" key={link.name}>
                        <Link href={`/${groupNav.name}/${link.name}`}>
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
        <div className="subscribe">
          <Typography variant="h6" fontSize="16px" color="#212121" text="Stay Connected"/>
          <Typography className="middleText" variant="paragraph2" color="#212121" text="Be the first to hear about exciting product updates & latest trends in HR technology."/>
          <Input onChange={() => null} name="email" placeholder="Your Email"/>
          <Button fullWidth size="large" variant="contained" name="Subscribe"/>
        </div>
      </div>
      <div className="lowerContainer">
        <div className="copyright">
          <Typography variant="paragraph2" color="#212121" text="© 2020 "/>
          {" "}
          <Typography variant="paragraph2" color="#0F72EE" text="Leena AI"/>
        </div>
        <div className="terms">
          <Typography variant="paragraph2" color="#212121" text="Terms of Use"/>
          {" | "}
          <Typography variant="paragraph2" color="#212121" text="Privacy Policies"/>
        </div>
        <div className="certs">
          <img className="soc" alt="cert" src="/images/certs/soc.png" />
          <img className="iso" alt="cert" src="/images/certs/iso.png" />
        </div>
      </div>
    </FooterStyles>
  );
}

Footer.propTypes = {};

export default memo(Footer);