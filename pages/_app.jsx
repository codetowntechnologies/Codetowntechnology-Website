import '../styles/globals.scss';
import * as React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <div>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}
export default MyApp;
