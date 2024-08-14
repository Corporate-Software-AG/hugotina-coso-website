import { Collection } from 'tinacms'

const PrivacyPolicyImprint: Collection = {
    name: "privacy_policy_imprint",
    label: "Privacy Policy Imprint",
    path: "content/german/privacy-policy-imprint",
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
}
export default PrivacyPolicyImprint;