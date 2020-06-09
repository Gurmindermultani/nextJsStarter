/**
 *
 * IconHighlightsAll
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "../../../components/VisibilitySensor";

import IconHighlight from './IconHighlight';

const IconHighlightsAllStyles = styled.div`
  .highContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &.bottomMargin {
      margin-bottom: 53px;
    }
  }
`;

function IconHighlightsAll(props) {
  return (
    <IconHighlightsAllStyles>
      <div className="highContainer bottomMargin">
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="accurate" heading="Accurate feedback" description="Get accurate feedback by conducting periodic surveys throughout employees’ lifecycle. Keep it short and interactive."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring delay={100} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="culture" heading="Great work culture" description="Build a work culture that promotes transparency and is open to continuous feedback. Deliver real-time insights to team managers."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring delay={200} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="satisfaction" heading="Employee satisfaction" description="Make employee satisfaction your highest priority. Address the challenges faced by employees instantly."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
      <div className="highContainer">
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="interaction" heading="Personalized experience" description="Don’t let any of your employees feel left out. Value opinions of all your employees and build a workplace they’d love to work at."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring delay={100} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="survey" heading="No survey fatigue" description="Save your employees from filling up long feedback forms and answering too many questions at once. Say ‘no’ to survey fatigue."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring delay={200} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="intelligence" heading="Predict attrition" description="Know about your unhappy employees via intelligent actionable insights. Take corrective actions before it’s too late."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </IconHighlightsAllStyles>
  );
}

IconHighlightsAll.propTypes = {};

export default memo(IconHighlightsAll);