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
  const [iframeHeight, setIframeHeight] = useState('800px');
  return (
    <AboutUsStyles>
      <section className="section section0">
        <iframe
          src="https://leena.ai/blog"
          frameBorder='0'
          width='100%'
          height={iframeHeight}
          onLoad={(e) => {
            try {
              console.log(e.target);
              const obj = e.target;
              console.log(obj.contentWindow.document.body.scrollHeight + 'px');
              setIframeHeight(obj.contentWindow.document.body.scrollHeight + 'px');
            } catch(e) {
              console.log(e);
            }
          }} 
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