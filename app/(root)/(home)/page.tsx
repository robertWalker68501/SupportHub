import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section>
        <div className='container mt-10'>
          <h1 className='h1 mb-5'>SupportHub</h1>
          <Link
            href='/sign-in'
            className='btn-primary'
          >
            Login
          </Link>
        </div>
      </section>
    </>
  );
}
