/**
 *
 * LinkCard
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';

const LinkCardStyles = styled.div`
  box-shadow: 0px 12px 24px #00000029;
  border-radius: 4px;
  width: 220px;
  .header {
    height: 172px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 126px;
      height: 110px;
    }
  }
  .body {
    max-width: 150px;
    text-align: center;
    margin: 16px 33px;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-left: 5px;
    }
    padding-bottom: 16px;
  }
`;

function LinkCard(props) {
  return (
    <LinkCardStyles className="singleCard">
      <div className="header" style={{'background': props.data.bg}}>
        <img alt={props.data.name} src={props.data.img} />
      </div>
      <div className="body">
        <Typography variant="paragraph2" color="#212121" text={props.data.text}/>
      </div>
      <div className="footer">
        <Typography variant="paragraphS2" color="#616161" text={"Read More"}/>
        <img alt="right arrow" src="/images/icons/down-arrow.svg"/>
      </div>
    </LinkCardStyles>
  );
}

LinkCard.propTypes = {};

export default memo(LinkCard);