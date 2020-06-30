/**
 *
 * KnowMore
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Slide from '../VisibilitySensor/Slide';
import Button from '../Button';
import Link from 'next/link'


function KnowMore(props) {
  return (
    <Slide>
      <Link href={props.to ? props.to : "/integrations"}>
        <div>
          <Button name={props.name ? props.name : 'Know More'} variant={props.variant ? props.variant : 'contained'} size={props.size ? props.size : 'large'}/>
        </div>
      </Link>
    </Slide>
  );
}

KnowMore.propTypes = {};

export default memo(KnowMore);