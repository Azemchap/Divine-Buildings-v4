import { Rule } from "sanity";

export const plans = {
    type: "document",
    title: "Plans",
    name: "plan",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Title",
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule: Rule) => Rule.required().error('Required').max(200).warning('Description should be under 200 characters.'),
        },
        {
            name: 'category',
            title: "Category (you can select multiple)",
            type: 'array',
            of: [
                { type: "reference", to: [{ type: 'category' }] }
            ],
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
        {
            name: "rating",
            title: "Rating",
            type: "number",
            validation: (Rule: Rule) =>
                Rule.required()
                    .integer() // Ensure the value is an integer
                    .min(1)    // Minimum value of 1
                    .max(5)    // Maximum value of 5
                    .error('Rating must be an integer between 1 and 5.')
                    .error('Required')
        },
        {
            name: "numReview",
            title: "Reviews",
            type: "number",
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
        {
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString()
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid',
            },
        },
        {
            name: "body",
            title: "Content",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: 'image',
                    fields: [{ type: 'text', name: 'alt', title: 'Alt' }]
                }
            ],
            validation: (Rule: Rule) => Rule.required().error('Required')
        },
    ],
};

