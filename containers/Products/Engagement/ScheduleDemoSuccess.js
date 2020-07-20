/**
 *
 * ScheduleDemoSucess
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import Slide from '../../../components/VisibilitySensor/Slide';

const ScheduleDemoSucessContainer = styled.div`
  max-width: 756px;
  padding: 40px 0px 0 0;
  .body {
    margin-top: 24px;
    padding: 0px 110px;
  }
  .footer {
    margin-top: 8px;
    padding: 0px 110px;
    text-align: center;
  }
  .images {
    position: relative;
    margin-top: 68px;
    .roundBg {
      img {
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        z-index: 1;
      }
    }
    .group {
      z-index: 2;
      position: relative;
      bottom: 40px;
      img {
        width: 75%;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 40px 0px 0 0;
    .body {
      margin-top: 24px;
      padding: 0px 30px;
    }
    .footer {
      margin-top: 8px;
      padding: 0px 30px;
    }
    .images {
      position: relative;
      margin-top: 68px;
      .roundBg {
        img {
          width: 100%;
          position: absolute;
          bottom: 0px;
          left: 0;
          z-index: 1;
        }
      }
      .group {
        z-index: 2;
        position: relative;
        bottom: 40px;
        img {
          width: 75%;
        }
      }
    }
  }
`;


function ScheduleDemoSucess(props) {

  return (
    <ScheduleDemoSucessContainer>
      <Slide delay={200} className="header">
        <img alt="correct icon" src="/images/icons/correct.svg"/>
      </Slide>
      <Slide delay={400} className="body">
        <Typography className="demoText" variant="h1" fontSizes={[16, 18, 18]} text="Check your inbox for the confirmation email"/>
      </Slide>
      <Slide delay={600} className="footer">
        <Typography fontWeight="400" color="#212121" fontSizes={[14, 14, 14]} variant="paragraph2" text="We have sent you the link to explore your employee engagement dashboard"/>
        <Typography fontWeight="400" color="#212121" fontSizes={[14, 14, 14]} variant="paragraph2" text="while our product experts get in touch."/>
      </Slide>
      <div className="images">
        <div className="roundBg">
          <img alt="schedule demo bg" src="/images/engage/scheduleDemoBg.svg" />
        </div>
        <Slide className="group center">
          <img alt="schedule demo success" src="/images/engage/scheduleDemoSuccess.png" />
        </Slide>
      </div>
    </ScheduleDemoSucessContainer>
  );
}

ScheduleDemoSucess.propTypes = {};

export default memo(ScheduleDemoSucess);
