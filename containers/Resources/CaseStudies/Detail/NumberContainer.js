/**
 *
 * NumberContainer
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../components/Typography';
import Slide from '../../../../components/VisibilitySensor/Slide';
import FadeIn from '../../../../components/VisibilitySensor/FadeIn';

const NumberContainerStyles = styled.div`
  display: flex;
  .detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .padded {
      padding: 60px 0rem;
      flex: 1;
      width: 100%;
      .inner {
        width: 50%;
        margin: auto;
      }
    }
    span {
      color: white;
    }
    .heading {
      margin-bottom: 10px;
    }
    .body {
      span {
        font-family: sans-serif;
      }
    }
    .footer {
      span {
        border-top: 1px solid white;
        padding-top: 20px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    .detail {
      .padded {
        padding: 40px 3rem;
        flex: 1;
        width: 100%;
        .inner {
          width: 100%;
        }
      }
    }
  }
`;

function NumberContainer(props) {
  return (
    <NumberContainerStyles>
      {props.data.map( (detail, idx) => (
        <Slide key={detail.text + idx} className="detail">
          <div className="padded" style={{ background: detail.bg }}>
            <div className="inner">
              {detail.text &&
                <div className="heading">
                  <Typography className="rowValue" color="#212121" variant="h1" fontSizes={[16, 18, 24]} fontWeight="400"  text={detail.text}/>
                </div>
              }
              <div className="body">
                <Typography className="rowValue" fontWeight="600" color="#212121" variant="h1" fontSizes={[78, 100, 100]} text={detail.number}/>
              </div>
              <div className="footer">
                <Typography className="rowValue" color="#212121" variant="h1" fontSizes={[16, 18, 24]} text={detail.subText}/>
              </div>
            </div>
          </div>
        </Slide>
      )
    )}
    </NumberContainerStyles>
  );
}

NumberContainer.propTypes = {};

export default memo(NumberContainer);