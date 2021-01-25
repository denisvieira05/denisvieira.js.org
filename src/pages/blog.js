import React from 'react';
import Layout from '../components/Layout';
import Writing from '../sections/Writing';
import Talks from '../sections/Talks';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Writing />
    <Talks />
    <Footer />
  </Layout>
);

export default IndexPage;
