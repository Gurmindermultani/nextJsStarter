/**
 *
 * Comment
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Slide from '../VisibilitySensor/Slide';
import UserAvatar from '../UserAvatar';

const CommentStyles = styled.div`
  justify-content: space-between;
  padding: 80px 0;
  .body {
    flex-basis: 90%;
    height: 100%;
    position: relative;
    padding: 50px 0;
    span {
      font-style: italic;
      line-height: 40px;
    }
    .quotation {
      position: absolute;
      &.start {
        left: -80px;
        top: 0px;
      }
      &.end {
        right: -80px;
        bottom: 25px;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    .userAvatar {
      width: 60px;
      height: 60px;
    }
    .userName {
      margin: 0 8px 0 24px;
    }
  }
  @media only screen and (max-width: 760px) {
    .body {
      .quotation {
        transform: scale(0.5);
        &.start {
          left: -26px;
          top: -2px;
        }
        &.end {
          right: -26px;
          bottom: 2px;
        }
      }
    }
    .user {
      flex-wrap: wrap;
      .rowValue {
        margin-left: 90px;
      }
    }
  }
`;

function Comment(props) {
  return (
    <Slide>
      <CommentStyles>
        <div className="body">
          <img className="quotation start" alt="quotation-start" src="/images/icons/quotation-mark-start.svg" />
          <img className="quotation end" alt="quotation-start" src="/images/icons/quotation-mark-end.svg" />
          <div className="text">
            <Typography className="rowValue" color="#212121" variant="paragraph2" fontSize="20px" text={props.text}/>
          </div>
        </div>
        <div className="user">
          {props.userIcon &&
            <UserAvatar className="userAvatar" src={props.userIcon} />
          }
          {props.userName &&
            <Typography className="userName" color="#0F72EE" fontWeight="500" variant="paragraph2" fontSize="22px" text={props.userName}/>
          }
          <Typography className="rowValue" color="#212121" fontWeight="500" variant="paragraph2" fontSize="22px" text={props.by}/>
        </div>
      </CommentStyles>
    </Slide>
  );
}

Comment.propTypes = {};

export default memo(Comment);