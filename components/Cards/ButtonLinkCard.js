/**
 *
 * ButtonLinkCard
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Button from '../../components/Button';

const ButtonLinkCardStyles = styled.div`
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
  border-radius: 4px;
  padding: 40px 10px;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
    img {
      width: 126px;
    }
  }
  .body {
    text-align: center;
    margin: 16px 33px;
    span {
      line-height: 40px;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 200px;
      margin-top: 20px;
    }
  }
`;

function ButtonLinkCard(props) {
  return (
    <ButtonLinkCardStyles className="singleCard">
      <div className="header" style={{'background': props.data.bg}}>
        <img className={props.data.name} alt={props.data.name} src={props.data.img} />
      </div>
      <div className="body">
        <Typography fontWeight="500" variant="paragraph2" fontSize="18px" color="#212121" text={props.data.text}/>
      </div>
      <div className="footer">
        <Link href={`/resources/caseStudies/detail?name=${props.data.name}`} >
          <a>
            <Button variant="inverted" size="large" name="Read Case Study"/>
          </a>
        </Link>
      </div>
    </ButtonLinkCardStyles>
  );
}

ButtonLinkCard.propTypes = {};

export default memo(ButtonLinkCard);