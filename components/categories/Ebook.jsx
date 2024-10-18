

import React from 'react'
import { data } from '../../utils/data'
import PlanItem from '../PlanItem'


const Ebook = () => {
  const { plans } = data

  return (
    <div className="container mx-auto mt-6 lg:py-8">
      <div className=" grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
        {plans.filter(plan => plan.category == 'ebook').map((plan) => (
          <>
            {(!plan) ?
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl text-gray-800 bg-rose-100 font-extrabold tracking-tight  sm:text-4xl my-4 p-4">
                  No plan found
                </h2>
              </div >
              :
              <PlanItem key={plan.id} plan={plan} />}
          </>
        ))}
      </div>
    </div >
  )
}

export default Ebook