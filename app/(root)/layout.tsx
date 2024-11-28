import { ReactNode } from 'react';
import Navbar from '@/components/shared/navigation/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
