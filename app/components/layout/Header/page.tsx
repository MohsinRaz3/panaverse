import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import panalogo from '../../../../public/panalogo.png'

export default function page() {
    return (

        <header className='flex flex-wrap justify-between items-center px-2 min-[644px]:bg-slate-200 rounded-full  py-2 my-5 w-11/12 sticky mx-auto top-0'>
            <Link href='#'> <Image className=' inline h-15 w-20' src={panalogo} alt='logo' /></Link>

            <ul className='w-[300px] text-sm min-[644px]:text-lg flex justify-center items-center space-x-3 sm:gap-x-15 order-last my-4'>
                <li> <Link href='#' className='hover:text-red-700'>Home</Link></li>
                <li> <Link href='#' className='hover:text-red-700'>About us</Link></li>
                <li> <Link href='#' className='hover:text-red-700'>Syllabus</Link></li>
                <li> <Link href='#' className='hover:text-red-700'>Explore</Link></li>
            </ul>

            <span className='text-sm text-white text-right bg-red-700 hover:bg-red-800 rounded-full px-3 py-2 flex shrink-0 min-[530px]:order-last '>
                <Link href='#' className='font-semibold'> Apply Now</Link>
            </span>

        </header>

    )
}
