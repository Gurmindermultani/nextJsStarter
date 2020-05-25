/**
 *
 * CaseManagment
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Input from '../../../components/Input';

import IconHighlightsAll from './IconHighlightsAll';
import DetailProducts from './DetailProducts';
import MobileDemo from './MobileDemo';
import Platforms from './Platforms';
import Customers from './Customers';
import Reviews from './Reviews';
import Recognitions from './Recognitions';
import { CaseManagmentStyles } from './styles';

function CaseManagment(props) {
  return (
    <CaseManagmentStyles>
      <div className="topContainer">
        <Typography variant="h1" fontSize="40px" text="Discover employee satisfaction"/>
        <Typography variant="h1" fontSize="40px" text="with conversational case management"/>
        <Typography className="secondHeading" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="Make it easy for your employees to raise query tickets and get"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="real-time updates directly through the conversational interface."/>
        <div className="demoInput">
          <Input name="schedule" placeholder="Your work email"/>
          <Button name="Schedule Demo" variant="contained" size="large"/>
        </div>
        <div className="bowlImage">
          <img src="/images/home/mobile.png" />
        </div>
      </div>
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Give your employees the mental peace"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="they deserve"/>
      </div>
      <div className="iconHighlightsContainer">
        <IconHighlightsAll></IconHighlightsAll>
      </div>
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Make employee service as smooth as"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="your customer service"/>
      </div>
      <div className="products">
        <DetailProducts />
      </div>
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="It’s simpler than you think"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="A complete helpdesk that your employee needs"/>
      </div>
      <MobileDemo />
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
      </div>
      <Platforms />
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Know our extended family"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="300000+ employees across the globe use Leena AI"/>
      </div>
      <Customers />
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Our customers love us"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="for what we do"/>
      </div>
      <Reviews />
      <div className="quoteContainer demoContainer">
        <Typography variant="h3" fontSize="28px" text="Schedule your free demo"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="right away"/>
        <div className="demoInput">
          <Input name="schedule" placeholder="Your work email"/>
          <Button name="Schedule Demo" variant="contained" size="large"/>
        </div>
      </div>
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Industry recognition"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="for our expertise in HR"/>
      </div>
      <Recognitions />
    </CaseManagmentStyles>
  );
}

CaseManagment.propTypes = {};

export default memo(CaseManagment);