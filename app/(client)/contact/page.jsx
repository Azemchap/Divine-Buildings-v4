'use client'

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.purple,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'
// import { sendEmail } from '../../api/actions/sendEmail'

const navigation = [
    { name: 'Work', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
]
const footerNavigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

export default function ContactPage() {
    return (
        <div className="bg-white">
            <main>
                {/* Header */}
                <div className="py-16 lg:py-24 bg-white ">
                    <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:container lg:px-8">
                        <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-indigo-700 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                            Get in touch
                        </h1>
                        <p className="mt-2 max-w-3xl mx-auto text-md leading-normal text-gray-500 text-center">
                            Feel free to get to us via the means provided below
                        </p>

                        <p className="mt-6 max-w-3xl mx-auto flex justify-center flex-wrap gap-4 text-xl text-center leading-normal text-gray-500 ">
                            <Link href="tel:+237651327377" > <span className='underline flex gap-2 font-semibold text-sm items-center'> <FaPhone /> Call : (+237) 651 327 377 </span>
                            </Link>
                            <Link href="https://wa.me/+237651327377 "> <span className='underline flex gap-1 font-semibold text-sm items-center'><FaWhatsapp /> Whatsapp </span>
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="relative container mx-auto bg-white">
                    <div className="">
                        <div className="lg:h-96">
                            <Image
                                className="h-full w-full object-cover "
                                src="/images/hd04.jpg"
                                alt="img"
                                width={4800}
                                height={4800}
                                quality={90}
                            />
                        </div>
                    </div>

                    {/* <div className="relative p-4 py-12 lg:container lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:pr-8">
                            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0 lg:pl-16">
                                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-700">Let’s work together</h2>
                                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                                    We’d love to hear from you! Send us a message using the form below, or email us. We’ll get back to you as soon as possible.
                                </p>


                                
                                <form action={async (formData) => {
                                    await sendEmail(formData)
                                }} method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <div className="mt-1">
                                            <input required
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <div className="mt-1">
                                            <input required
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input required
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                            Company
                                        </label>
                                        <div className="mt-1">
                                            <input required
                                                type="text"
                                                name="company"
                                                id="company"
                                                autoComplete="organization"
                                                className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone
                                            </label>
                                            <span id="phone-description" className="text-sm text-gray-500">
                                                Optional
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <input 
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                aria-describedby="phone-description"
                                                className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="textarea" className="block text-sm font-medium text-gray-700">
                                                How can we help you?
                                            </label>
                                            <span id="textarea-description" className="text-sm text-gray-500">
                                                Max. 500 characters
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <textarea required
                                                id="textarea"
                                                name="textarea"
                                                rows={4}
                                                className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                    <fieldset className="sm:col-span-2">
                                        <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
                                        <div className="mt-4 grid grid-cols-1 gap-y-4">
                                            <div className="flex items-center">
                                                <input required
                                                    id="budget-under-25k"
                                                    name="budget"
                                                    defaultValue="under_25k"
                                                    type="radio"
                                                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                                                />
                                                <label htmlFor="budget-under-25k" className="ml-3">
                                                    <span className="block text-sm text-gray-700">Less than $25K</span>
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input required
                                                    id="budget-25k-50k"
                                                    name="budget"
                                                    defaultValue="25k-50k"
                                                    type="radio"
                                                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                                                />
                                                <label htmlFor="budget-25k-50k" className="ml-3">
                                                    <span className="block text-sm text-gray-700">$25K – $50K</span>
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input required
                                                    id="budget-50k-100k"
                                                    name="budget"
                                                    defaultValue="50k-100k"
                                                    type="radio"
                                                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                                                />
                                                <label htmlFor="budget-50k-100k" className="ml-3">
                                                    <span className="block text-sm text-gray-700">$50K – $100K</span>
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="budget-over-100k"
                                                    name="budget"
                                                    defaultValue="over_100k"
                                                    type="radio"
                                                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                                                />
                                                <label htmlFor="budget-over-100k" className="ml-3">
                                                    <span className="block text-sm text-gray-700">$100K+</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="text-right sm:col-span-2">
                                        <button
                                            type="submit"
                                            className="primary-button font-semibold w-full"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}

                </div>
            </main>
        </div>
    )
}
