import "../styles/globals.scss";

import Layout from "../components/Layout";
// import RootProvider from "../components/RootProvider";

function MyApp({ Component, pageProps }) {
  return (
    // <RootProvider pageProps={pageProps}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </RootProvider>
  );
}

export default MyApp;
