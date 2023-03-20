import React from 'react'
import Link from 'next/link'
export default function Button({ children, href, color }: any) {
    return (
        <>
            <Link href={href}>
                <button className={` bg-green-400 `}>
                    {children}
                </button>
            </Link>
        </>
    )
}
export function Button2({ children, href, color }: any) {
    return (
        <>
            <Link href={href}>
                <button className={` bg-orange-400 `}>
                    {children}
                </button>
            </Link>
        </>
    )
}
