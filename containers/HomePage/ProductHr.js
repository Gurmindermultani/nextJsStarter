/**
 *
 * ProductHr
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import KnowMore from '../../components/KnowMore';
import Image from '../../components/Image';

import Slide from "../../components/VisibilitySensor/Slide";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ProductStyles = styled.div`
  overflow: hidden; 
  .productHeader {
    display: flex;
    .text {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      .description {
        max-width: 710px;
        margin-top: 10px;
        line-height: 26px;
      }
    }
  }
  .body {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    .leftContainer {
      flex-basis: 50%;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 40px;
      .MuiExpansionPanel-root {
        box-shadow: none;
        margin: 0px;
        margin-bottom: 16px;
        &::before {
          height: 0px;
        }
        .MuiExpansionPanelSummary-root {
          padding: 0px;
          min-height: auto;
          .MuiExpansionPanelSummary-content {
            margin: 0;
            min-height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${props => props.theme.palette.smoke};
            padding: 16px 24px;
            &.Mui-expanded {
              background: ${props => props.theme.palette.white};
            }
          }
          .MuiExpansionPanelSummary-expandIcon {
            padding: 0px;
          }
        }
        .MuiExpansionPanelDetails-root {
          padding: 0 24px 16px 24px;
        }
        &.Mui-expanded {
          box-shadow: 0px 4px 16px #00000014;
          background: ${props => props.theme.palette.white};
        }
      }
    }
    .description {
      line-height: 26px;
    }
  }
  .buttons {
    margin-top: 48px;
  }
  .image {
    position: relative;
    width: 400px;
    height: 310px;
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: -45px;
        left: 0;
        width: 70%;
      }
      &.a2 {
        top: 16px;
        right: 38px;
        width: 36%;
      }
      &.a3 {
        bottom: -30px;
        right: -40px;
        width: 88%;
      }
      &.b1 {
        top: -28px;
        left: 0;
        width: 85%;
      }
      &.b2 {
        top: 76px;
        right: -30px;
        width: 31%;
      }
      &.b3 {
        bottom: -10px;
        right: -10px;
        width: 88%;
      }
      &.c1 {
        top: -28px;
        left: 0;
        width: 80%;
      }
      &.c2 {
        top: 40px;
        right: -10px;
        width: 31%;
      }
      &.c3 {
        bottom: 0px;
        right: 0px;
        width: 82%;
      }
    }
  }
  .rightContainer {
    padding-right: 30px;
  }
  @media only screen and (max-width: 760px) {
    .productHeader {
      display: block;
      padding: 0 30px;
      .text {
        margin: 8px 0 0 0;
      }
    }
    .body {
      margin-top: 24px;
      padding: 0 20px;
      .leftContainer {
        flex-basis: 100%;
      }
      .rightContainer {
        display: none;
      }
    }
    .buttons {
      button {
        margin: auto;
      }
    }
  }
`;

function ProductHr(props) {
  const [expanded, setExpanded] = useState('panel1');
  const [panelInterval, setPanelInterval] = useState('');

  const mobileCheck = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  useEffect(() => {
    const myInterval = setInterval(() => setExpanded(c => 'panel' + ( (Number(c.match(/\d+/)[0]) === 3 ? 0 : Number(c.match(/\d+/)[0]) ) + 1)), 3000);
    setPanelInterval(myInterval);
    if (mobileCheck()) {
      clearInterval(myInterval);
    }
    return () => clearInterval(myInterval);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    clearInterval(panelInterval);
    setExpanded(panel);
  };
  return (
    <ProductStyles>
    <div className="productHeader">
      <div>
        <Image src="/images/home/helpdesk.svg"/>
      </div>
      <div className="text">
        <Typography variant="h4" fontSize="20px" text={props.heading}/>
        <Typography className="description" variant="paragraph2" fontSize="18px" text={props.description}/>
      </div>
    </div>
      <div className="body">
        <div className="leftContainer">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary>
              <div className="accordianHeader">
                <Typography
                  variant="h4" 
                  fontSize="20px"
                  text={`FAQ automation`}
                />
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Transform your policy queries into AI-enabled conversational chat. Give instant automatic replies for all employee queries that’s documented in your knowledge base."}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary>
              <div className="questionHeader">
                <Typography
                  variant="h4" 
                  fontSize="20px"
                  text={`Case management`}
                />
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Let your employees raise tickets right on the chat. Also, give them real-time updates about the resolution status. It's intuitive, efficient and quick."}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary>
              <div className="questionHeader">
                <Typography
                  variant="h4" 
                  fontSize="20px"
                  text={`HR workflows`}
                />
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Make it easy for your employees to access the services they need. Get rid of complicated forms and tedious workflows."}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <div className="buttons">
            <KnowMore className="hrHelpdeskKnowMore" to={"/employee-query-management"} name="Know more" type="link" variant="contained" size="large"/>
          </div>
        </div>
        <div className="rightContainer">
          {expanded === "panel1" &&
            <div className="image center">
              <Image alt="faq automation" src="/images/bg1.svg"/>
              <Slide from='left' className="a1">
                <Image alt="faq automation" src="/images/home/helpdesk/a1.svg"/>
              </Slide>
              <Slide from='right' className="a2">
                <Image alt="faq automation" src="/images/home/helpdesk/a2.svg"/>
              </Slide>
              <Slide from='up' className="a3">
                <Image alt="faq automation" src="/images/home/helpdesk/a3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel2" &&
            <div className="image center">
              <Image alt="case management" src="/images/bg1.svg"/>
              <Slide from='left' className="b1">
                <Image alt="case management" src="/images/home/helpdesk/b1.svg"/>
              </Slide>
              <Slide from='right' className="b2">
                <Image alt="case management" src="/images/home/helpdesk/b2.svg"/>
              </Slide>
              <Slide from='up' className="b3">
                <Image alt="case management" src="/images/home/helpdesk/b3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel3" &&
            <div className="image center">
              <Image alt="hr workflows" src="/images/bg1.svg"/>
              <Slide from='left' className="c1">
                <Image alt="hr workflows" src="/images/home/helpdesk/c1.svg"/>
              </Slide>
              <Slide from='right' className="c2">
                <Image alt="hr workflows" src="/images/home/helpdesk/c2.svg"/>
              </Slide>
              <Slide from='up' className="c3">
                <Image alt="hr workflows" src="/images/home/helpdesk/c3.svg"/>
              </Slide>
            </div>
          }
        </div>
      </div>
    </ProductStyles>
  );
}

ProductHr.propTypes = {};

export default ProductHr;