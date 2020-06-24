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
    flex-basis: 95%;
    height: 100%;
    .by {
      margin-top: 16px;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 40px 30px;
    .line {
      width: 0;
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
            <Typography className="rowValue" color="#212121" variant="paragraph2" fontSizes={[16, 18, 20]} text={props.text}/>
            <br />
            <Typography className="rowValue by" color="#212121" variant="h1" fontSizes={[18, 20, 22]} text={props.by}/>
          </div>
        </div>
      </CommentStyles>
    </Slide>
  );
}

Comment.propTypes = {};

export default memo(Comment);