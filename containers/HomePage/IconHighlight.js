/**
 *
 * IconHighlight
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import GrowIcon from '../../components/GrowIcon';

const IconHighlightStyles = styled.div`
  flex-basis: 28%;
  display: flex;
  flex-direction: column;
  .middleText {
    margin: 32px 0 12px 0%;
  }
`;

function IconHighlight(props) {
  return (
    <IconHighlightStyles>
      <div>
        <GrowIcon />
      </div>
      <Typography className="middleText" variant="h4" fontSize="20px" text={props.heading}/>
      <Typography variant="paragraph2" fontSize="16px" text={props.description}/>
    </IconHighlightStyles>
  );
}

IconHighlight.propTypes = {};

export default memo(IconHighlight);