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
  margin: auto;
  .leftContainer {
    flex-basis: 35%;
    position: relative;
    .logo {
      width: 180px;
      height: 100px;
      position: absolute;
      left: -40px;
      img {
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
      }
    }
    .headingText {
      margin: 142px 0 0 0;
    }
    .buttons {
      margin-top: 48px;
    }
    button {
      width: 240px;
    }
  }
  .rightContainer {
    flex-basis: 62%;
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
      padding: 50px 0 0 0;
      .row {
        text-align: center;
        .rowValue {
          margin-top: 8px;
        }
      }
    }
  }
`;

function BlogHeader(props) {
  return (
    <BlogHeaderStyles>
      <Slide from='left' className="leftContainer">
        <div className="logo">
          <img alt={props.name} src={props.img}/>
        </div>
        <Typography className="headingText" variant="h1" fontSizes={[28, 34, 34]} text={props.mainHeading}/>
        <br />
        <Typography className="secondHeading" fontWeight="300" color="#212121" fontSizes={[28, 34, 34]} variant="h1" text={props.subHeading1}/>
        <br />
        <Typography className="lastHeadeing halfBackground" fontWeight="300" color="#212121" fontSizes={[28, 34, 34]} variant="h1" text={props.subHeading2}/>
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