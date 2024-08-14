import { Collection } from 'tinacms'

const CertifiedQuality: Collection = {
    name: "certified_quality",
    label: "Certified Quality",
    path: "content/german/certified-quality",
    match: {
        exclude: "_index",
    },
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
        },
        {
            type: "number",
            name: "priority",
            label: "Priority",
            required: true,
        },
        {
            type: "object",
            name: "certifications",
            label: "Certifications",
            list: true,
            required: true,
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Name",
                    required: true,
                    isTitle: true
                },
                {
                    type: "image",
                    name: "badge",
                    label: "Badge",
                    required: true,
                }
            ]
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default CertifiedQuality;