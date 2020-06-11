/**
 *
 * FadeIn
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "./index";


function FadeIn(props) {
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring delay={props.delay ? props.delay : 500} to={{ 
          opacity: isVisible ? 1 : 0,
        }}>
          {({ opacity }) => (
            <div style={ { opacity } } className={props.className}>
              {props.children}
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
}

FadeIn.propTypes = {};

export default memo(FadeIn);
