/**
 *
 * Carousal
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import CenterMode from './CenterMode';
import SingleMode from './SingleMode';

const CarousalStyles = styled.div`
  .slick-prev, .slick-next {
    width: 48px;
    height: 48px;
    &:before {
      color: #103577;
      font-size: 40px;
    }
  }
  .slick-prev {
    left: -45px;
  }
  .slick-next {
    right: -45px;
  }
`;

function Carousal(props) {
  return (
    <CarousalStyles>
      {props.variant === "centerMode" &&
        <CenterMode {...props}/>
      }
      {props.variant === "singleMode" &&
        <SingleMode {...props}/>
      }
    </CarousalStyles>
  );
}

Carousal.propTypes = {};

export default memo(Carousal);