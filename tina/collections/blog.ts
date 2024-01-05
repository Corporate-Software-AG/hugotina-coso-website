import { Collection } from 'tinacms'

const Blog: Collection = {
    name: "blog",
    label: "Blog",
    path: "content/german/blog",
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
            type: "datetime",
            name: "date",
            label: "Date",
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
            name: "category",
            label: "Category",
            required: true,
            list: true
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default Blog;