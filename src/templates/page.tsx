import * as React from 'react';

import Layout from '../components/layout';

interface Props {
  pageContext: {
    heading: string;
    body: string;
  };
}

export default ({ pageContext: { heading, body } }: Props) => (
  <Layout>
    <h1>{heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </Layout>
);
