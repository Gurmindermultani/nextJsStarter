/**
 *
 * Cards
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import LinkCard from './LinkCard';

const CardsStyles = styled.div`
  
`;

function Cards(props) {
  return (
    <CardsStyles>
      {props.variant === "linkCard" &&
        <LinkCard {...props} />
      }
    </CardsStyles>
  );
}

Cards.propTypes = {};

export default memo(Cards);