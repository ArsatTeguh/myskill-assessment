import React from 'react';
import MainForm from '@/components/form/main';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <MainForm />
    </main>
  );
}
