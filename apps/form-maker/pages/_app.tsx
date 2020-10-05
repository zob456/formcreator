import React from 'react';
import Head from 'next/head';
import './styles.css';
import { Basicform } from 'libs/test-form/src/index';

const CustomApp = () => {
  return (
    <>
      <Head>
        <title>Welcome to form-maker!</title>
      </Head>
      <div className="app">
        <main>
          <Basicform />
        </main>
      </div>
    </>
  );
};

export default CustomApp;
