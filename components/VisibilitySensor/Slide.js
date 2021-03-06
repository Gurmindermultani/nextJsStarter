/**
 *
 * Slide
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "./index";

const slideMap = {
  up: ['translateY(0)', 'translateY(50px)'],
  down: ['translateY(0)', 'translateY(-50px)'],
  right: ['translateX(0)', 'translateX(50px)'],
  left: ['translateX(0)', 'translateX(-50px)'],
}

function Slide(props) {
  if (props.onLoad) {
    return (
      <Spring delay={props.delay ? props.delay : null} 
        to={{ 
          opacity: 1,
          transform: slideMap[props.from ? props.from : 'up'][0],
        }}
        from={{ 
          opacity: 0,
          transform: slideMap[props.from ? props.from : 'up'][1],
        }}>
        {({ opacity, transform }) => (
          <div style={ { opacity, transform } } className={props.className}>
            {props.children}
          </div>
        )}
    </Spring>
    );
  }
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring delay={props.delay ? props.delay : null} to={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible
              ? slideMap[props.from ? props.from : 'up'][0]
              : slideMap[props.from ? props.from : 'up'][1],
        }}>
          {({ opacity, transform }) => (
            <div style={ { opacity, transform } } className={props.className}>
              {props.children}
            </div>
          )}
      </Spring>
      )}
    </VisibilitySensor>
  );
}

Slide.propTypes = {};

export default memo(Slide);
