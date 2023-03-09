import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import panalogo from '../../../../public/panalogo.png'

export default function page() {
    return (
        <div>
            <header className='flex justify-center items-center  m-4'>
                <Link href='#'> <Image src={panalogo} width='100' height='100' alt='logo' /></Link>

                <ul className=' flex'>
                    <li> <Link href='#'>Home</Link></li>
                    <li> <Link href='#'>About us</Link></li>
                    <li> <Link href='#'>Syllabus</Link></li>
                    <li> <Link href='#'>Explore</Link></li>
                </ul>

                <span className='flex-1 text-right'>
                    <Link href='#'> Apply Now</Link>
                </span>
            </header>
        </div>
    )
}
