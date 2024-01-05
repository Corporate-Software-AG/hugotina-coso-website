import { Collection } from 'tinacms'

const About: Collection = {
    name: "about",
    label: "About",
    path: "content/german/about",
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
            type: "object",
            name: "why",
            label: "Why",
            required: true,
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                    isTitle: true,
                },
                {
                    type: "string",
                    name: "content",
                    label: "Content",
                    required: true,
                },
                {
                    type: "image",
                    name: "image",
                    label: "Image",
                    required: true,
                },
            ]
        },
        {
            type: "object",
            name: "what",
            label: "What",
            required: true,
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                    isTitle: true,
                },
                {
                    type: "string",
                    name: "content",
                    label: "Content",
                    required: true,
                },
                {
                    type: "image",
                    name: "image",
                    label: "Image",
                    required: true,
                },
            ]
        },
        {
            type: "object",
            name: "funfacts",
            label: "Funfacts",
            required: true,
            fields: [
                {
                    type: "object",
                    name: "funfacts_item",
                    label: "Items",
                    required: true,
                    list: true,
                    fields: [
                        {
                            type: "string",
                            name: "name",
                            label: "Name",
                            required: true,
                            isTitle: true,
                        },
                        {
                            type: "string",
                            name: "count",
                            label: "Count",
                            required: true,
                        },
                        {
                            type: "string",
                            name: "extension",
                            label: "Extension",
                            required: false,
                        },

                    ]
                },
            ]
        },
        {
            type: "object",
            name: "philo",
            label: "Philosophy",
            required: true,
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
                    type: "boolean",
                    name: "enable",
                    label: "Enable",
                    required: true,
                },
                {
                    type: "object",
                    name: "item",
                    label: "Items",
                    required: true,
                    list: true,
                    fields: [
                        {
                            type: "string",
                            name: "name",
                            label: "Name",
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
                        },
                    ]
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
export default About;