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
          <Button className={props.className} name={props.name ? props.name : 'See more integrations'} variant={props.variant ? props.variant : 'contained'} size={props.size ? props.size : 'large'}/>
        </div>
      </Link>
    </Slide>
  );
}

KnowMore.propTypes = {};

export default memo(KnowMore);