/**
 *
 * ContactUs
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'

import ScheduleDemo from '../../components/ScheduleDemo';

import { AboutUsStyles } from './styles';

function ContactUs(props) {
  return (
    <AboutUsStyles>
      <section className="section section0">
        <iframe
          src="https://leena.ai/blog"
          frameBorder={'0'}
          width={'100%'}
          height={'100%'}
        />
      </section>
      <section className="section section2 noMargin">
        <ScheduleDemo variant="discover"></ScheduleDemo>
      </section>
    </AboutUsStyles>
  );
}

ContactUs.propTypes = {};

export default memo(ContactUs);