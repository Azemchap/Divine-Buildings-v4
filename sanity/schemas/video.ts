import { Rule } from "sanity";

// ./sanity/schemas/video.js
export default {
    name: 'video',
    title: 'Video Renderings',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Video Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().min(1).error('Video name is required.'),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [
                { type: "reference", to: [{ type: 'category' }] }
            ],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: Rule) => Rule.max(200).warning('Description should be under 200 characters.'),
        },
        {
            name: 'videoSrc',
            title: 'Video Source',
            type: 'file',
            options: {
                accept: 'video/*', // Restrict file types to video files
            },
            validation: (Rule: Rule) => Rule.required().error('Please upload a video file.'),
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{ type: 'block' }],
            options: {
                layout: 'normal',
            },
        },
    ],
}