/**
 *
 * ParaGraphs
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../components/Typography';
import FadeIn from '../../../../components/VisibilitySensor/FadeIn';

const ParaGraphsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  .leftContainer {
    padding: 64px 80px 64px 0;
  }
  .rightContainer {
    padding: 64px 0px 64px 80px;
  }
  .heading{
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    .leftContainer {
      padding: 40px 30px;
    }
    .rightContainer {
      padding: 40px 30px;
    }
  }
`;

function ParaGraphs(props) {
  console.log(props);
  return (
    <FadeIn>
      <ParaGraphsStyles>
        <div className="leftContainer">
          <div className="heading">
            <Typography className="rowValue" color="#212121" variant="h1" fontSizes={[20, 22, 24]} text={props.data[0].header}/>
          </div>
          <div className="body">
            <Typography className="rowValue by" color="#212121" fontWeight="400" variant="h1" fontSizes={[14, 16, 18]} text={props.data[0].body}/>
          </div>
        </div>
        <div className="rightContainer">
          <div className="heading">
            <Typography className="rowValue" color="#212121" variant="h1" fontSizes={[20, 22, 24]} text={props.data[1].header}/>
          </div>
          <div className="body">
            <Typography className="rowValue by" color="#212121" fontWeight="400" variant="h1" fontSizes={[14, 16, 18]} text={props.data[1].body}/>
          </div>
        </div>
      </ParaGraphsStyles>
    </FadeIn>
  );
}

ParaGraphs.propTypes = {};

export default memo(ParaGraphs);