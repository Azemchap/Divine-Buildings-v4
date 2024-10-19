import { PlanInterface } from '@/utils/interface'
import { client } from '../sanity/lib/client'
import PlanItem from './PlanItem'

async function getPlans() {
    const query =
        ` *[_type == "plan"] {
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

export default async function Plans() {
    const plans: PlanInterface[] = await getPlans()
    // console.log(plans)

    return (
        <section className="grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
            {plans?.length > 0 && plans.map((plan, index) => (
                <div key={index}>
                    <PlanItem plan={plan} />
                </div>
            ))}
        </section>
    )
}
