import { Collection } from 'tinacms'

const Success: Collection = {
    name: "success",
    label: "Success",
    path: "content/german/success",
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
            type: "image",
            name: "image",
            label: "Image",
            required: true,
        },
        {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
        },
        {
            type: "string",
            name: "category",
            label: "Category",
            list: true,
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default Success;