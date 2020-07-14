/**
 *
 * Graph
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';

const GraphStyles = styled.div`
  position: relative;
  box-shadow: 0px 10px 46px #00000029;
  border-radius: 10px;
  .graphContainer {
    .header {
      box-shadow: 0px 1px 0px #9E9E9E;
      border-radius: 10px 10px 0px 0px;
    }
    .yAxis {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0px;
      bottom: -10px;
      text-align: right;
      span {
        margin-top: 27.5px;
      }
    }
    .xAxis {
      position: absolute;
      z-index: -1;
      width: 300px;
      left: 0;
      bottom: -2px;
      .border {
        border: 1px solid #f6f6f6;
        margin-top: 48px;
      }
    }
    .chart{
      display:table;
      table-layout: fixed;   
      width: 300px;
      padding-left: 62px;
      height: 200px;
      margin: 0 auto;
      background-position: left top;
      
      li{
        position:relative;
        display:table-cell;
        vertical-align:bottom;
        height:200px;
      }
      
      span{
        margin:0 auto;
        display: block;
        width: 36px;
        background: #0F72EE;
        animation: draw 1s ease-in-out;
        
        &:before{
          position:absolute;
          left:0;right:0;top:100%;
          padding:5px 1em 0;
          display:block;
          text-align:center;
          content:attr(title);
          word-wrap: break-word;
        }
        
      }
      
    }
  }

  @keyframes draw{
    0%{height:0;} 
  }
`;


function Graph(props) {
  return (
    <GraphStyles>
      <div className="graphContainer">
        <div className="header">
          <Typography fontWeight="500" color="#212121" fontSizes={[14, 14, 14]} variant="h1" text="Money saved"/>
        </div>
        <div className="xAxis">
          <div className="border" />
          <div className="border" />
          <div className="border" />
          <div className="border" />
          <div className="border" />
        </div>

        <div className="yAxis">
          <Typography fontWeight="300" color="#212121" fontSizes={[14, 14, 14]} variant="h1" text="$20,000"/>
          <Typography fontWeight="300" color="#212121" fontSizes={[14, 14, 14]} variant="h1" text="$15,000"/>
          <Typography fontWeight="300" color="#212121" fontSizes={[14, 14, 14]} variant="h1" text="$5,000"/>
          <Typography fontWeight="300" color="#212121" fontSizes={[14, 14, 14]} variant="h1" text="$1,000"/>
          <Typography fontWeight="300" color="#212121" fontSizes={[14, 14, 14]} variant="h1" text="0"/>
        </div>
        <ul class="chart">
          <li>
            <span style={{height: '10%'}} title="ActionScript"></span>
          </li>
          <li>
            <span style={{height: '40%'}} title="JavaScript"></span>
          </li>
        </ul>  
      </div>
    </GraphStyles>
  );
}

Graph.propTypes = {};

export default memo(Graph);