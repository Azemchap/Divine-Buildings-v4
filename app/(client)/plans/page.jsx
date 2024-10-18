// @ts-nocheck
import React from 'react'
import Plans from '../../components/Plans'

export default function PlansPage() {
    return (
        <div className='py-16'>
            <h2 className=" container mx-auto px-4 text-xl text-gray-700 font-extrabold tracking-tight  sm:text-4xl mb-8 lg:px-6">
                All plans
            </h2>
            <Plans />
        </div>
    )
}
