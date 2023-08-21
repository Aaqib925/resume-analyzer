import React from 'react';
import { LandingWrapper } from './Landing.style';
import Layout from 'layout/Layout';
import { Typography } from 'antd';

const { Title } = Typography;

const LandingPage: React.FC<{}> = () => {
  return (
    <Layout>
      <LandingWrapper>
        <div id="home-left">
          <Title>AI Resume Analyzer using NLP</Title>
          <p>
            FYDP CSIT Final Year
          </p>
        </div>
       
      </LandingWrapper>
    </Layout>
  );
};
export default LandingPage;
