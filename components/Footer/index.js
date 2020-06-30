/**
 *
 * Footer
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'next/router'
import Link from 'next/link'
import Button from '../Button';
import Typography from '../Typography';
import Input from '../Input';
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
  const [showDialog, setShowDialog] = useState('');
  const form = useForm({
    onSubmit: (formData, valid) => {
      if (!valid) return;
      let body = {...formData};
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leena/subscribe`, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then((res) => {
        if (res.status === 200) {
          setShowDialog('success');
        } else {
          alert('Some Error Occurred!');
        }
      }).catch((e) => {
        console.log('error');
        alert('Some Error Occurred!');
      });
    }
  });
  const email = useField('email', form, {
    defaultValue: '',
    validations: [formData => !(formData['email'] && Utils.checkValidEmail(formData['email']) ) && 'Please enter valid email.'],
    fieldsToValidateOnChange: [],
  });
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
            <a href="mailto:sales@leena.ai">
              <Typography variant="paragraph2" fontSize="16px" color="#0F72EE" text="sales@leena.ai"/>
            </a>
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
        <form onSubmit={form.onSubmit} className="subscribe">
          <Typography variant="h6" fontSize="16px" color="#212121" text="Stay Connected"/>
          <Typography className="middleText" variant="paragraph2" color="#212121" text="Be the first to hear about exciting product updates & latest trends in HR technology."/>
          <Input {...email} name="email" placeholder="Your Email"/>
          <Button type="submit" fullWidth size="large" variant="contained" name="Subscribe"/>
        </form>
      </div>
      <div className="lowerContainer">
        <div className="copyright">
          <Typography variant="paragraph2" color="#212121" text="©"/>
          {" "}
          <Typography variant="paragraph2" color="#0F72EE" text="Leena AI"/>
        </div>
        <div className="terms">
          <a target="_blank" href="https://leena.ai/docs/tnc.pdf">
            <Typography variant="paragraph2" color="#212121" text="Terms of Use"/>
          </a>
          {" | "}
          <a target="_blank" href="https://leena.ai/docs/pp.pdf">
            <Typography variant="paragraph2" color="#212121" text="Privacy Policy"/>
          </a>
        </div>
        <div className="certs">
          <img className="soc" alt="cert" src="/images/certs/soc.svg" />
          <img className="iso" alt="cert" src="/images/certs/iso.svg" />
        </div>
      </div>
      <Dialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
    </FooterStyles>
  );
}

Footer.propTypes = {};

export default memo(withRouter(Footer));