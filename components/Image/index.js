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
      className={props.className + ' ' + 'lazyload'}
      loading="lazy"
      // src={require(`../../public${props.src}`)}
      src={props.src}
    />
  );
}

Image.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Image);
