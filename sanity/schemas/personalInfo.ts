import { Rule } from "sanity";

// ./sanity/schemas/personalInfo.js
export default {
    name: 'personalInfo',
    title: 'Personal Information',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        },
        {
            name: 'companyLogo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping
            },
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule: Rule) => Rule.regex(/^\+?[1-9]\d{1,14}$/, {
                name: 'phone', // Error message
                invert: false, // Invert the regex, to allow only valid phone numbers
            }).error('Please enter a valid phone number.'),
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: Rule) => Rule.email().error('Please enter a valid email address.'),
        },
        {
            name: 'whatsapp',
            title: 'WhatsApp Number',
            type: 'string',
            validation: (Rule: Rule) => Rule.regex(/^\+?[1-9]\d{1,14}$/, {
                name: 'whatsapp', // Error message
                invert: false,
            }).error('Please enter a valid WhatsApp number.'),
        },
        {
            name: 'website',
            title: 'Website Link',
            type: 'url',
            validation: (Rule: Rule) => Rule.uri().error('Please enter a valid website URL.'),
        },
        {
            name: 'socials',
            title: 'Social Media Links',
            type: 'object',
            fields: [
                {
                    name: 'facebook',
                    title: 'Facebook',
                    type: 'url',
                },
                {
                    name: 'twitter',
                    title: 'Twitter',
                    type: 'url',
                },
                {
                    name: 'instagram',
                    title: 'Instagram',
                    type: 'url',
                },
                {
                    name: 'youtube',
                    title: 'YouTube',
                    type: 'url',
                },
            ],
        },
        {
            name: "details",
            title: "Personal Details",
            type: "array",
            of: [
                { type: "block" },
            ],
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
    ],
}