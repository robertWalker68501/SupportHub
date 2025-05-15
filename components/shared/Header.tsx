import React from 'react'
import { Navbar } from './navigation/Navbar'

const Header = () => {
  return (
    <header className='bg-cyan-900 shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 w-full text-gray-200'>
            <Navbar />
        </div>
    </header>
  )
}

export default Header