
import Plans from '@/components/Plans'
import Title from '../../../components/Title'

export default function PlansPage() {
    return (
        <section className='bg-gray-200 p-4'>
            <div className='container mx-auto '>
                <Title title='All plans' links/>
                <Plans />
            </div>
        </section>
    )
}
