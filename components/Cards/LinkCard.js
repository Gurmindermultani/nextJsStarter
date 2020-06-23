/**
 *
 * LinkCard
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';

const LinkCardStyles = styled.a`
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
  transition: transform 420ms cubic-bezier(.165,.84,.44,1);
  cursor: pointer;
  border-radius: 4px;
  width: 220px;
  display: block;
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
  &:hover {
    transform: scale(1.05);
    span {
      color: #212121;
    }
    .readMore {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`;

function LinkCard(props) {
  return (
    <LinkCardStyles href={props.data.href} target="_blank" className="singleCard">
      <div className="header" style={{'background': props.data.bg}}>
        <img alt={props.data.name} src={props.data.img} />
      </div>
      <div className="body">
        <Typography fontSize="14px" variant="paragraph2" color="#212121" text={props.data.text}/>
      </div>
      <div className="footer">
        <Typography className="readMore" variant="paragraphS2" fontSize="12px" color="#616161" text={"Read More"}/>
        <img alt="right arrow" src="/images/icons/down-arrow.svg"/>
      </div>
    </LinkCardStyles>
  );
}

LinkCard.propTypes = {};

export default memo(LinkCard);