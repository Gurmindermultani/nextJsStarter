/**
 *
 * EmployeeExperience
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
  margin-top: 46px;
  .productHeader {
    display: flex;
    justify-content: flex-end;
    .text {
      display: flex;
      flex-direction: column;
      margin-right: 16px;
      text-align: right;
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
    .rightContainer {
      flex-basis: 50%;
      padding-right: 10px;
      padding-left: 10px;
      min-height: 350px;
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
          padding: 0 22px 16px 24px;
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
        left: -40px;
        top: -20px;
        width: 88%;
      }
      &.a2 {
        top: 102px;
        left: 68px;
        width: 94%;
        z-index: 1;
      }
      &.a3 {
        right: -36px;
        bottom: -14px;
        width: 90%;
      }
      &.b1 {
        bottom: -27px;
        right: -55px;
        width: 70%;
        z-index: 1;
      }
      &.b2 {
        top: -25px;
        left: 0px;
        width: 81%;
      }
    }
  }
  .leftContainer {
    padding-left: 30px;
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 760px) {
    margin-top: 0px;
    .productHeader {
      display: flex;
      flex-direction: column-reverse;
      padding: 0 30px;
      .text {
        margin-top: 8px;
        text-align: left;
      }
    }
    .body {
      margin-top: 24px;
      padding: 0 20px;
      .rightContainer {
        flex-basis: 100%;
      }
      .leftContainer {
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

function EmployeeExperience(props) {
  const [expanded, setExpanded] = React.useState('panel4');
  const [panelInterval, setPanelInterval] = useState('');

  const mobileCheck = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  useEffect(() => {
    const myInterval = setInterval(() => setExpanded(c => 'panel' + ( (Number(c.match(/\d+/)[0]) === 5 ? 3 : Number(c.match(/\d+/)[0]) ) + 1)), 3000);
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
        <div className="text">
          <Typography variant="h4" fontSize="20px" text={props.heading}/>
          <Typography className="description" variant="paragraph2" fontSize="18px" text={props.description}/>
        </div>
        <div>
          <Image src="/images/home/experience.svg"/>
        </div>
      </div>
      <div className="body">
        <div className="leftContainer">
          {expanded === "panel4" &&
            <div className="image center">
              <Image alt="employee engagement" src="/images/bg2.svg"/>
              <Slide from='left' className="a1">
                <Image alt="employee engagement" src="/images/home/experience/a1.svg"/>
              </Slide>
              <Slide from='right' className="a2">
                <Image alt="employee engagement" src="/images/home/experience/a2.svg"/>
              </Slide>
              <Slide from='up' className="a3">
                <Image alt="employee engagement" src="/images/home/experience/a3.svg"/>
              </Slide>
            </div>
          }
          {expanded === "panel5" &&
            <div className="image center">
              <Image alt="employee engagement" src="/images/bg2.svg"/>
              <Slide from='right' className="b1">
                <Image alt="employee engagement" src="/images/home/experience/b1.svg"/>
              </Slide>
              <Slide from='left' className="b2">
                <Image alt="employee engagement" src="/images/home/experience/b2.svg"/>
              </Slide>
            </div>
          }
        </div>
        <div className="rightContainer">
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary>
              <div className="accordianHeader">
                <Typography
                  variant="h4" 
                  fontSize="20px"
                  text={`Connect with your employees`}
                />
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Conduct AI-driven surveys throughout the employees’ lifecycle. Build an open and transparent work culture."}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary>
              <div className="questionHeader">
                <Typography
                  variant="h4" 
                  fontSize="20px"
                  text={`Intelligent analytics`}
                />
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="description" variant="paragraph2" fontSize="16px" text={"Get personalized reports about the happiness score of your employees. Know if they are aligned with the organization goals."}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <div className="buttons">
            <KnowMore className="experienceKnowMore" name="Know more" to="/employee-engagement"/>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

EmployeeExperience.propTypes = {};

export default memo(EmployeeExperience);