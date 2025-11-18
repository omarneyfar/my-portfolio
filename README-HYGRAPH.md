# Hygraph Setup Instructions

## 🚀 Quick Setup

### ✅ Status: Schema Created Successfully

All Hygraph models have been successfully created using the Management API SDK!
2. Navigate to **Project Settings** → **API Access**
3. Create a **Management API Token**
4. Copy the token

### 3. Set Environment Variables
Create `.env.local` file:
```env
# Management API Token (for creating models)
HYGRAPH_MANAGEMENT_TOKEN=your-management-token-here

# Content API Token (for fetching content)
HYGRAPH_CONTENT_TOKEN=your-content-token-here

# Your existing content API endpoint
HYGRAPH_URL=https://us-west-2.cdn.hygraph.com/content/cmi29k77t01lj07w347i98eh0/master
```

### 4. Create Models Automatically
```bash
npm run schema:create
```

This will create:
- ✅ PersonalInfo model
- ✅ SocialLink model  
- ✅ Project model
- ✅ Technology model

### 5. Add Content in Hygraph Dashboard
1. Go to your Hygraph project
2. Click **Content** in the sidebar
3. Add your personal info, skills, projects, etc.

## 📋 Models Created

### PersonalInfo
- name, title, subtitle, description, location
- profileImage (Asset)
- socialLinks (relation to SocialLink)

### Project  
- slug, title, description, longDescription
- featured, year, client, category
- liveUrl, githubUrl, images (Assets)
- tags, order

### Technology
- name, icon, category, proficiency
- description

### SocialLink
- platform (enum: GITHUB, LINKEDIN, etc.)
- url, icon, isVisible

## 🔧 Manual Setup (Optional)

If the script doesn't work, you can:

1. **Import Schema Manually**
   - Copy schema from `HYGRAPH_SCHEMA.md`
   - Go to Hygraph → Schema → Import
   - Paste and confirm

2. **Create Models One by One**
   - Use Hygraph UI to create each model
   - Follow the field definitions in the schema

## 🛠️ Next Steps

1. **Update Components**: Replace static data with GraphQL queries
2. **Add Content**: Fill your models with actual portfolio content
3. **Test**: Run `npm run dev` to see content loaded from Hygraph

## 🐛 Troubleshooting

### Token Issues
- Make sure you're using **Management API Token** (not Content API Token)
- Token should have **Admin** or **Owner** permissions

### Script Errors
- Check your internet connection
- Verify token is correct
- Try running the script again

### Model Creation Fails
- Check if models already exist
- Delete existing models and retry
- Use manual import method

## 📞 Support

If you need help:
1. Check the [Hygraph Documentation](https://hygraph.com/docs)
2. Review the error messages in the script output
3. Use the manual setup method as fallback
