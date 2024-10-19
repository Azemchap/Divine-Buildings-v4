'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'

const images = [
    {
        id: 1,
        imgSrc: "/images/hd01.jpg",
    },
    {
        id: 2,
        imgSrc: "/images/hd03.jpg",
    },
    {
        id: 3,
        imgSrc: "/images/hd04.jpg",
    },
    {
        id: 4,
        imgSrc: "/images/hd05.jpg",
    },
    {
        id: 5,
        imgSrc: "/images/hd02.jpg",
    },
]

export default function DefaultCarousel() {
    return (
        <Carousel className="w-full mt-0 h-60 lg:h-96 justify-start object-cover ">
            {images.map((image) => (
                <Image key={image.id}
                    alt="slider image" width={2400} height={1200}
                    src={image.imgSrc} className='h-full object-cover '
                />
            ))}
        </Carousel>
    )
}


