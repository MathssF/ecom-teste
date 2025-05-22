'use client';

import React from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/header.components';

// import './globals.css'; // Se você tiver um global CSS opcional

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
