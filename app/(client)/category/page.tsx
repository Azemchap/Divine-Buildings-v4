import Categories from '@/components/Categories'
import Title from '@/components/Title'
import React from 'react'

export default function page() {
  return (
    <section className=''>
      <div className='container mx-auto p-4 '>
        <Title title='All Categories' />
        <div className='pb-48 bg-indigo-50 rounded p-6'>
          <Categories />
        </div>
      </div>
    </section>
  )
}
