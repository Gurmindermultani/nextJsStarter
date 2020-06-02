/**
 *
 * GrowIcon
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated as a } from 'react-spring'
import lottie from 'lottie-web';
import Typography from '../../components/Typography';

const GrowIconStyles = styled.div`
  display: flex;
  align-items: center;
  height: 73px;
  width: 73px;
`;

function GrowIcon(props) {
  const [anim, setAnim] = useState('');
  const lottieRef = useRef(null);
  useEffect(() => {
    const newAnim = lottie.loadAnimation({
      container: lottieRef.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/images/morphIcons/resolution/data.json' // the path to the animation json
    });
    setAnim(newAnim);
    return () => {
      // Clean up the subscription
      newAnim.destroy();
    };
  },[]);

  const mouseEnter = () => {
    anim.setDirection(1);
    anim.play();
  };

  const mouseLeave = () => {
    anim.setDirection(-1);
    anim.play();
  };

  return (
    <GrowIconStyles onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
      <div ref={lottieRef} />
    </GrowIconStyles>
  );
}

GrowIcon.propTypes = {};

export default memo(GrowIcon);