/**
 *
 * TopContainer
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'
import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "../../components/VisibilitySensor";

import Typography from '../../components/Typography';
import Input from '../../components/Input';
import Button from '../../components/Button';

const TopContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .topContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .animatedText {
    margin-top: 80px;
  }
  .lowerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    .animatedDemoInput {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .form-group {
        width: 360px;
        margin-right: 16px;
        margin-top: 20px;
      }
      button {
        min-width: 172px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .lowerContainer {
      flex-wrap: wrap;
      .animatedDemoInput {
        flex-wrap: wrap;
        .form-group {
          width: 100%;
        }
      }
      .bowlImage {
        margin-top: 120px;
        img {
          width: calc(100vw - 80px);
        }
      }
    }
  }
`;

function TopContainer(props) {
  return (
    <TopContainerStyles>
      <VisibilitySensor once>
        {({ isVisible }) => (
          <div className="topContainer">
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring delay={100} to={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                      ? "translateY(0)"
                      : "translateY(0px)",
                }}>
                  {({ opacity, transform }) => (
                    <div style={{ opacity, transform }} className="animatedText">
                      <Typography variant="h1" fontSize="54px" text="Redefine Employee Experience"/>
                      <br />
                      <Typography fontWeight="300" color="#212121" fontSize="46px" variant="paragraph2" text="with conversational"/>
                      <br />
                      <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="46px" variant="paragraph2" text="workflow automation"/>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
            <div className="lowerContainer">
              <VisibilitySensor once partialVisibility>
                  {({ isVisible }) => (
                    <Spring delay={500} to={{ 
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                          ? "translateY(0)"
                          : "translateY(200px)",
                    }}>
                      {({ opacity, transform }) => (
                        <div style={{ opacity, transform }} className="animatedDemoInput">
                          <Input className="fullWidth" onChange={() => null} name="schedule" placeholder="Your work email"/>
                          <Link href="/scheduleDemo">
                            <div>
                              <Button name="Schedule Demo" variant="contained" size="large"/>
                            </div>
                          </Link>
                        </div>
                      )}
                    </Spring>
                  )}
              </VisibilitySensor>
              <VisibilitySensor once partialVisibility>
                  {({ isVisible }) => (
                    <Spring delay={500} to={{ 
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                          ? "translateX(0)"
                          : "translateX(200px)",
                    }}>
                      {({ opacity, transform }) => (
                        <div style={{ opacity, transform }} className="bowlImage">
                          <img src="/images/home/bowlImage.svg" />
                        </div>
                      )}
                    </Spring>
                  )}
              </VisibilitySensor>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </TopContainerStyles>
  );
}

TopContainer.propTypes = {};

export default memo(TopContainer);