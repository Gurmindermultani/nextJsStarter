/**
 *
 * Footer
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'next/router'
import Link from 'next/link'
import Button from '../Button';
import Typography from '../Typography';
import Input from '../Input';
import Image from '../Image';
import { navigation } from '../Header';
import { useForm, useField } from '../Input/formHooks';
import Utils from '../../utils';

import Dialog from './Dialog'

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
          &.selected {
            span {
              color: #0F72EE;
            }
          }
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
      .successText {
        min-height: 130px;
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
        flex-wrap: wrap;
        margin-top: 70px;
        .groupNav {
          width: 100%;
          margin-bottom: 32px;
        }
      }
      .subscribe {
        margin: 32px 0 48px 0;
        max-width: none;
        text-align: center;
        .errorContainer{
          text-align: left;
        }
      }
    }
    .lowerContainer {
      flex-wrap: wrap;
      text-align: center;
      margin-top: 0px;
      .certs {
        justify-content: center;
        width: 100%;
        margin-bottom: 16px;
      }
      .terms {
        margin: 24px 0 48px 0;
      }
      .copyright, .terms {
        width: 100%;
      }
    }
  }
`;

function Footer(props) {
  const [showDialog, setShowDialog] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  useEffect(() => {
    let req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    let countryName = req.getResponseHeader('cc');
    if (countryName === "IN") {
      setCountryCode('+91')
    }
    if (countryName === "US") {
      setCountryCode('+1')
    }
  },[]);
  const form = useForm({
    onSubmit: (formData, valid) => {
      if (!valid) return;
      let body = {
        "payload": {
            "subscribers": [
                {
                    "email": formData.email
                }
            ]
        }
      };
      setLoading(true);
      // setSubscribed(true);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leena/subscribe`, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then((result) => result.json())
      .then((res) => {
        setLoading(false);
        if (res.message) {
          setShowDialog('success');
          setSubscribed(true);
        } else {
          const message = res.errors && res.errors[0] ? res.errors[0].message : '';
          alert(message || 'Some Error Occurred!');
        }
      }).catch((e) => {
        console.log(e);
        setLoading(false);
        // alert('Some Error Occurred!');
      });
    }
  });
  const email = useField('email', form, {
    defaultValue: '',
    validations: [formData => !(formData['email'] && Utils.checkValidEmail(formData['email']) ) && 'Please enter valid email.'],
    fieldsToValidateOnChange: [],
  });
  return (
    <FooterStyles className="mainFooter">
      <div className="upperContainer">
        <div className="logo">
          <div className="image pointer">
            <Link href={{ pathname: `/`, query: props.router.query }}>
              <img src="/images/leenaLogo.svg"/>
            </Link>
          </div>
          <div className="phone">
            <Typography className="halfBackground" variant="paragraph2" fontSizes={[16, 16, 16]} color="#212121" text="Phone: "/>
            {" "}
            {countryCode === "+91" && 
              <Typography variant="paragraph2" fontSizes={[16, 16, 16]} color="#212121" text="+91 8851168842"/>
            }
            {countryCode === "+1" && 
              <Typography variant="paragraph2" fontSizes={[16, 16, 16]} color="#212121" text="+1 650-690-6283"/>
            }
          </div>
          <div className="email">
            <Typography className="halfBackground" variant="paragraph2" fontSizes={[16, 16, 16]} color="#212121" text="Email: "/>
            {" "}
            <a href="mailto:support@leena.ai">
              <Typography variant="paragraph2" fontSizes={[16, 16, 16]} color="#0F72EE" text="support@leena.ai"/>
            </a>
          </div>
        </div>
        <div className="navigation">
          {navigation.map( groupNav => 
            <div key={groupNav.name} className="groupNav">
              <Typography className="groupHeader" variant="h6" fontSizes={[16, 16, 16]} color="#212121" text={groupNav.label}/>
              <div className="links">
                {groupNav.links.map( link => {
                    if (link.href) {
                      return (
                        <div className="link" key={link.name}>
                          <a href={`${link.href}`} target={link.newTab ? "_blank" : ""}>
                            <div>
                              <Typography variant="paragraph2" fontSize="14px" color="#212121" text={link.label}/>
                            </div>
                          </a>
                        </div>
                      )
                    }
                    return (
                      <div className={"link " + (props.router.pathname === `/${link.name}` ? 'selected ' : ' ')} key={link.name}>
                        <Link href={{ pathname: `/${link.name}`, query: props.router.query }}>
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
        {!subscribed && 
          <form onSubmit={form.onSubmit} className="subscribe">
            <Typography variant="h6" fontSizes={[20, 16, 16]} color="#212121" text="Stay connected"/>
            <Typography className="middleText" variant="paragraph2" color="#212121" text="Be the first to hear about exciting product updates & latest trends in HR technology."/>
            <Input {...email} name="email" placeholder="Your email"/>
            <Button disabled={loading} loading={loading} type="submit" fullWidth size="large" variant="contained" name="Subscribe"/>
          </form>
        }
        {subscribed && 
          <div className="subscribe">
            <Typography variant="h6" fontSizes={[16, 16, 16]} color="#212121" text="Stay connected"/>
            <Typography className="middleText" variant="paragraph2" color="#212121" text="Be the first to hear about exciting product updates & latest trends in HR technology."/>
            <br />
            <Typography className="successText" fontSize="14px" variant="paragraph2" color="#39B54A" text="Thank you for subscribing to the newsletter."/>
          </div>
        }
      </div>
      <div className="lowerContainer">
        <div className="copyright">
          <Typography fontWeight="600" fontSizes={[14, 14, 14]} variant="paragraph2"  color="#212121" text="©"/>
          {" "}
          <Typography fontWeight="600" fontSizes={[14, 14, 14]} variant="paragraph2" color="#212121" text="Leena AI Inc."/>
        </div>
        <div className="terms">
          <a target="_blank" href="https://leena.ai/docs/tnc.pdf">
            <Typography fontSizes={[14, 14, 14]} variant="paragraph2" color="#212121" text="Terms of use"/>
          </a>
          {" | "}
          <a target="_blank" href="https://leena.ai/docs/pp.pdf">
            <Typography fontSizes={[14, 14, 14]} variant="paragraph2" color="#212121" text="Privacy policy"/>
          </a>
        </div>
        <div className="certs">
          <Image className="soc" alt="security certifications LeenaAI" src="/images/certs/soc.svg" />
          <Image className="iso" alt="security certifications LeenaAI" src="/images/certs/iso.svg" />
        </div>
      </div>
      <Dialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        loading={loading}
      />
    </FooterStyles>
  );
}

Footer.propTypes = {};

export default memo(withRouter(Footer));