/**
 *
 * Image
 *
 */

import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
`;

function Image(props) {
  const imageRef = useRef(null);
  const loadImages = () => {
    let imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
      }
    }
  };
 
  useEffect(() => {
    window.onload = loadImages;
  }, []);
  return (
    <StyledImage
      {...props}
      ref={imageRef}
      className={props.className + ' ' + 'lazyload'}
      loading="lazy"
      // src={require(`../../public${props.src}`)}
      data-src={props.src}
      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    />
  );
}

Image.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Image);
