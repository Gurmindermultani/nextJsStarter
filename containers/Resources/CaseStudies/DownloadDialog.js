/**
 *
 * Dialog
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';
import MaterialDialog from '@material-ui/core/Dialog';

const DialogContainer = styled.div`
  padding: 40px 56px;
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
  @media only screen and (max-width: 760px) {
    padding: 40px 20px;
    .footer {
      text-align: center;
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
      <DialogContainer id="leadSuccessPopup">
        <Form handleClose={handleClose} pdf={props.pdf} />
      </DialogContainer>
    </MaterialDialog>
  );
}

Dialog.propTypes = {};

export default memo(Dialog);
