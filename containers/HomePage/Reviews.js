/**
 *
 * Reviews
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Carousal from '../../components/Carousal';
import UserAvatar from '../../components/UserAvatar';

const reviews = [
  {
    name: 'tataReview',
    text: '“Employee experience is at epicentre of our digital transformation journey. We are developing partner ecosystem who believe in same philosophy. LeenaAI is one such partner that we are glad to be associated with. Leveraging technology they have been able to solve some of our business problems, scale operations and dial up employee experience.”',
    user: {
      img: '/images/people/nikhil.png',
      name: '~ Nikhil Morade',
      position: 'Global Head HR Tech',
    }
  },
  {
    name: 'cocacolaReview',
    text: '“Employee experience is at epicentre of our digital transformation journey. We are developing partner ecosystem who believe in same philosophy. LeenaAI is one such partner that we are glad to be associated with. Leveraging technology they have been able to solve some of our business problems, scale operations and dial up employee experience.”',
    user: {
      img: '/images/people/nikhil.png',
      name: '~ Nikhil Morade',
      position: 'Global Head HR Tech',
    }
  },
];

const ReviewsStyles = styled.div`
  margin-bottom: auto;
  margin-top: 126px;
  .carousalContainer {
    padding: 40px 0;
    .review {
      min-height: 318px;
      width: 973px;
      display: flex;
      margin: auto;
      box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
      transition: transform 420ms cubic-bezier(.165,.84,.44,1);
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
      .leftContainer {
        width: 370px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #103577;
        img {
          width: 262px;
          height: 129px;
        }
      }
      .rightContainer {
        flex: 1;
        padding: 50px;
        span {
          font-style: italic;
          line-height: 26px;
        }
        .user {
          margin-top: 34px;
          display: flex;
          align-items: center;
          span {
            margin-left: 15px;
          }
        }
      }
    }
  }
`;

function Reviews(props) {
  return (
    <ReviewsStyles>
      <Carousal variant="singleMode">
        {reviews.map( review => 
          <div className="carousalContainer" key={review.name}>
            <div className="review">
              <div className="leftContainer">
                <img src={review.name} src={`/images/home/${review.name}.png`}/>
              </div>
              <div className="rightContainer">
                <div className="content">
                  <Typography size="16px" variant="paragraph2" text={review.text}/>
                </div>
                <div className="user">
                  <UserAvatar alt="User Icon" src={`${review.user.img}`}/>
                  <Typography size="15px" color="#0F72EE" variant="paragraph2" text={review.user.name}/>
                  <Typography size="15px" variant="paragraph2" text={review.user.position}/>
                </div>
              </div>
            </div>
          </div>
        )}
      </Carousal>
    </ReviewsStyles>
  );
}

Reviews.propTypes = {};

export default memo(Reviews);