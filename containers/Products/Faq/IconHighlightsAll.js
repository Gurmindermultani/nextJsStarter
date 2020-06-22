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
  @media only screen and (max-width: 760px) {
    .highContainer {
      flex-wrap: wrap;
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
                <IconHighlight style={{opacity, transform}} name="productivity" heading="Readily accessible" description="Answer all HR queries within a second. Save employees’ time and increase their productivity."/>
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
                <IconHighlight style={{opacity, transform}} name="resolution" heading="Simplified query resolution" description="Eliminate the need for going through long policy documents and contacting HR for simple queries."/>
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
                <IconHighlight style={{opacity, transform}} name="waiting" heading="On-demand answers" description="Ensure instant resolution of employees’ HR queries irrespective of their time and location."/>
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
                <IconHighlight style={{opacity, transform}} name="conversation" heading="Single platform" description="Save employees’ time by providing all information related to HR policies in a single window."/>
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
                <IconHighlight style={{opacity, transform}} name="interface" heading="Parallel conversations" description="Resolve queries of multiple employees simultaneously with HR virtual assistant."/>
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
                <IconHighlight style={{opacity, transform}} name="interaction" heading="Personalized experience" description="Give your employees a super smooth experience with a virtual HR assistant in place."/>
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