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
                <IconHighlight style={{opacity, transform}} name="productivity" heading="Employee productivity" description="Let your employees be mentally peaceful and productive with no pending reimbursement claim or leave requests."/>
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
                <IconHighlight style={{opacity, transform}} name="interface" heading="Simple interface" description="Get rid of complicated forms and poor user interface. Turn conversations into employee requests."/>
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
                <IconHighlight style={{opacity, transform}} name="conversation" heading="Single platform" description="Bring all your employee transactions under a single roof. Help your employees manage leaves and reimbursements."/>
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
                <IconHighlight style={{opacity, transform}} name="integrable" heading="Easily integrable" description="Integrate your HRIS system and workflow channels with AI-enabled enterprise conversations."/>
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
                <IconHighlight style={{opacity, transform}} name="analytics" heading="Analytics and reporting" description="Save employees’ and HR’s time by eliminating personal employee queries for simple requests."/>
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