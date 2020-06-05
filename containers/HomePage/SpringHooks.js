/**
 *
 * TopContainer
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'
import { useSpring, animated, config } from 'react-spring';

import Typography from '../../components/Typography';
import Input from '../../components/Input';
import Button from '../../components/Button';

console.log(config);

const TopContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 80px);
  .animatedText {
    margin-top: 40px;
  }
  .bowlImage {
    position: absolute;
    bottom: 250px;
    right: 0;
  }
  .demoInput {
    position: absolute;
    margin-top: 50px;
  }
  .animatedDemoInput {
    position: relative;
    width: 40%;
    display: flex;
    align-items: center;
    .form-group {
      width: 360px;
      margin-right: 16px;
      margin-top: 20px;
    }
    button {
      min-width: 172px;
    }
  }
  .halfBackground {
    position: relative;
    width: fit-content;
    &:before {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 10px;
      left: 0px;
      height: 22px;
      z-index: -1;
    }
  }
`;

function TopContainer(props) {
  const topContainerProps = useSpring({
    from: { opacity: 0,left: '0%', top: '2%', width: '100%', height: '100%' },
    to: { opacity: 1,left: '0%', top: '0%', width: '100%', height: '100%',},
    config: config.slow,
  });
  const demoProps = useSpring({
    from: { opacity: 0, left: '0%', top: '100px' },
    to: { opacity: 1, left: '0%', top: '0px',},
    config: config.slow,
  });
  const bowlProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.stiff,
  });
  return (
    <TopContainerStyles>
      <div className="topContainer">
        <animated.div className="animatedText" style={topContainerProps}>
          <Typography variant="h1" fontSize="54px" text="Redefine Employee Experience"/>
          <Typography fontWeight="300" color="#212121" fontSize="46px" variant="paragraph2" text="with conversational"/>
          <br />
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="46px" variant="paragraph2" text="workflow automation"/>
        </animated.div>
        <div className="demoInput">
          <animated.div className="animatedDemoInput" style={demoProps}>
            <Input onChange={() => null} name="schedule" placeholder="Your work email"/>
            <Link href="/scheduleDemo">
              <div>
                <Button name="Schedule Demo" variant="contained" size="large"/>
              </div>
            </Link>
          </animated.div>
        </div>
        <animated.div style={bowlProps}>
          <div className="bowlImage">
            <img src="/images/home/bowlImage.svg" />
          </div>
        </animated.div>
      </div>
    </TopContainerStyles>
  );
}

TopContainer.propTypes = {};

export default memo(TopContainer);