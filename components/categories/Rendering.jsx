

import React from 'react'
import { video } from '../../utils/video'
import VideoItem from '../VideoItem'



const Rendering = () => {
    const { videos } = video

    // console.log(videos)

    return (
        <div className="container mx-auto mt-6 lg:py-8">
            <div className=" grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">

                {/* {(!videos) {
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl text-gray-800 bg-rose-100 font-extrabold tracking-tight  sm:text-4xl my-4 p-4">
                            No video found
                        </h2>
                    </div>}
                } */}

                {videos.map((video) => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </div>
        </div >
    )
}

export default Rendering