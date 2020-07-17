import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Button from '../components/Button';
import Typography from '../components/Typography';
import redirections from '../data/redirections';

const Styles = styled.div`
  padding: 48px 64px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .body {
    width: 1000px;
    margin: auto;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .leftContainer {
      flex-basis: 40%;
      .text {
        margin: 32px 0;
      }
      .buttons {
        margin-top: 32px;
        width: 220px;
      }
    }
    .rightContainer {
      flex-basis: 40%;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 30px;
    .body {
      width: calc(100vw - 60px);
      flex-wrap: wrap-reverse;
      margin-top: 32px;
      .leftContainer {
        flex-basis: 100%;
        margin-top: 32px;
        text-align: center;
        .buttons {
          width: 100%;
        }
      }
      .rightContainer {
        flex-basis: 100%;
        img {
          width: calc(100vw - 60px);
        }
      }
    }
  }
`;

function CustomError({ statusCode }) {
  return (
    <Styles>
      <div className="header">
        <Link href="/">
          <a>
            <img src="/images/leenaLogo.svg"/>
          </a>
        </Link>
      </div>
      <div className="body">
        <div className="leftContainer">
          <Typography  variant="h1" fontSizes={[36, 42, 46]} text="Page not found" />
          <br />
          <Typography className="text" fontWeight="400" variant="h1" fontSizes={[18, 20, 24]} text="We can’t find the page you’re looking for. Go back or visit our homepage." />
          <Link href="/">
            <div className="buttons">
              <Button fullWidth name="Visit Homepage" variant="contained" size="large"/>
            </div>
          </Link>
        </div>
        <div className="rightContainer">
          <img src="/images/error.svg"/>
        </div>
      </div>
    </Styles>
  );
}

function getInitialProps({ req, res, err }) {
  if (req.url && redirections[req.url.replace(/\/$/, "")]) {
    res.writeHead(301, { Location: redirections[req.url.replace(/\/$/, "")] }).end();
  }
  let statusCode;
  // If the res variable is defined it means nextjs
  // is in server side
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }
  return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;