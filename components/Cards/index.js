/**
 *
 * Cards
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import LinkCard from './LinkCard';
import ButtonLinkCard from './ButtonLinkCard';

const CardsStyles = styled.div`
  
`;

function Cards(props) {
  return (
    <CardsStyles className="cardsContainer">
      {props.variant === "linkCard" &&
        <LinkCard {...props} />
      }
      {props.variant === "buttonLink" &&
        <ButtonLinkCard {...props} />
      }
    </CardsStyles>
  );
}

Cards.propTypes = {};

export default memo(Cards);