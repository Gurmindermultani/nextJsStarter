/**
 *
 * IconHighlightsAll
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import IconHighlight from './IconHighlight';
import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "react-visibility-sensor";

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
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={300} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="resolution" heading="Quick resolution" description="Listen to your employees round the clock and help them on the go."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={400} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="intelligence" heading="Predictive intelligence" description="Answer your employee queries instantly via AI-powered automated conversations."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={500} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="waiting" heading="Zero waiting time" description="Save your employees’ time by giving instant replies to all their policy related queries."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
      <div className="highContainer">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={600} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="satisfaction" heading="Employee satisfaction" description="Know your employees inside out. Talk to them about their motivation and challenges."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={700} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="conversation" heading="Parallel conversations" description="Go beyond your capabilities. Connect to multiple employees at the same time."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={800} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(200px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="ui" heading="Conversational UI" description="Get rid of complicated employee platforms. Get a single interface for all employee needs."/>
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