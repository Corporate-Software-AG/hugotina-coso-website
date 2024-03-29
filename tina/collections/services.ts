import { Collection } from 'tinacms'

const Service: Collection = {
    name: "service",
    label: "Services",
    path: "content/german/services",
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default Service;