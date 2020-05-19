/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../components/Button';
import { Typography } from 'leena_dls';
import { HomePageStyles } from './styles';

function Header(props) {
  return (
    <HomePageStyles>
      <div className="leftContainer">
        <Typography variant="h1" text="Redefine Employee Experience"/>
        <Typography color="#212121" className="simpleText" variant="paragraph2" text="with converational"/>
        <Typography color="#212121" className="simpleText" variant="paragraph2" text="workflow automation"/>
      </div>
    </HomePageStyles>
  );
}

Header.propTypes = {};

export default memo(Header);