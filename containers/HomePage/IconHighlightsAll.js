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

const IconHighlightsAllStyles = styled.div`
  .highContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &.bottomMargin {
      margin-bottom: 93px;
    }
  }
`;

function IconHighlightsAll(props) {
  return (
    <IconHighlightsAllStyles>
      <div className="highContainer bottomMargin">
        <IconHighlight heading="Quick resolution" description="Listen to your employees round the clock and help them on the go."/>
        <IconHighlight heading="Predictive intelligence" description="Answer your employee queries instantly via AI-powered automated conversations."/>
        <IconHighlight heading="Zero waiting time" description="Save your employees’ time by giving instant replies to all their policy related queries."/>
      </div>
      <div className="highContainer">
        <IconHighlight heading="Employee satisfaction" description="Know your employees inside out. Talk to them about their motivation and challenges."/>
        <IconHighlight heading="Parallel conversations" description="Go beyond your capabilities. Connect to multiple employees at the same time."/>
        <IconHighlight heading="Conversational UI" description="Get rid of complicated employee platforms. Get a single interface for all employee needs."/>
      </div>
    </IconHighlightsAllStyles>
  );
}

IconHighlightsAll.propTypes = {};

export default memo(IconHighlightsAll);