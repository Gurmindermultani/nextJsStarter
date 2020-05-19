/**
 *
 * Tooltip
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import MaterialTooltip from '@material-ui/core/Tooltip';

function Tooltip(props) {
  return <MaterialTooltip {...props} />;
}

Tooltip.propTypes = {};

export default memo(Tooltip);
