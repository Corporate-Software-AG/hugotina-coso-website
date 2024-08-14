import { Collection } from 'tinacms'

const Job: Collection = {
    name: "job",
    label: "Jobs",
    path: "content/german/job",
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
            type: "string",
            name: "description",
            label: "Description",
            required: true,
        }
    ],
}
export default Job;