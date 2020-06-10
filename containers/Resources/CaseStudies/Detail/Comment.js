/**
 *
 * Comment
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../components/Typography';
import Slide from '../../../../components/VisibilitySensor/Slide';

const CommentStyles = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  padding: 80px 0;
  .line {
    width: 4px;
    background: #0F72EE;
    border-radius: 10px;
  }
  .body {
    flex-basis: 90%;
    height: 100%;
    span {
      font-style: italic;
      line-height: 40px;
    }
  }
`;

function Comment(props) {
  return (
    <Slide>
      <CommentStyles>
        <div className="line"/>
        <div className="body">
          <div className="text">
            <Typography className="rowValue" color="#212121" variant="paragraph2" fontSize="20px" text={props.text}/>
            <br />
            <Typography className="rowValue" color="#212121" variant="h1" fontSize="22px" text={props.by}/>
          </div>
        </div>
      </CommentStyles>
    </Slide>
  );
}

Comment.propTypes = {};

export default memo(Comment);