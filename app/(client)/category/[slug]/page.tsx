import PlanItem from "@/components/PlanItem"
import Title from "@/components/Title"
import { client } from "@/sanity/lib/client"
import { PlanInterface } from "@/utils/interface"

interface Params {
  params: {
    slug: string
  }
}

async function getPlansByCategory(plan: string) {
  const query =
    ` *[_type == "plan" && reference(*[_type == "plan" && slug.current == "${plan}"]._id)] {
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
  const plans: PlanInterface[] = await getPlansByCategory(params.slug)
  // console.log(plans)
  return (
    <section className=''>
      <div className='container mx-auto p-4'>
        <Title title={`#${params?.slug}`} links />
        <div className='lowercase p-[2px] px-3 rounded-full border text-xs border-indigo-400 text-indigo-700'>#{params?.slug}</div>

        <div className=" grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
          {plans?.length > 0 && plans.map((plan, index) => (
            <div key={index}>
              <PlanItem plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}
