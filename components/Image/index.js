/**
 *
 * Image
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.Img`
`;

function Image(props) {
  return (
    <StyledImage
      {...props}
      src={require(props.src)}
    />
  );
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default memo(Image);
