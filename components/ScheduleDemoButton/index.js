/**
 *
 * ScheduleDemoButton
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from '../VisibilitySensor/Slide';
import Button from '../Button';
import Link from 'next/link'
import { withRouter } from 'next/router'

const ScheduleDemoButtonStyles = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 760px) {
    margin-top: 48px;
  }
`;

function ScheduleDemoButton(props) {
  if (props.type === "link") {
    return (
      <Link href={{ pathname: "/schedule-demo", query: { fromPage: props.router.pathname } }}>
        <div>
          <Button className={props.className} fullWidth={props.fullWidth} name={props.name ? props.name : 'Schedule demo'} variant={props.variant ? props.variant : 'contained'} size={props.size ? props.size : 'large'}/>
        </div>
      </Link>
    );
  }
  return (
    <Slide>
      <Link href={{ pathname: "/schedule-demo", query: { fromPage: props.router.pathname } }}>
        <ScheduleDemoButtonStyles>
          <Button className={props.className} name={props.name ? props.name : 'Schedule demo'} variant={props.variant ? props.variant : 'contained'} size={props.size ? props.size : 'large'}/>
        </ScheduleDemoButtonStyles>
      </Link>
    </Slide>
  );
}

ScheduleDemoButton.propTypes = {};

export default memo(withRouter(ScheduleDemoButton));