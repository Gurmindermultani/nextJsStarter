/**
 *
 * BlogHeader
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../components/Typography';
import Button from '../../../../components/Button';
import Slide from '../../../../components/VisibilitySensor/Slide';

const BlogHeaderStyles = styled.div`
  display: flex;
  padding: 100px 0;
  justify-content: space-between;
  .leftContainer {
    flex-basis: 40%;
    img {
      width: 100px;
      height: 100px;
    }
    span {
      line-height: 46px;
    }
    .headingText {
      margin: 32px 0 0 0;
    }
    .buttons {
      margin-top: 72px;
    }
    button {
      width: 240px;
    }
  }
  .rightContainer {
    flex-basis: 55%;
    .featureImg {
      width: 100%;
      height: 300px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .details {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 30px 0 0 0;
      .row {
        text-align: center;
        .rowValue {
          margin-top: 20px;
        }
      }
    }
  }
`;

function BlogHeader(props) {
  return (
    <BlogHeaderStyles>
      <Slide from='left' className="leftContainer">
        <img alt={props.name} src={props.img}/>
        <br />
        <Typography className="headingText" variant="h1" fontSize="46px" text={props.mainHeading}/>
        <br />
        <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSize="34px" variant="paragraph2" text={props.subHeading1}/>
        <br />
        <Typography className="lastHeadeing halfBackground" fontWeight="300" color="#212121" fontSize="34px" variant="paragraph2" text={props.subHeading2}/>
        <div className="buttons">
          <Button size="large" variant="inverted" name="Download Case Study"/>
        </div>
      </Slide>
      <Slide from='right' className="rightContainer">
        <div className="featureImg">
          <img alt="featureImg" src={props.featureImage}/>
        </div>
        <div className="details">
          <div className="row">
            <Typography className="rowName" fontWeight="300" variant="paragraph2" fontSize="14px" text={'Type'}/>
            <br />
            <Typography className="rowValue" color="#0F72EE" variant="h1" fontSize="16px" text={props.type}/>
          </div>
          <div className="row">
            <Typography className="rowName" fontWeight="300" variant="paragraph2" fontSize="14px" text={'Employees'}/>
            <br />
            <Typography className="rowValue" color="#0F72EE" variant="h1" fontSize="16px" text={props.employees}/>
          </div>
          <div className="row">
            <Typography className="rowName" fontWeight="300" variant="paragraph2" fontSize="14px" text={'Industry'}/>
            <br />
            <Typography className="rowValue" color="#0F72EE" variant="h1" fontSize="16px" text={props.industry}/>
          </div>
        </div>
      </Slide>
    </BlogHeaderStyles>
  );
}

BlogHeader.propTypes = {};

export default memo(BlogHeader);