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
import VisibilitySensor from "../../components/VisibilitySensor";

const IconHighlightsAllStyles = styled.div`
  .highContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &.bottomMargin {
      margin-bottom: 53px;
    }
  }
  @media only screen and (max-width: 760px) {
    .highContainer {
      flex-wrap: wrap;
      &.bottomMargin {
        margin-bottom: 0px;
      }
    }
  }
`;

function IconHighlightsAll(props) {
  return (
    <IconHighlightsAllStyles>
      <div className="highContainer bottomMargin">
        <VisibilitySensor offset={{top:200}} once partialVisibility="top">
          {({ isVisible }) => (
            <Spring to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(50px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="resolution" heading="Quick resolution" description="Listen to your employees round the clock and help them instantly on the go."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor offset={{top:200}} once partialVisibility="top">
          {({ isVisible }) => (
            <Spring delay={100} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(50px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="intelligence" heading="Predictive intelligence" description="Answer your employee queries instantly via AI-powered automated conversations."/>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor offset={{top:200}} once partialVisibility="top">
          {({ isVisible }) => (
            <Spring delay={200} to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(50px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="waiting" heading="Zero waiting time" description="Save your employees’ time by giving instant replies to all their policy related queries."/>
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
                  : "translateY(50px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="satisfaction" heading="Employee satisfaction" description="Know your employees inside out. Talk to them about their motivation and challenges."/>
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
                  : "translateY(50px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="conversation" heading="Parallel conversations" description="Go beyond your capabilities. Connect to multiple employees at the same time."/>
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
                  : "translateY(50px)",
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