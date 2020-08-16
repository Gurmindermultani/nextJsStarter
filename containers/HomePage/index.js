/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import Slide from "../../components/VisibilitySensor/Slide";
import VisibilitySensor from "../../components/VisibilitySensor";

import Typography from '../../components/Typography';

import { HomePageStyles } from './styles';
import TopContainer from './TopContainer';


function HomePage(props) {
  return (
    <HomePageStyles>
      <section className="section section0">
        <TopContainer />
      </section>
    </HomePageStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);