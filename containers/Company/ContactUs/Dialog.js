/**
 *
 * Dialog
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import Link from 'next/link'
import Slide from '../../../components/VisibilitySensor/Slide';
import MaterialDialog from '@material-ui/core/Dialog';

const DialogContainer = styled.div`
  padding: 80px 100px;
  .header {
    text-align: center;
  }
  .body {
    text-align: center;
    margin-top: 28px;
    .halfBackground {
      margin-top: 0px;
    }
  }
  .footer {
    text-align: center;
    a {
      display: flex;
      justify-content: center;
    }
    .caseStudy {
      width: 264px;
      margin-top: 24px;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 40px 30px;
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
        <Slide className="header">
          <img alt="correct icon" src="/images/icons/correct.svg"/>
        </Slide>
        <Slide delay={200} className="body">
          <Typography className="demoText" variant="h1" fontSizes={[14, 20, 28]} text="We have received your request."/>
          <br />
          <Typography className="halfBackground" fontWeight="400" color="#212121" fontSizes={[14, 20, 28]} variant="paragraph2" text=" Our product experts will get back to you within 24 hours."/>
        </Slide>
        <div className="footer">
          <Slide delay={200} className="body">
            <Typography className="" fontWeight="400" color="#212121" fontSizes={[14, 20, 28]} variant="paragraph2" text="Explore more about how we have helped enterprises enhance their employee experience."/>
          </Slide>
          <Link href="/resources/caseStudies">
            <a>
              <Button size="large" className="caseStudy" variant="contained" name="Read Case Studies" />
            </a>
          </Link>
        </div>
      </DialogContainer>
    </MaterialDialog>
  );
}

Dialog.propTypes = {};

export default memo(Dialog);
