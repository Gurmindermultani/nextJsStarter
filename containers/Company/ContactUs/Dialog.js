/**
 *
 * Dialog
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '../../../components/Typography';
import Button from '../../../components/Button';
import MaterialDialog from '@material-ui/core/Dialog';

const DialogContainer = styled.div`
  min-width: 600px;
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
  console.log(props.showDialog);
  if (!props.showDialog) {
    return null;
  }
  return (
    <MaterialDialog
      open={!!props.showDialog}
      onClose={() => handleClose(true)}
      aria-labelledby="form-dialog-title"
    >
      <DialogContainer>
        <div className="header">
          
        </div>
        <div className="body">

        </div>
        <div className="footer">
          <Button
            className="success"
            onClick={handleClose}
            variant="contained"
            name={"Save"}
          />
          <Button
            onClick={() => handleClose()}
            className="cancel"
            variant="text"
            name="Cancel"
          />
        </div>
      </DialogContainer>
    </MaterialDialog>
  );
}

Dialog.propTypes = {};

export default memo(Dialog);
