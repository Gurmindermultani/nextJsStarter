/**
 *
 * Recognitions
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../../components/Cards';
import Slide from "../../components/VisibilitySensor/Slide";
import FadeIn from "../../components/VisibilitySensor/FadeIn";
import Carousal from "../../components/Carousal";
const recognitions = [
  {
    name: 'forbes',
    text: 'Leena is like Siri for employees…',
    img: '/images/home/forbes.png',
    bg: '#000'
  },
  {
    name: 'tc',
    text: 'Fresh out of Y Combinator…',
    img: '/images/home/tc.png',
    bg: '#123577'
  },
  {
    name: 'mint',
    text: 'Leena AI secures $2 million seed..',
    img: '/images/home/mint.png',
    bg: '#1172EE'
  },
  {
    name: 'people',
    text: 'How Leena AI is helping employees…',
    img: '/images/home/people.png',
    bg: '#04CEFF'
  },
];

const RecognitionsStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  .singleCard {
    margin-right: 24px;
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    .cardsContainer {
      padding-bottom: 50px;
    }
  }
`;

function Recognitions(props) {
  return (
    <>
      <RecognitionsStyles className="desktop">
        {recognitions.map( recognition => 
          <Slide key={recognition.name}>
            <Card variant="linkCard" data={recognition} />
          </Slide>
        )}
      </RecognitionsStyles>
      <RecognitionsStyles className="mobile">
        <Carousal variant="mobileCarousal">
          {recognitions.map( recognition => 
            <FadeIn key={recognition.name}>
              <Card variant="linkCard" data={recognition} />
            </FadeIn>
          )}
        </Carousal>
      </RecognitionsStyles>
    </>
  );
}

Recognitions.propTypes = {};

export default memo(Recognitions);