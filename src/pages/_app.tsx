import React from 'react';
import Navbar from '@/components/ui/navbar';
import CustomProvider from '@/state/cutomeProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Navbar>
      <CustomProvider>
        <Component {...pageProps} />
      </CustomProvider>
    </Navbar>
  );
}
