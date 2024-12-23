import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { ClerkLoaded, ClerkProvider } from '@clerk/nextjs';
import { poppins } from '@/app/fonts/poppins';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${poppins.variable} antialiased`}>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
