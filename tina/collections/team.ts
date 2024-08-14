import { Collection } from 'tinacms'

const Team: Collection = {
    name: "team",
    label: "Team",
    path: "content/german/team",
    match: {
        exclude: "_index",
    },
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
        },
        {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
        },
        {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
        },
        {
            type: "string",
            name: "certifications",
            label: "Certifications",
            list: true,
        },
        {
            type: "string",
            name: "job_title",
            label: "Job Title",
            required: false,
        },
        {
            type: "object",
            name: "social",
            label: "Socials",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                    required: true,
                },
                {
                    type: "string",
                    name: "link",
                    label: "Link",
                    required: true,
                }
            ],
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        }
    ],
}
export default Team;