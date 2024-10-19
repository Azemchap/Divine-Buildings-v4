/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Ready-made plans',
        description:
            'You may choose to buy any of our plans as listed on the website.  for custom designs, you will have to talk to us for your customized needs.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Construction project',
        description:
            'We undertake the construction of your building projects. we have  qualified contractors and Architects to deliver efficiently, reliably and within the agreed upon time frame.',
        icon: ScaleIcon,
    },
    {
        name: 'Plan modifications',
        description:
            'We can modify plans to meet your requirements. you simply choose a plan and give us the changes you want. This comes at an additional cost to the standard price.',
        icon: LightningBoltIcon,
    },
]

export default function Showcase() {
    return (
        <div className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-xl mx-auto lg:container">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center">What we do</h2>
                <p className="mt-2 mb-12 text-lg text-gray-500 text-center max-w-sm mx-auto">
                    we provide high quality in-demand services to clients with construction projects.
                </p>
                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mt-4">
                    {features.map((feature) => (
                        <div key={feature.name} className='flex flex-col items-center text-center bg-indigo-50 p-4 py-8 rounded-2xl shadow-sm'>
                            <dt>
                                <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-md bg-indigo-500 text-white">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="mt-5 text-lg font-medium text-gray-900">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
