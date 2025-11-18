require("dotenv").config({ path: ".env.local" });

const {
  Client,
  SimpleFieldType,
  RelationalFieldType,
  EnumerableFieldType,
  VisibilityTypes,
} = require("@hygraph/management-sdk");

const AUTH_TOKEN = process.env.HYGRAPH_MANAGEMENT_TOKEN;
const MANAGEMENT_ENDPOINT = process.env.HYGRAPH_MANAGEMENT_ENDPOINT;
const PROJECT_ID = process.env.HYGRAPH_PROJECT_ID;

if (!AUTH_TOKEN) throw new Error("Missing HYGRAPH_MANAGEMENT_TOKEN");
if (!MANAGEMENT_ENDPOINT) throw new Error("Missing HYGRAPH_MANAGEMENT_ENDPOINT");
if (!PROJECT_ID) throw new Error("Missing HYGRAPH_PROJECT_ID");

console.log("🚀 Starting Hygraph schema migration...");

async function runMigration() {
  const client = new Client({
    authToken: AUTH_TOKEN,
    endpoint: MANAGEMENT_ENDPOINT,
    projectId: PROJECT_ID,
  });

  /*
  |--------------------------------------------------------------------------
  | PERSONAL INFO MODEL
  |--------------------------------------------------------------------------
  */
  client.createModel({
    apiId: "personalInfo",
    apiIdPlural: "personalInfos",
    displayName: "Personal Info",
  });

  client.createSimpleField({
    parentApiId: "personalInfo",
    type: SimpleFieldType.String,
    apiId: "name",
    displayName: "Name",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "personalInfo",
    type: SimpleFieldType.String,
    apiId: "title",
    displayName: "Title",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "personalInfo",
    type: SimpleFieldType.String,
    apiId: "subtitle",
    displayName: "Subtitle",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "personalInfo",
    type: SimpleFieldType.RichText,
    apiId: "description",
    displayName: "Description",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "personalInfo",
    type: SimpleFieldType.String,
    apiId: "location",
    displayName: "Location",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createRelationalField({
    parentApiId: "personalInfo",
    type: RelationalFieldType.Asset,
    apiId: "profileImage",
    displayName: "Profile Image",
    visibility: VisibilityTypes.ReadWrite,
  });

  /*
  |--------------------------------------------------------------------------
  | SOCIAL LINK MODEL
  |--------------------------------------------------------------------------
  */
  client.createModel({
    apiId: "socialLink",
    apiIdPlural: "socialLinks",
    displayName: "Social Link",
  });

  client.createEnumerableField({
    parentApiId: "socialLink",
    apiId: "platform",
    displayName: "Platform",
    isRequired: true,
    enumerationValues: ["GITHUB", "LINKEDIN", "TWITTER", "EMAIL", "INSTAGRAM"],
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "socialLink",
    type: SimpleFieldType.String,
    apiId: "url",
    displayName: "URL",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "socialLink",
    type: SimpleFieldType.String,
    apiId: "icon",
    displayName: "Icon",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "socialLink",
    type: SimpleFieldType.Boolean,
    apiId: "isVisible",
    displayName: "Is Visible",
    defaultValue: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  /*
  |--------------------------------------------------------------------------
  | PROJECT MODEL
  |--------------------------------------------------------------------------
  */
  client.createModel({
    apiId: "project",
    apiIdPlural: "projects",
    displayName: "Project",
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.String,
    apiId: "slug",
    displayName: "Slug",
    isRequired: true,
    isUnique: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.String,
    apiId: "title",
    displayName: "Title",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.RichText,
    apiId: "description",
    displayName: "Description",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.RichText,
    apiId: "longDescription",
    displayName: "Long Description",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.RichText,
    apiId: "excerpt",
    displayName: "Excerpt",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.Boolean,
    apiId: "featured",
    displayName: "Featured",
    defaultValue: false,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.Int,
    apiId: "year",
    displayName: "Year",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.String,
    apiId: "client",
    displayName: "Client",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createEnumerableField({
    parentApiId: "project",
    apiId: "category",
    displayName: "Category",
    isRequired: true,
    enumerationValues: [
      "FREELANCE",
      "TEKAB",
      "SOFFLEX",
      "PERSONAL",
      "OPEN_SOURCE",
    ],
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.String,
    apiId: "liveUrl",
    displayName: "Live URL",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.String,
    apiId: "githubUrl",
    displayName: "GitHub URL",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createRelationalField({
    parentApiId: "project",
    type: RelationalFieldType.Asset,
    apiId: "images",
    displayName: "Images",
    isList: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.String,
    apiId: "tags",
    displayName: "Tags",
    isList: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "project",
    type: SimpleFieldType.Int,
    apiId: "order",
    displayName: "Order",
    defaultValue: 0,
    visibility: VisibilityTypes.ReadWrite,
  });

  /*
  |--------------------------------------------------------------------------
  | TECHNOLOGY MODEL
  |--------------------------------------------------------------------------
  */
  client.createModel({
    apiId: "technology",
    apiIdPlural: "technologies",
    displayName: "Technology",
  });

  client.createSimpleField({
    parentApiId: "technology",
    type: SimpleFieldType.String,
    apiId: "name",
    displayName: "Name",
    isRequired: true,
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createSimpleField({
    parentApiId: "technology",
    type: SimpleFieldType.String,
    apiId: "icon",
    displayName: "Icon",
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createEnumerableField({
    parentApiId: "technology",
    apiId: "category",
    displayName: "Category",
    isRequired: true,
    enumerationValues: [
      "FRONTEND",
      "BACKEND",
      "DATABASE",
      "DEVOPS",
      "MOBILE",
      "AI_ML",
      "DESIGN",
      "TESTING",
    ],
    visibility: VisibilityTypes.ReadWrite,
  });

  client.createEnumerableField({
    parentApiId: "technology",
    apiId: "proficiency",
    displayName: "Proficiency",
    isRequired: true,
    enumerationValues: [
      "BEGINNER",
      "INTERMEDIATE",
      "ADVANCED",
      "EXPERT",
    ],
    visibility: VisibilityTypes.ReadWrite,
  });

//   client.createSimpleField({
//     parentApiId: "technology",
//     type: SimpleFieldType.RichText,
//     apiId: "description",
//     displayName: "Description",
//     visibility: VisibilityTypes.ReadWrite,
//   });
 
  console.log("📤 Submitting migration...");
  const changes =  client.dryRun();
  console.log("Dry run result:", changes);
  const result = await client.run(true)
  console.log(result)

  if (result.errors) {
    console.error("❌ Migration failed:", result.errors);
  } else {
    console.log("✅ Migration completed successfully!");
  }
}

runMigration().catch((err) => console.error("❌ Error:", err));
