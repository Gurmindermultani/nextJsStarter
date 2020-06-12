/**
 *
 * Contact
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '../Typography';

const ContactStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .phoneImage {
    margin-right: 12px;
  }
  .mailImage {
    margin: 0 16px 0 32px;
  }
  span {
    opacity: 0.8;
  }
`;

function Contact(props) {
  return (
    <ContactStyles>
      <img className="phoneImage" alt="phone" src="/images/icons/phone.svg"/>
      <Typography fontWeight="300" color="#212121" fontSize="16px" variant="paragraph2" text="+91 8851168842"/>
      <img className="mailImage" alt="mail" src="/images/icons/mail.svg"/>
      <Typography fontWeight="300" color="#212121" fontSize="16px" variant="paragraph2" text="sales@leena.ai"/>
    </ContactStyles>
  );
}

Contact.propTypes = {};

export default memo(Contact);