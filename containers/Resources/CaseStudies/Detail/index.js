/**
 *
 * CaseStudies
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';
import Quote from '../../../../components/Quote';
import FadeIn from '../../../../components/VisibilitySensor/FadeIn';

import { CaseStudiesStyles } from './styles';
import airasia from './airasia';
import BlogHeader from './BlogHeader';
import Comment from './Comment';
import NumberContainer from './NumberContainer';
import Expression from './Expression';
import ParaGraphs from './ParaGraphs';
import DownloadDialog from '../DownloadDialog';


const dataMap = {
  airasia,
};

const mapTypesToComponents = {
  header: BlogHeader,
  comment: Comment,
  numberContainer: NumberContainer,
  expression: Expression,
  paraGraphs: ParaGraphs,
  quote: Quote,
};

function CaseStudies(props) {
  const [showDialog, setShowDialog] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ caseStudy, setCaseStudy ] = useState('');
  const [ pdf, setPdf ] = useState({});
  useEffect(() => {
    setCaseStudy(dataMap[props.type]);
    setLoading(false);
  },[]);
  if (loading) {
    return <div className="pageLoader">Loading...</div>;
  }
  if (!caseStudy) {
    return <div className="pageLoader">No Data Found.</div>;
  }
  const showDialogFn = (type, currentPdf) => {
    setShowDialog(type);
    setPdf(currentPdf);
  };
  return (
    <CaseStudiesStyles>
      {caseStudy.map( (section, idx) => 
        <section key={section.type + idx} className={"section section0 " + section.type}>
          {mapTypesToComponents[section.type] ? React.createElement(mapTypesToComponents[section.type], {...section.details, showDialogFn}) : ''}
        </section>
      )}
      <section className="section readFull ">
        <div className="topLeft">
          <img alt="animationImputs" src="/images/demo/1.svg"/>
        </div>
        <FadeIn className="text center">
          <Typography className="topText" variant="h1" color="#fff" fontSizes={[18, 28, 32]} text="Read complete case study"/>
          <Button onClick={() => showDialogFn('download', { name: props.pdfName, href: props.pdf })} size="large" variant="inverted" name="Download case study"/>
        </FadeIn>
        <div className="bottomRight">
          <img alt="animationImputs" src="/images/demo/2.svg"/>
        </div>
      </section>
      <DownloadDialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        pdf={pdf}
      />
    </CaseStudiesStyles>
  );
}

CaseStudies.propTypes = {};

export default memo(CaseStudies);