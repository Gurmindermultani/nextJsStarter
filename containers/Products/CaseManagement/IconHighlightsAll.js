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
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                  ? "translateY(0)"
                  : "translateY(50px)",
            }}>
              {({ opacity, transform }) => (
                <IconHighlight style={{opacity, transform}} name="satisfaction" heading="Employee satisfaction" description="Keep your employees satisfied by giving them on-time resolution for their tickets."/>
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
                <IconHighlight style={{opacity, transform}} name="waiting" heading="Minimum TAT" description="Automate the entire process and minimize your turnaround time for resolving employee tickets."/>
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
                <IconHighlight style={{opacity, transform}} name="interaction" heading="Personalized interaction" description="Give all your employees a personalized experience with an enterprise conversation platform."/>
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
                <IconHighlight style={{opacity, transform}} name="productivity" heading="Increased productivity" description="Eliminate the need for multiple follow-ups with the HR and ensure maximum employee productivity."/>
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
                <IconHighlight style={{opacity, transform}} name="integrable" heading="Easily integrable" description="Integrate your HRIS system and workflow channels with AI-enabled case management."/>
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
                <IconHighlight style={{opacity, transform}} name="interface" heading="Simple interface" description="Get rid of complicated forms and poor interface. Turn conversations into employee query tickets."/>
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