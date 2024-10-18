'use client'

import Image from 'next/image'
// import { ChevronLeftIcon } from '@heroicons/react/outline'
// import AddToCart from '../../../components/AddToCart'
import { Disclosure, Tab } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import Link from "next/link"
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'
import PlanRating from '../../../../components/PlanRating'
import PlanItem from '../../../../components/PlanItem'
import { data } from '@/utils/data'
import { CheckCircle } from 'lucide-react'
// import { data } from '../../../utils/data'



export default function PanDetailPage({ params: { id } }) {
  const plan = data.plans.find((x) => x.id === id)

  const { plans } = data

  if (!plan) {
    return <div>Plan Not Found</div>
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6  lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className=" mt-6 w-full max-w-2xl mx-auto block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {plan.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"

                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden ">
                          {/* <Link href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" className='absolute bg-rose-600 z-40 w-12 h-6 top-4 left-2'>
                          </Link> */}
                          <Image src={image.src} alt="" className="w-full h-full object-center object-cover" width={1200}
                            height={1200} />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {plan.images.map((image) => (
                <Tab.Panel key={image.id}>
                  {/* <Link href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" className='absolute bg-rose-600 z-40 w-12 h-6 top-4 left-2'>
                  </Link> */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-center object-cover rounded-lg"
                    width={1200}
                    height={1200}
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* plan info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{plan.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">plan information</h2>
              <p className="text-3xl text-gray-900"> ${plan.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <PlanRating rate={plan.rating} count={plan.numReviews} />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="text-base text-gray-700 space-y-6">{plan.description}</div>
            </div>

            <form className="mt-6">
              <div className="mt-10 flex gap-4 flex-col sm:flex-row">
                <Link href="tel:+237651327377"
                  className=" flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-2 justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full flex gap-2 items-center"
                >
                  <FaPhone /> Contact seller
                </Link>
                <Link href="https://wa.me/+237651327377 "
                  className=" flex-1 bg-none border border-indigo-700 rounded-md py-3 px-2 justify-center text-base font-medium text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full flex gap-2 items-center"
                >
                  <FaWhatsapp /> Chat on Whatsapp
                </Link>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                {plan.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                            <span
                              className={classNames(open ? 'text-indigo-600' : 'text-gray-600', 'text-lg font-medium')}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                          <div>
                            {detail.items.map((item) => (
                              <span key={item} className='flex items-center gap-2 py-1'><CheckCircle className='w-4 text-indigo-500'/> {item}</span>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
          <div className="my-24 col-span-2">
            <h2 className="text-xl text-gray-800 font-extrabold tracking-tight ">
              Related plans
            </h2>
            <div className="my-6 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
              {plans.filter(p => p.category == plan.category).slice(-3).map((p, index) => (
                <PlanItem key={index} plan={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



