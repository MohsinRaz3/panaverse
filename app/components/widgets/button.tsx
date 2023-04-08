import React from 'react'
import Link from 'next/link'
export default function PrimaryButton({ children, href, color }: any) {
    return (
        <>
            <Link href={href}>
                <button className={` bg-red-700 text-white p-2 my-4 rounded-full hover:shadow-lg hover:scale-105 duration-300`}>
                    {children}
                </button>
            </Link>
        </>
    )
}



