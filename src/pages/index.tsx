import * as React from 'react';

import Layout from '../components/layout';

import hero from '../static/hero.png';

export default () => (
  <Layout wrap={false}>
    <div
      style={{
        height: '90vh',
        backgroundImage: `url(${hero})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '120%',
        backgroundPosition: 'center',
      }}
    />
  </Layout>
);
