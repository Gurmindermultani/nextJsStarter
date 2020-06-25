import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '../Typography';

const Styles = styled.div`
  padding: 18px 16px;
  border: 1px solid ${props => props.theme.palette.primary.main};
  background: #F2F8FF;
  border-radius: 4px;
  .label {
    margin-bottom: 16px;
  }
  .sliderLabels {
    display: flex;
    justify-content: space-between;
    span {
      flex-basis: 33%;
      &.sliderLabel2 {
        text-align: center;
      }
      &.sliderLabel3 {
        text-align: right;
      }
    }
  }
`;

const LeenaSlider = withStyles({
  root: {
    height: 8,
    width: '100%',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



export default function CustomizedSlider(props) {
  return (
    <Styles className="sliderContainer">
      <Typography className="label" variant="h6" fontWeight="500" fontSizes={[14, 16, 18]} text={props.label}></Typography>
      <LeenaSlider
        min={props.min ? props.min : 0}
        scale={(x) => x ** (props.scale ? props.scale : 1)}
        max={props.max ? props.max : 100}
        valueLabelDisplay="auto"
        defaultValue={20} 
      />
      <div className="sliderLabels">
        <Typography className="sliderLabel1" variant="h6" fontWeight="400" fontSizes={[14, 14, 14]} text={props.min}></Typography>
        <Typography className="sliderLabel2" variant="h6" fontWeight="400" fontSizes={[14, 14, 14]} text={props.max/2}></Typography>
        <Typography className="sliderLabel3" variant="h6" fontWeight="400" fontSizes={[14, 14, 14]} text={props.max}></Typography>
      </div>
    </Styles>
  );
}