// @ts-nocheck
"use client"
import ReactPlayer from "react-player";
import Link from 'next/link'

export default function VideoItem({ video }) {

    return (
        <Link href={`/renderings/${video.id}`} className=' overflow-hidden'>
            <div className="w-full h-72 rounded-lg overflow-hidden cursor-pointer relative">
                <ReactPlayer
                    width='100%'
                    height='100%'
                    url={video.src}
                    controls={true}
                    playing
                    loop
                    className="w-full h-full bg-gray-50 "
                    // light is usefull incase of dark mode
                    light={false}
                    // picture in picture
                    pip={true}
                    
                />
                <source src={video.src} className="w-full h-full " type="video/mp4" />
            </div>
            <div className="m-4">
                <Link
                    href={`/renderings/${video.id}`} className="block text-md font-medium text-gray-900 text-left uppercase">{video.name}</Link>
            </div>
            <div className="m-4">
                <Link
                    href={`/renderings/${video.id}`} className="block text-md text-center font-medium text-gray-900 uppercase border p-2 rounded-sm">View rendering</Link>
            </div>
        </Link>
    )
}
