/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../Button';

import { HeaderStyles } from './styles';

function Header(props) {
  return (
    <HeaderStyles>
      <div className="logo">
        <img src="/images/leenaLogo.png"/>
      </div>
      <div className="navigation">
      </div>
      <div className="buttons">
        <Button variant="contained" name="Schedule Demo" />
      </div>
    </HeaderStyles>
  );
}

Header.propTypes = {};

export default memo(Header);