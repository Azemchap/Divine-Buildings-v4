
import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Carousel from './Carousel'

export default function Hero() {
    return (
        <div className="bg-hero relative px-4 py-16 sm:py-32 sm:px-6 xl:py-40">
            <video className='bg-video min-h-full' autoPlay loop muted width={2400} height={2400} >
                <source src="/images/istock.mp4" width={2400} height={2400} />
            </video>

            <div className='overview'></div>


            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row ">
                <div className="pb-8 lg:w-2/3">
                    <main className=" md:mt-0 pr-4">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-3xl tracking-tight font-extrabold text-gray-50 sm:text-3xl lg:text-5xl lowercase">
                                <span className=" ">buy, explore and discover high quality </span>
                                <span className="text-indigo-700">Construction drawings and House Plans</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                                Planning and executing your building project with tested and trusted hands is important if you want value for your money. we are the first and the best website to offer you high quality stock house plans and designs for your building projects. Thank You.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        href="/plans"
                                        className="group w-full flex gap-2 items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:px-10"
                                    >
                                        View plans <ArrowRightIcon className='w-4 transition-all group-hover:translate-x-1 mt-1 opacity-75' />
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        href="/about"
                                        className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:px-10"
                                    >
                                        Learn more..
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className='flex items-center lg:w-3/5'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}
