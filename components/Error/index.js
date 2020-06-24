/**
 *
 * Error
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Typography from '../Typography';


const ErrorContainer = styled.div`
  padding: 10px 0;
  .error {
    span{
      color: red;
    }
    color: red;
    font-size: 14px;
  }
  .errorMessage{
    color: ${props => props.theme.palette.accent.error };
    margin-left: 16px;
  }
`;

function Error(props) {
  let that = props;
  console.log(props);
  const addActivityTransition = useTransition(that.showErrors, null, {
    from: { opacity: 0, height: '0px' },
    enter: { opacity: 1, height: '22px' },
    leave: { opacity: 0, height: '0px' },
    unique: true,
  });
  return (
    <ErrorContainer className="errorContainer">
      {
        addActivityTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {that.errors.map(errorMsg => (
                  <span className="error" key={errorMsg}>
                    <Typography className="errorMessage" variant="paragraphS2" text={errorMsg} />
                  </span>
                ))}
              </animated.div>
            )
        )
      }
    </ErrorContainer>
  );
}

Error.propTypes = {};

export default memo(Error);
