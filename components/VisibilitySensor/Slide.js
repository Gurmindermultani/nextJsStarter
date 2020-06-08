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
  up: ['translateY(0)', 'translateY(200px)'],
  down: ['translateY(0)', 'translateY(-200px)'],
}

function Slide(props) {
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring to={{ 
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
