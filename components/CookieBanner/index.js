/**
 *
 * CookieBanner
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Typography from '../Typography';
import Button from '../Button';


const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #fff;
  z-index: 5;
  .animatedDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px 30px;
    box-shadow: 0px -9px 22px #00000029;
    background: #212121;
    button {
      margin-left: 24px;
      width: 128px;
      height: 44px;
      box-shadow: none;
    }
  }
  @media only screen and (max-width: 760px) {
    .animatedDiv {
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 24px 30px;
      button {
        margin-top: 24px;
        margin-left: 0;
      }
    }
  }
`;

function CookieBanner(props) {
  let that = props;
  const [show, setShow] = useState(true);
  const addActivityTransition = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    unique: true,
  });
  useEffect(() => {
    if (localStorage.getItem("cookieBanner") === "false") {
      setShow(false);
    }
    if (!localStorage.hasOwnProperty("cookieBanner")) {
      localStorage.setItem("cookieBanner", true);
    };
  }, []);

  const hideBanner = () => {
    setShow(false);
    localStorage.setItem("cookieBanner", false);
  }

  return (
    <CookieBannerContainer>
      {
        addActivityTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div className="animatedDiv" key={key} style={props}>
                <Typography fontSizes={[16, 16, 16]} color="#fff" className="message" variant="h6" text="This website uses cookies to improve your experience. By using this site, you agree with our use of cookies." />
                <Button onClick={() => hideBanner()} size="medium" variant="invertedBlack" name="Got it" />
              </animated.div>
            )
        )
      }
    </CookieBannerContainer>
  );
}

CookieBanner.propTypes = {};

export default memo(CookieBanner);
