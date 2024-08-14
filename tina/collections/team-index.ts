import { Collection } from 'tinacms'

const TeamIndex: Collection = {
    name: "team_index",
    label: "Team Page",
    path: "content/german/team",
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
            name: "teamimage",
            label: "Team Image",
            required: true
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default TeamIndex;