import { Collection } from "tinacms";

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
            type: "datetime",
            label: "Date",
            name: "date",
        },
        {
            type: "string",
            name: "description",
            label: "Description",
        },
        {
            type: "string",
            name: "category",
            label: "Category",
            list: true,
        },
        {
            type: "image",
            name: "image",
            label: "Image",
        },
        {
            type: "boolean",
            name: "draft",
            label: "Draft",
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ]
}
export default Blog;