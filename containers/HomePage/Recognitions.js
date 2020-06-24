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
    bg: '#000',
    href: 'https://www.forbes.com/profile/leena-ai/#701112c55b85',
  },
  {
    name: 'tc',
    text: 'Fresh out of Y Combinator…',
    img: '/images/home/tc.png',
    bg: '#123577',
    href: 'https://techcrunch.com/2018/09/19/fresh-out-of-y-combinator-leena-ai-scores-2m-seed-round',
  },
  {
    name: 'mint',
    text: 'Leena AI secures $2 million seed..',
    img: '/images/home/mint.png',
    bg: '#1172EE',
    href: 'https://www.livemint.com/Companies/4byNwfLVvh5wBJWmNFHvsO/Leena-AI-secures-2-million-seed-funding-from-Snapdeal-cofo.html',
  },
  {
    name: 'people',
    text: 'How Leena AI is helping employees…',
    img: '/images/home/people.png',
    bg: '#04CEFF',
    href: 'https://www.peoplematters.in/article/hr-technology/how-leena-ai-is-helping-employees-become-more-productive-23737'
  },
];

const RecognitionsStyles = styled.div`
  margin-bottom: 48px;
  .contain{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    .singleCard {
      margin-right: 12px;
    } 
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    .cardsContainer {
      padding: 0px 40px 50px 40px;
    }
  }
`;

function Recognitions(props) {
  return (
    <>
      <RecognitionsStyles className="desktop">
        <div className="contain">
          {recognitions.map( recognition => 
            <Slide key={recognition.name}>
              <Card variant="linkCard" data={recognition} />
            </Slide>
          )}
        </div>
      </RecognitionsStyles>
      <RecognitionsStyles className="mobile">
        <Carousal variant="mobileCarousal">
          {recognitions.map( recognition => 
            <Card key={recognition.name} variant="linkCard" data={recognition} />
          )}
        </Carousal>
      </RecognitionsStyles>
    </>
  );
}

Recognitions.propTypes = {};

export default memo(Recognitions);