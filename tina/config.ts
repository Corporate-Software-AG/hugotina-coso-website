import { defineConfig } from "tinacms";
import Blog from "./collections/blog";
import Service from "./collections/services";
import About from "./collections/about";
import BlogIndex from "./collections/blog-index";
import CertifiedQuality from "./collections/certified-quality";
import Team from "./collections/team";
import TeamIndex from "./collections/team-index";
import Job from "./collections/job";
import JobIndex from "./collections/job-index";
import Success from "./collections/success";
import SuccessIndex from "./collections/success-index";
import Contact from "./collections/contact";
import PrivacyPolicyImprint from "./collections/privacy-policy-imprint";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [TeamIndex, Team, BlogIndex, Blog, Success, SuccessIndex, JobIndex, Job, About, Service, CertifiedQuality, Contact, PrivacyPolicyImprint],
  },
});
