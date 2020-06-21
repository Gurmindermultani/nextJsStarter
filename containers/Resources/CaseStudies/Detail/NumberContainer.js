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
      padding: 60px 8rem;
      flex: 1;
      width: 100%;
    }
    span {
      color: white;
    }
    .heading {
      margin-bottom: 40px;
    }
    body {
      span {
        font-family: Oswald;
      }
    }
    .footer {
      max-width: 428px;
      border-top: 1px solid white;
      padding-top: 10px;
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    .detail {
      .padded {
        padding: 40px 3rem;
        flex: 1;
        width: 100%;
      }
    }
  }
`;

function NumberContainer(props) {
  return (
    <NumberContainerStyles>
      {props.data.map( (detail, idx) => {
        if (idx === 0) {
          return (
            <Slide key={detail.text + idx} from='left' className="detail">
              <div className="padded" style={{ background: detail.bg }}>
                {detail.text &&
                  <div className="heading">
                    <Typography className="rowValue" color="#212121" variant="paragraph2" fontSizes={[16, 18, 24]} text={detail.text}/>
                  </div>
                }
                <div className="body">
                  <Typography className="rowValue" fontWeight="600" color="#212121" variant="paragraph2" fontSizes={[78, 92, 100]} text={detail.number}/>
                </div>
                <div className="footer">
                  <Typography className="rowValue" color="#212121" variant="paragraph2" fontSizes={[16, 18, 24]} text={detail.subText}/>
                </div>
              </div>
            </Slide>
          );
        }
        if (idx === props.data.length - 1) {
          return (
            <Slide key={detail.text + idx} from='right' className="detail">
              <div className="padded" style={{ background: detail.bg }}>
                {detail.text &&
                  <div className="heading">
                    <Typography className="rowValue" color="#212121" variant="paragraph2" fontSizes={[16, 18, 24]} text={detail.text}/>
                  </div>
                }
                <div className="body">
                  <Typography className="rowValue" fontWeight="600" color="#212121" variant="paragraph2" fontSizes={[78, 92, 100]} text={detail.number}/>
                </div>
                <div className="footer">
                  <Typography className="rowValue" color="#212121" variant="paragraph2" fontSizes={[16, 18, 24]} text={detail.subText}/>
                </div>
              </div>
            </Slide>
          );
        }
        return (
          <FadeIn key={detail.text + idx} className="detail">
            <div className="padded" style={{ background: detail.bg }}>
              {detail.text &&
                  <div className="heading">
                    <Typography className="rowValue" color="#212121" variant="paragraph2" fontSizes={[16, 18, 24]} text={detail.text}/>
                  </div>
                }
              <div className="body">
                <Typography className="rowValue" fontWeight="600" color="#212121" variant="paragraph2" fontSizes={[78, 92, 100]} text={detail.number}/>
              </div>
              <div className="footer">
                <Typography className="rowValue" color="#212121" variant="paragraph2" fontSizes={[16, 18, 24]} text={detail.subText}/>
              </div>
            </div>
          </FadeIn>
        );
      }
    )}
    </NumberContainerStyles>
  );
}

NumberContainer.propTypes = {};

export default memo(NumberContainer);