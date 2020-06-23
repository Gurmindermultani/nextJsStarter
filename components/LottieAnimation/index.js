/**
 *
 * LottieAnimation
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated as a } from 'react-spring'
import lottie from 'lottie-web';
import Typography from '../../components/Typography';

const LottieAnimationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LottieAnimation(props) {
  const [anim, setAnim] = useState('');
  const lottieRef = useRef(null);
  useEffect(() => {
    const newAnim = lottie.loadAnimation({
      container: lottieRef.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: props.dataUrl // the path to the animation json
    });
    setAnim(newAnim);
    if(props.setAnim) {
      props.setAnim(newAnim);
    }
    return () => {
      // Clean up the subscription
      newAnim.destroy();
    };
  },[]);

  return (
    <LottieAnimationStyles className="animation">
      <div ref={lottieRef} />
    </LottieAnimationStyles>
  );
}

LottieAnimation.propTypes = {};

export default memo(LottieAnimation);