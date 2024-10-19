

// import { ChevronLeftIcon } from '@heroicons/react/outline'
// import AddToCart from '../../../components/AddToCart'
import { client } from '@/sanity/lib/client'
import { PlanInterface } from '@/utils/interface'
import Link from "next/link"
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'
import ImageTabGroup from '@/components/ImageTabGroup'
import PlanRating from '@/components/PlanRating'
import ItemNotFound from '@/components/ItemNotFound'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface Params {
  params: {
    slug: string
  }
}

async function getPlan(slug: string) {
  const query =
    ` *[_type == "plan" && slug.current == "${slug}"][0] {
          name,
          slug,
          description,
          category[]->{
          _id,
          slug,
          name
          },
          price,
          rating,
          numReview,
          createdAt,
          images,
          body,
      }`

  const data = await client.fetch(query)
  return data
}


export const revalidate = 60;

export default async function PlanDetailsPage({ params }: Params) {
  const plan: PlanInterface = await getPlan(params?.slug)
  console.log(plan)

  if (!plan) {
    return <ItemNotFound title='Plan not found' />
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 ">

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image selector */}
          <ImageTabGroup plan={plan} />

          {/* plan info */}
          <div className="mt-16 px-4 sm:px-0 lg:mt-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">{plan?.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">plan information</h2>
              <p className="text-3xl text-gray-900"> ${plan.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <PlanRating rate={plan.rating} count={plan.numReview} />
              </div>
            </div>

            <p className='text-xs text-gray-500 my-2'>{new Date(plan?.createdAt).toDateString()}</p>
            <div className='flex items-center flex-wrap gap-2'>
              {plan?.category.map((cat) => (
                <Link key={cat?._id} href={`/category/${cat?.slug.current}`} className='lowercase p-[2px] px-3 rounded-full border text-xs border-indigo-400 text-indigo-700'>#{cat?.name}</Link>
              ))}
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

            <section aria-labelledby="details-heading" className="mt-16">
              <h2 id="details-heading" className="text-indigo-600/90 mb-4 font-bold">
                Additional details
              </h2>

              <div className="border-t px-4 divide-gray-200 text-gray-900 text-justify prose-headings:my-4 prose-headings:text-2xl prose-li:list-disc prose-li:ml-6 prose-li:leading-7 prose-p:my-4">
                <PortableText
                  value={plan?.body}
                  components={myPortableTextComponents}
                />
              </div>
            </section>
          </div>
        </div>
        <div className="my-24 col-span-2">
          <h2 className="text-xl text-gray-800 font-extrabold tracking-tight ">
            Related plans
          </h2>
          {/* <div className="my-6 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
              {plans.filter(p => p.category == plan.category).slice(-3).map((p, index) => (
                <PlanItem key={index} plan={p} />
              ))}
            </div> */}
        </div>
      </div>
    </div>
  )
}





const myPortableTextComponents = {
  types: {
    image: ({ value }) => <Image src={urlFor(value).url()} className='rounded my-6' width={1200} height={1200} alt={''} />
  },
} 