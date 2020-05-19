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
    </HomePageStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);