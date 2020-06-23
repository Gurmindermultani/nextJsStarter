/**
 *
 * IconHighlight
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import GrowIcon from '../../../components/GrowIcon';

const IconHighlightStyles = styled.div`
  max-width: 285px;
  flex-basis: 28%;
  display: flex;
  flex-direction: column;
  .middleText {
    margin: 32px 0 12px 0%;
  }
  .descriptionText {
    line-height: 25px;
  }
  @media only screen and (max-width: 760px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

function IconHighlight(props) {
  const [ anim, setAnim ] = useState({});

  const mouseEnter = () => {
    anim.setDirection(1);
    anim.play();
  };

  const mouseLeave = () => {
    anim.setDirection(-1);
    anim.play();
  };
  return (
    <IconHighlightStyles style={props.style} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
      <div>
        <GrowIcon setAnim={setAnim} name={props.name} />
      </div>
      <Typography className="middleText" variant="h4" fontSize="20px" text={props.heading}/>
      <Typography variant="paragraph2" className="descriptionText" fontSize="16px" text={props.description}/>
    </IconHighlightStyles>
  );
}

IconHighlight.propTypes = {};

export default memo(IconHighlight);