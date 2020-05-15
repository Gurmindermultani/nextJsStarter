/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import { HeaderStyles } from './styles';

function Header(props) {
  return (
    <HeaderStyles>
      <img src="/images/leenaLogo.png"/>
    </HeaderStyles>
  );
}

Header.propTypes = {};

export default memo(Header);