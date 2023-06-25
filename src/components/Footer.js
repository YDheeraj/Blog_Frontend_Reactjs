
import React from 'react'
import logo from '../Images/logo.png';

const Footer = () => {
  return (
    <footer className='text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full'>
      <div className='container mx-auto flex items-center flex-col sm:flex-row py-8'>
        <a href='/' className='flex items-center justify-center md:justify-start text-gray-900'>
         <img alt="logo" src={logo} height={30} width={35}></img>
         <span className='ml-3 text-md  text-2xl font-bold text-gray-900'>QUOTS</span>
        </a>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-'>
        &copy; 2023 Quote's Blog -
            <a href='https://twitter.com/quotsblog' className='text-gray-600 ml-1' rel='noopener noreferrer' target='_blank'>
              @quot'sblog
            </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer