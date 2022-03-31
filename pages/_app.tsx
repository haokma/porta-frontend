import { EmptyLayout } from '@/components/layouts';
import { AppPropsWithLayout } from '@/models/common';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { createEmotionCache, theme } from '../utils';
const clientSideEmotionCache = createEmotionCache();
import { axiosClient } from '../api-client';
import '../styles/index.scss';

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => axiosClient.get(url),
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            refreshWhenOffline: false,
            refreshWhenHidden: false,
            refreshInterval: 0,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
