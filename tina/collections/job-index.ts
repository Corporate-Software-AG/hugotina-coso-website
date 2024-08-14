import { Collection } from 'tinacms'

const JobIndex: Collection = {
    name: "job_index",
    label: "Job Page",
    path: "content/german/job",
    match: {
        include: "_index",
    },
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
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
            type: "string",
            name: "description",
            label: "Description",
            required: true,
        },
        {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
        },
        {
            type: "object",
            name: "benifits",
            label: "Benefits",
            required: false,
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "content",
                    label: "Content",
                    required: true,
                },
                {
                    type: "object",
                    name: "item",
                    label: "Items",
                    list: true,
                    fields: [
                        {
                            type: "string",
                            name: "name",
                            label: "Name",
                            isTitle: true,
                            required: true,
                        },
                        {
                            type: "string",
                            name: "icon",
                            label: "Icon",
                            required: true,
                        },
                        {
                            type: "string",
                            name: "content",
                            label: "Content",
                            required: true,
                        }
                    ],
                }
            ],
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default JobIndex;