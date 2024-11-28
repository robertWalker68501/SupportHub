import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className='flex min-h-screen w-full flex-col items-center justify-center'>
      <h1>{children}</h1>
    </section>
  );
}
