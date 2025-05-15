import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-cyan-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 w-full text-gray-200 text-center py-4'>
            <p className='text-sm'>Copyright &copy; {currentYear} Support Hub</p>
        </div>
    </footer>
  )
}

export default Footer