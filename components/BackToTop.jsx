"use client";


import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa6'

export default function BackToTop() {
    return (
        <Link href={'#'} className='bg-indigo-600 p-2 rounded-full inline-flex text-gray-200 bottom-6 right-4 fixed cursor-pointer'>
            <FaArrowUp />
        </Link>
    )
}
