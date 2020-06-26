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


function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
      var suffixes = ["", "k", "m", "b","t"];
      var suffixNum = Math.floor( (""+value).length/3 );
      var shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
          var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
          if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
      newValue = shortValue+suffixes[suffixNum];
  }
  return newValue;
}

export default function CustomizedSlider(props) {
  const onChange = (e, value) => {
    if (props.handleChange) {
      props.handleChange(value);
    }
    if (props.onChange) {
      const e = { target: { value } };
      props.onChange(e);
    }
  }
  return (
    <Styles className="sliderContainer">
      <Typography className="label" variant="paragraph2" fontSizes={[14, 14, 14]}  text={props.label}></Typography>
      <LeenaSlider
        min={props.min ? props.min : 0}
        scale={(x) => x ** (props.scale ? props.scale : 1)}
        max={props.max ? props.max : 100}
        valueLabelDisplay="auto"
        value={props.value ? props.value : 0}
        valueLabelFormat={(x) => abbreviateNumber(x)}
        onChange={onChange}
      />
      <div className="sliderLabels">
        <Typography className="sliderLabel1" variant="paragraph2" fontSizes={[14, 14, 14]}  text={props.minLabel}></Typography>
        <Typography className="sliderLabel2" variant="paragraph2" fontSizes={[14, 14, 14]}  text={props.midLabel}></Typography>
        <Typography className="sliderLabel3" variant="paragraph2" fontSizes={[14, 14, 14]}  text={props.maxLabel}></Typography>
      </div>
    </Styles>
  );
}