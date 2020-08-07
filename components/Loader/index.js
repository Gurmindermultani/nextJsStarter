/**
 *
 * Loader
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader(props) {
  return <CircularProgress {...props} />;
}

Loader.propTypes = {};

export default memo(Loader);
