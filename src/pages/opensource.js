import React from 'react';
import Layout from '../components/Layout';
import OpenSourceProjects from '../sections/OpenSourceProjects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <OpenSourceProjects />
    <Footer />
  </Layout>
);

export default IndexPage;
