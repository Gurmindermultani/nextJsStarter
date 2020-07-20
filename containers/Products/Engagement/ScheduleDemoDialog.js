/**
 *
 * Dialog
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';
import ScheduleDemoSuccess from './ScheduleDemoSuccess';
import MaterialDialog from '@material-ui/core/Dialog';

const DialogContainer = styled.div`
  position: relative;
  .header {
    text-align: center;
  }
  .body {
    text-align: center;
    .halfBackground {
      margin-top: 5px;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .closeDialog {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  @media only screen and (max-width: 760px) {

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
      <DialogContainer id="leadSuccessPopup">
        {props.showDialog === "form" &&
          <Form setShowDialog={props.setShowDialog} handleClose={handleClose} />
        }
        {props.showDialog === "success" &&
          <ScheduleDemoSuccess handleClose={handleClose} />
        }
        <img onClick={() => handleClose(true) } className="closeDialog pointer" alt="closeDialog" src="/images/icons/close.svg" />
      </DialogContainer>
    </MaterialDialog>
  );
}

Dialog.propTypes = {};

export default memo(Dialog);
