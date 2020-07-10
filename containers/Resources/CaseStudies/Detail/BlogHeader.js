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
  max-width: 1200px;
  margin: auto;
  .leftContainer {
    flex-basis: 40%;
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
      padding: 44px 190px 0 190px;
      .row {
        text-align: center;
        .rowValue {
          margin-top: 8px;
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    padding: 0px 30px 40px 30px;
    .leftContainer {
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        position: static;
      }
      .headingText {
        margin-top: 32px;
      }
    }
    .rightContainer {
      flex-basis: 100%;
      margin: 48px 0 0 0;
      .featureImg {
        height: 200px;
      }
      .details {
        padding: 36px 0 0 0;
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
        <Typography className="highlight secondHeading" fontWeight="300" color="#212121" fontSizes={[24, 32, 34]} variant="h1" text={props.subHeading1}/>
        <br />
        <Typography className="lastHeadeing halfBackground" fontWeight="300" color="#212121" fontSizes={[24, 32, 34]} variant="h1" text={props.subHeading2}/>
        <div className="buttons">
          <Button onClick={() => props.showDialogFn('download', { name: props.pdfName, href: props.pdf })} size="large" variant="inverted" name="Download case study"/>
        </div>
      </Slide>
      <Slide from='right' className="rightContainer">
        <div className="featureImg">
          <img alt="featureImg" src={props.featureImage}/>
        </div>
        <div className="details">
          <div className="row">
            <Typography className="rowName" fontWeight="300" variant="paragraph2" fontSize="14px" text={'Industry'}/>
            <br />
            <Typography className="rowValue" color="#0F72EE" variant="h1" fontSizes={[16, 16, 16]} text={props.industry}/>
          </div>
          <div className="row">
            <Typography className="rowName" fontWeight="300" variant="paragraph2" fontSize="14px" text={'Employees'}/>
            <br />
            <Typography className="rowValue" color="#0F72EE" variant="h1" fontSizes={[16, 16, 16]} text={props.employees}/>
          </div>
        </div>
      </Slide>
    </BlogHeaderStyles>
  );
}

BlogHeader.propTypes = {};

export default memo(BlogHeader);