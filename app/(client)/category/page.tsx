import Categories from '@/components/Categories'
import Title from '@/components/Title'
import React from 'react'

export default function page() {
  return (
    <section className=''>
      <div className='container mx-auto p-4'>
        <Title title='Categories' />
        <Categories />
      </div>
    </section>
  )
}
