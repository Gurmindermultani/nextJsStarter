/**
 *
 * Image
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
`;

function Image(props) {
  return (
    <StyledImage
      {...props}
      src={require(`../../public${props.src}`)}
    />
  );
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default memo(Image);
