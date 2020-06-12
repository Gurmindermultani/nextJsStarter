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
      margin-top: 20px;
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
        <div className="header">
          <img alt="correct icon" src="/images/icons/correct.svg"/>
        </div>
        <div className="body">
          <Typography className="demoText" variant="h1" fontSize="28px" text="We have received your request."/>
          <br />
          <Typography className="halfBackground" fontWeight="400" color="#212121" fontSize="24px" variant="paragraph2" text=" Our product experts will get back to you within 24 hours."/>
        </div>
        <div className="footer">
        
        </div>
      </DialogContainer>
    </MaterialDialog>
  );
}

Dialog.propTypes = {};

export default memo(Dialog);
