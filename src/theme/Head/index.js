import React from 'react';
import Head from '@docusaurus/Head';

export default function CustomHead(props) {
  return (
    <>
      <Head {...props} />
      <Head>
        <script async src="https://va.vercel-scripts.com/v1/script.js" data-endpoint="https://va.vercel-scripts.com/v1/script.js"></script>
      </Head>
    </>
  );
}