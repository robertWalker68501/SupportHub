import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4'>
        <Link href="/" className='text-2xl font-bold flex items-center gap-2' >
        <Image src="/assets/images/logo.svg" alt="SupportHub Logo" width={60} height={60} />
        <span>SupportHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-4'>
            <Link href="/" className='text-lg font-semibold text-gray-200 hover:text-cyan-600 transition-colors'>Home</Link>
            <Link href="/" className='text-lg font-semibold text-gray-200 hover:text-cyan-600 transition-colors'>About</Link>
            <Link href="/" className='text-lg font-semibold text-gray-200 hover:text-cyan-600 transition-colors'>Contact</Link>

            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
            <Link href="/sign-in" className='text-lg font-semibold text-gray-200 hover:text-cyan-600 transition-colors'>Login</Link>
            </SignedOut>
        </div>
    </nav>
  )
}

export default Navbar