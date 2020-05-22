/**
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import Input from '../../components/Input';

import IconHighlightsAll from './IconHighlightsAll';
import DetailProducts from './DetailProducts';
import MobileDemo from './MobileDemo';
import Platforms from './Platforms';
import Customers from './Customers';
import { HomePageStyles } from './styles';

function HomePage(props) {
  return (
    <HomePageStyles>
      <div className="topContainer">
        <Typography variant="h1" fontSize="46px" text="Redefine Employee Experience"/>
        <Typography fontWeight="300" color="#212121" fontSize="46px" variant="paragraph2" text="with conversational"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="46px" variant="paragraph2" text="workflow automation"/>
        <div className="demoInput">
          <Input name="schedule" placeholder="Your work email"/>
          <Button name="Schedule Demo" variant="contained" size="large"/>
        </div>
        <div className="bowlImage">
          <img src="/images/home/bowlImage.svg" />
        </div>
      </div>
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Empower your organization"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="with an excellent HR efficiency"/>
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
    </HomePageStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);