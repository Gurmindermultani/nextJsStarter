/**
 *
 * CookieBanner
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Typography from '../Typography';


const CookieBannerContainer = styled.div`
  padding: 10px 0;
`;

function CookieBanner(props) {
  let that = props;
  const addActivityTransition = useTransition(that.showCookieBanners, null, {
    from: { opacity: 0, height: '0px' },
    enter: { opacity: 1, height: '22px' },
    leave: { opacity: 0, height: '0px' },
    unique: true,
  });
  return (
    <CookieBannerContainer className="CookieBannerContainer">
      {
        addActivityTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {that.CookieBanners.map(CookieBannerMsg => (
                  <span className="CookieBanner" key={CookieBannerMsg}>
                    <Typography className="CookieBannerMessage" variant="paragraphS2" text={CookieBannerMsg} />
                  </span>
                ))}
              </animated.div>
            )
        )
      }
    </CookieBannerContainer>
  );
}

CookieBanner.propTypes = {};

export default memo(CookieBanner);
