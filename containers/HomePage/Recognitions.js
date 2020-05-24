/**
 *
 * Recognitions
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../../components/Cards';

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
  .singleCard {
    margin-right: 24px;
  }
`;

function Recognitions(props) {
  return (
    <RecognitionsStyles>
      {recognitions.map( recognition => 
        <Card variant="linkCard" key={recognition.name} data={recognition} />
      )}
    </RecognitionsStyles>
  );
}

Recognitions.propTypes = {};

export default memo(Recognitions);