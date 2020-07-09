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
import FadeIn from '../../components/VisibilitySensor/FadeIn';

const reviews = [
  {
    name: 'tataReview',
    bg: 'dark',
    text: '“Employee experience is at epicentre of our digital transformation journey. We are developing partner ecosystem who believe in same philosophy. Leena AI is one such partner that we are glad to be associated with. Leveraging technology they have been able to solve some of our business problems, scale operations and dial up employee experience.”',
    user: {
      img: '/images/people/nikhil.png',
      name: '~ Nikhil Morade',
      position: 'Global Head HR Tech',
    }
  },
  {
    name: 'cocacolaReview',
    bg: 'primary',
    text: '“Organisations must continuously experiment and fail fast or scale fast to be ahead of the curve. One also needs a good partner who shares the curiosity of solving business problems that were limited by the technology of the past. We found the right partner in Leena AI to collaborate and convert the ideas using the AI-powered chatbots, into the tangible results for the business.”',
    user: {
      img: '/images/people/alok.jpg',
      name: '~ Alok Saxena',
      position: 'Associate Vice President',
    }
  },
  {
    name: 'kec',
    bg: "light",
    text: '“While the bot started out as an HR policy bot, we realized the potential of utilizing it for solving specific employee problems. Leena AI helped us figure out frequently repeating issues and helped us plan action steps against them. The bot has become a single point for capturing employee issues, whether they are HR problems or not.”',
    user: {
      img: '/images/people/vasu.jpg',
      name: '~ Vasudevan N',
      position: 'Executive Director, Human resources',
    }
  },
];

const ReviewsStyles = styled.div`
  .mobile{
    display: none;
  }
  .carousalContainer {
    .review {
      min-height: 318px;
      display: flex;
      margin: 20px auto;
      box-shadow: 0px 3px 6px #00000029;
      transition: transform 420ms cubic-bezier(.165,.84,.44,1);
      max-width: 960px;
      &:hover {
        transform: scale(1.05);
      }
      .leftContainer {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60px;
        &.primary {
          background: ${props => props.theme.palette.primary.main};
        }
        &.dark {
          background: ${props => props.theme.palette.primary.dark};
        }
        &.light {
          background: ${props => props.theme.palette.primary.light};
        }
        img {
          width: 100%;
          height: 129px;
          &.cocacolaReview {
            width: 90%;
          }
        }
      }
      .rightContainer {
        flex: 1;
        padding: 40px;
        span {
          line-height: 26px;
        }
        .user {
          margin-top: 34px;
          display: flex;
          align-items: center;
          .text {
            margin-left: 12px;
          }
          img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .mobile{
      display: block;
    }
    .deskTop{
      display: none;
    }
    .carousalContainer {
      .review {
        display: block;
        width: 100%;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 4px;
        margin: 0;
        margin-bottom: 10px;
        padding-bottom: 10px;
        &:hover {
          transform: scale(1.0);
        }
        .leftContainer {
          width: 100%;
          padding: 30px;
          border-radius: 4px 4px 0 0;
          &.primary {
            background: ${props => props.theme.palette.primary.main};
          }
          &.dark {
            background: ${props => props.theme.palette.primary.dark};
          }
          &.light {
            background: ${props => props.theme.palette.primary.light};
          }
        }
        .rightContainer {
          padding: 10px;
          .user {
            display: flex;
            align-items: flex-start;
          }
        }
      }
    }
    .slick-slide {
      padding: 0 12px;
      border-radius: 4px;
    }
    .slick-center {
      
    }
  }
`;

function Reviews(props) {
  return (
    <ReviewsStyles>
      <FadeIn className="deskTop">
        <Carousal variant="singleMode">
          {reviews.map( review => 
            <div className="carousalContainer" key={review.name}>
              <div className="review">
                <div className={"leftContainer " + review.bg}>
                  <img className={review.name} src={review.name} src={`/images/home/${review.name}.png`}/>
                </div>
                <div className="rightContainer">
                  <div className="content">
                    <Typography size="16px" variant="paragraph2" text={review.text}/>
                  </div>
                  <div className="user">
                    <UserAvatar alt="User Icon" src={`${review.user.img}`}/>
                    <Typography className="text" size="15px" color="#0F72EE" variant="paragraph2" text={review.user.name}/>
                    <Typography size="15px" variant="paragraph2" text={', '}/>
                    &nbsp;
                    <Typography size="15px" variant="paragraph2" text={review.user.position}/>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Carousal>
      </FadeIn>
      <FadeIn className="mobile">
        <Carousal variant="mobileCarousal">
          {reviews.map( review => 
            <div className="carousalContainer" key={review.name}>
              <div className="review">
                <div className={"leftContainer " + review.bg}>
                  <img src={review.name} src={`/images/home/${review.name}.png`}/>
                </div>
                <div className="rightContainer">
                  <div className="content">
                    <Typography size="16px" variant="paragraph2" text={review.text}/>
                  </div>
                  <div className="user">
                    <UserAvatar alt="User Icon" src={`${review.user.img}`}/>
                    <div className="text">
                      <Typography size="15px" color="#0F72EE" variant="paragraph2" text={review.user.name}/>
                      <Typography size="15px" variant="paragraph2" text={', '}/>
                      <Typography size="15px" variant="paragraph2" text={review.user.position}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Carousal>
      </FadeIn>
    </ReviewsStyles>
  );
}

Reviews.propTypes = {};

export default memo(Reviews);