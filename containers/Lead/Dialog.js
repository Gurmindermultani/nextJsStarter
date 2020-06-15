/**
 *
 * Dialog
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Slide from '../../components/VisibilitySensor/Slide';
import MaterialDialog from '@material-ui/core/Dialog';

const DialogContainer = styled.div`
  min-width: 1000px;
  padding: 80px 100px;
  .header {
    text-align: center;
  }
  .body {
    text-align: center;
    margin-top: 32px;
    .halfBackground {
      margin-top: 5px;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    button {
      width: 232px;
      margin-top: 16px;
    }
  }
`;


function Dialog(props) {

  const handleClose = cancel => {
    props.setShowDialog('');
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleStatusClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;
  const updateStatus = value => {
    handleStatusClose();
    setStatus(value);
    // props.actionHandler({ status: value });
  };
  if (!props.showDialog) {
    return null;
  }
  return (
    <MaterialDialog
      open={!!props.showDialog}
      onClose={() => handleClose(true)}
      aria-labelledby="form-dialog-title"
      fullWidth={false}
      maxWidth="lg"
    >
      <DialogContainer>
        <Slide delay={200} className="header">
          <img alt="correct icon" src="/images/icons/correct.svg"/>
        </Slide>
        <Slide delay={400} className="body">
          <Typography className="demoText" variant="h1" fontSize="28px" text="Check your inbox."/>
          <br />
          <Typography className="halfBackground" fontWeight="400" color="#212121" fontSize="24px" variant="paragraph2" text="We have emailed you the case study."/>
        </Slide>
        <Slide delay={600} className="footer">
          <Typography fontWeight="400" color="#212121" fontSize="16px" variant="paragraph2" text="Want to know how Leena AI can add value to your enterprise?."/>
          <a href="https://leena.ai/" target="_blank">
            <Button size="large" variant="contained" name="Visit Leena.AI" />
          </a>
        </Slide>
      </DialogContainer>
    </MaterialDialog>
  );
}

Dialog.propTypes = {};

export default memo(Dialog);
