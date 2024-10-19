import PlanItem from "@/components/PlanItem"
import Title from "@/components/Title"
import { client } from "@/sanity/lib/client"
import { PlanInterface } from "@/utils/interface"

interface Params {
  params: {
    slug: string
  }
}

async function getPlansByCategory(category: string) {
  const query =
    ` *[_type == "plan" && references(*[_type == "category" && slug.current == "${category}"]._id)] {
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
      }`

  const data = await client.fetch(query)
  return data
}


export const revalidate = 60;

export default async function page({ params }: Params) {

  // const plans: Array<PlanInterface> = await getPlansByCategory()
  const plans: Array<PlanInterface> = await getPlansByCategory(params.slug)
  console.log(plans)
  return (
    <section className=''>
      <div className='container mx-auto p-4 '>
        <Title title={`#${params?.slug}`} links />
        <div className=" grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
          {plans?.length > 0 && plans.map((plan) => (
            <PlanItem key={plan._id} plan={plan} />
          ))}
        </div>
      </div>
    </section>

  )
}
