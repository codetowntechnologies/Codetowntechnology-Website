import Head from 'next/head';
import React from 'react';
import Contact from '../component/contact';
import Header from '../component/header';
import withWebLayout from '../component/layout/web/withWebLayout';
import Process from '../component/process';
import Services from '../component/services';
import Technologies from '../component/technologies';
import Technology from '../component/technology';
import Testimonials from '../component/testimonial';

const Index = () => {
  return (
    <>
      <Head>
        <title>Codetown - Technologies</title>
      </Head>
      <Header />
      <Technologies />
      <Services />
      <Technology />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
};

export default withWebLayout(Index);