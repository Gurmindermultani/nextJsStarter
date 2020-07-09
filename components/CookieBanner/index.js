/**
 *
 * CookieBanner
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Typography from '../Typography';
import Button from '../Button';


const CookieBannerContainer = styled.div`
  padding: 18px 0;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: white;
  z-index: 5;
  box-shadow: 0px -2px 12px #0000001F;
  .animatedDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      margin-left: 24px;
      width: 106px;
      box-shadow: none;
    }
  }
`;

function CookieBanner(props) {
  let that = props;
  const [show, setShow] = useState(true);
  const addActivityTransition = useTransition(show, null, {
    from: { opacity: 0, height: '0px' },
    enter: { opacity: 1, height: '22px' },
    leave: { opacity: 0, height: '0px' },
    unique: true,
  });
  return (
    <CookieBannerContainer>
      {
        addActivityTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div className="animatedDiv" key={key} style={props}>
                <Typography fontSizes={[14, 14, 14]} color="#0f72ee" className="message" variant="paragraphS2" text="This website uses cookies to improve your experience. By using this site, you agree with our use of cookies." />
                <Button size="small" variant="contained" name="Got it" />
              </animated.div>
            )
        )
      }
    </CookieBannerContainer>
  );
}

CookieBanner.propTypes = {};

export default memo(CookieBanner);
