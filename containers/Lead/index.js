/**
 *
 * CaseManagment
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import Input from '../../components/Input';
import Contact from '../../components/Contact';
import Platforms from '../../components/Platforms';
import FadeIn from '../../components/VisibilitySensor/FadeIn';
import Slide from '../../components/VisibilitySensor/Slide';
import Quote from '../../components/Quote';
import Utils from '../../utils';

import Form from './Form';
import Insights from './Insights';
import Clients from './Clients';
import { LeadStyles } from './styles';

function CaseManagment(props) {
  return (
    <LeadStyles>
      <section className="section header center">
        <Slide delay={100} onLoad from='down'>
          <img src="images/leenaLogo.svg"/>
        </Slide>
        <div />
        <div className="contact desktop">
          <Slide delay={100} onLoad from='down'>
            <Contact />
          </Slide>
        </div>
      </section>
      <section className="section section0">
        <FadeIn className="textContainer textCenter">
          <Typography className="topText" variant="h1" fontSizes={[20, 30, 40]} text="Discover how AirAsia transformed"/>
          <br />
          <Typography className="topText" variant="h1" fontSizes={[20, 30, 40]} text="employee query resolution with Leena AI"/>
        </FadeIn>
        <div className="formContainer">
          <Slide from='left' className="leftContainer center">
            <img src='/images/airasia/book.png'/>
          </Slide>
          <Slide from='right' className="rightContainer center">
            <Form />
          </Slide>
        </div>
        <Insights />
        <div  className="trap" />
      </section>
      <section className="section section1">
        <Quote userIcon="images/users/attila.png" userName="~ Attila Emam," by="Head of Talent, Learning & Culture, AirAsia" text="AskPAC, the conversational AI platform by Leena AI has transformed the way employee queries are handled at AirAsia. Now, the process is highly efficient, streamlined and quick. Our employees, Allstars, now get instant reply to their queries. Our People and Culture (PAC) team takes less time to resolve employee tickets. AskPAC has automated one-third of our employee queries and significantly reduced average resolution time. Besides, Leena AI’s customer service is awesome. Their team is highly enthusiastic and is always willing to take up new challenges. They are doing a great job in enterprise conversational AI." />
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know our extended family"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="300000+ employees across the globe use Leena AI"/>
        </FadeIn>
        <Slide from='up'>
          <Clients />
        </Slide>
      </section>
      <section className="section section3">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Slide from='up'>
          <Platforms />
        </Slide>
      </section>
      <section className="section section4">
        <FadeIn className="container">
          <Typography color="#fff" className="textCenter" variant="h3" fontSizes={[20, 22, 24]} text="Do you want to witness this transformation journey of AirAsia?"/>
          <Button 
            onClick={() => Utils.scrollToTop(100)} 
            size="large" 
            variant="inverted" 
            name="Yes, I want the case study" />
        </FadeIn>
      </section>
      <section className="section section5 mobile">
        <Contact />
      </section>
    </LeadStyles>
  );
}

CaseManagment.propTypes = {};

export default memo(CaseManagment);