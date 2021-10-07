import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

type NextPageWithLayout<T = void> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type { NextPageWithLayout, AppPropsWithLayout };
