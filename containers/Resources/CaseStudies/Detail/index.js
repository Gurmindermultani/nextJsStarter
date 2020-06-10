/**
 *
 * CaseStudies
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';
import Input from '../../../../components/Input';
import Cards from '../../../../components/Cards';
import FadeIn from '../../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../../components/VisibilitySensor/Slide';
import Utils from '../../../../utils';

import { CaseStudiesStyles } from './styles';
import airasia from './airasia';
import BlogHeader from './BlogHeader';
import Comment from './Comment';
import NumberContainer from './NumberContainer';
import Expression from './Expression';


const dataMap = {
  airasia,
};

const mapTypesToComponents = {
  header: BlogHeader,
  comment: Comment,
  numberContainer: NumberContainer,
  expression: Expression
};

function CaseStudies(props) {
  const [ loading, setLoading ] = useState(true);
  const [ caseStudy, setCaseStudy ] = useState('');
  useEffect(() => {
    setCaseStudy(dataMap[Utils.getQueryParam('name')]);
    setLoading(false);
  },[]);
  console.log(caseStudy);
  if (loading) {
    return <div className="pageLoader">Loading...</div>;
  }
  if (!caseStudy) {
    return <div className="pageLoader">No Data Found.</div>;
  }
  return (
    <CaseStudiesStyles>
      {caseStudy.map( (section, idx) => 
        <section key={section.type + idx} className={"section section0 " + section.type}>
          {mapTypesToComponents[section.type] ? React.createElement(mapTypesToComponents[section.type], {...section.details}) : ''}
        </section>
      )}
      <section className="section readFull ">
        <FadeIn className="text center">
          <Typography className="topText" variant="h1" color="#fff" fontSize="48px" text="Read complete case study"/>
          <Button variant="inverted" name="Download Case Study"/>
        </FadeIn>
      </section>
    </CaseStudiesStyles>
  );
}

CaseStudies.propTypes = {};

export default memo(CaseStudies);