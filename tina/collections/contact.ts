import { Collection } from 'tinacms'

const Contact: Collection = {
    name: "contact",
    label: "Contact",
    path: "content/german/contact",
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default Contact;