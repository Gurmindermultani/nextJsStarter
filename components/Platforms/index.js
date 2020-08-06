/**
 *
 * Platforms
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slide from '../../components/VisibilitySensor/Slide';

const PlatformsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  .platform {
    display: flex;
    flex-direction: column;
    align-items: center;
    .tools {
      margin-top: 20px;
      max-width: 260px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .tool {
        margin-right: 12px;
        margin-top: 12px;
        width: 70px;
        height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    .platform {
      width: 100%;
      margin-bottom: 38px;
    }
  }
`;

const hris = [
  {
    name: "wTool",
    image: "/images/home/wTool.png"
  },
  {
    name: "adp",
    image: "/images/home/adp.png"
  },
  {
    name: "oracleFirst",
    image: "/images/home/oracleFirst.png"
  },
  {
    name: "oracle",
    image: "/images/home/oracle.png"
  },
  {
    name: "sap",
    image: "/images/home/sap.png"
  },
];

const collabTools = [
  {
    name: "tTool",
    image: "/images/home/tTool.png"
  },
  {
    name: "outlook",
    image: "/images/home/outlook.png"
  },
  {
    name: "workchat",
    image: "/images/home/workchat.png"
  },
  {
    name: "hangout",
    image: "/images/home/hangout.png"
  },
  {
    name: "slack",
    image: "/images/home/slack.png"
  },
  {
    name: "whatsapp",
    image: "/images/home/whatsapp.png"
  },
];

const apps = [
  {
    name: "android",
    image: "/images/home/android.png"
  },
  {
    name: "ios",
    image: "/images/home/ios.png"
  },
  {
    name: "microsoft",
    image: "/images/home/microsoft.png"
  },
  {
    name: "mac",
    image: "/images/home/mac.png"
  },
];

function Platforms(props) {
  return (
    <PlatformsStyles className="platforms">
      <Slide from='up' className="platform">
        <Typography variant="paragraph2" fontSize="16px" text="HRIS"/>
        <div className="tools">
          {hris.map( tool => 
            <div key={tool.name} className="tool">
              <img alt="hris tool" src={tool.image}/>
            </div>
          )}
        </div>
      </Slide>
      <Slide from='up' className="platform">
        <Typography variant="paragraph2" fontSize="16px" text="Collaboration tools"/>
        <div className="tools">
          {collabTools.map( tool => 
            <div key={tool.name} className="tool">
              <img alt="collabTools tool" src={tool.image}/>
            </div>
          )}
        </div>
      </Slide>
      <Slide from='up' className="platform">
        <Typography variant="paragraph2" fontSize="16px" text="Mobile and desktop apps"/>
        <div className="tools">
          {apps.map( tool => 
            <div key={tool.name} className="tool">
              <img alt="Mobile and desktop apps" src={tool.image}/>
            </div>
          )}
        </div>
      </Slide>
    </PlatformsStyles>
  );
}

Platforms.propTypes = {};

export default memo(Platforms);