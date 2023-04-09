import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import panalogo from '../../../../public/panalogo.png'
import Wrapper from '../../shared/Wrapper/page'

export default function page() {
    return (
        <header className='sticky top-0 z-10'>
            <Wrapper>
                <div className='flex flex-wrap flex-grow bg-white  justify-between items-center px-2 min-[644px]:bg-slate-200 min-[644px]:rounded-b-md  py-2 my-5 '>
                    <Link href='#'> <Image className=' inline h-15 w-20' src={panalogo} alt='logo' /></Link>

                    <ul className='w-[300px] text-sm min-[644px]:text-lg flex max-[554px]:mx-auto justify-center items-center space-x-3 sm:gap-x-15 order-last my-4'>
                        <li> <Link href='#' className='hover:text-red-700'>Home</Link></li>
                        <li> <Link href='#' className='hover:text-red-700'>About us</Link></li>
                        <li> <Link href='#' className='hover:text-red-700'>Syllabus</Link></li>
                        <li> <Link href='#' className='hover:text-red-700'>Blogs</Link></li>
                    </ul>

                    <span className='text-sm  text-white text-right bg-red-700 hover:bg-red-800 duration-300 rounded-full px-3 py-2 flex shrink-0 min-[554px]:order-last '>
                        <Link href='#' className='font-semibold text-white'> Apply Now</Link>
                    </span>

                </div>
            </Wrapper>
        </header>

    )
}
