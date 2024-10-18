import Link from 'next/link'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const navigation = {
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: FaFacebook
        },
        {
            name: 'Instagram',
            href: '#',
            icon: FaInstagram
        },
        {
            name: 'Twitter',
            href: '#',
            icon: FaTwitter
        },
        {
            name: 'Email',
            href: '#',
            icon: FaEnvelope
        },
        {
            name: 'YouTube',
            href: '#',
            icon: FaYoutube
        },
    ],
}

export default function SocialLinks() {
    return (
        <div className='bg-indigo-600 p-3 rounded-tr rounded-br  bottom-1/4 left-0 fixed cursor-pointer'>
            <div className="flex flex-col gap-4">
                {navigation.social.map((item) => (
                    <Link key={item.name} href={item.href} className="text-gray-100 hover:text-gray-300">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-5 w-5 object-fit" aria-hidden="true" />
                    </Link>
                ))}
            </div>
        </div>
    )
}
