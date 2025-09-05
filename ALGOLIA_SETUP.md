# Algolia Search Setup Guide

## 🎯 Quick Setup Steps

### 1. Access Algolia Dashboard
- Go to: https://www.algolia.com/dashboard
- Login with your credentials
- Select Application ID: `02AH4INZGM`

### 2. Check/Create Index
- Go to **Search** → **Indices**
- Look for an index named `pages`
- If it doesn't exist, click **Create Index** and name it `pages`

### 3. Get Your Write API Key
- Go to **API Keys** in the dashboard
- Copy your **Admin API Key** (this is your write key)
- Update the upload script with this key

### 4. Upload Your Content

#### Option A: Use the Upload Script
1. Update the Write API Key in `scripts/upload-to-algolia.js` (line 9)
2. Install Algolia (if not already): `npm install algoliasearch`
3. Run: `node scripts/upload-to-algolia.js`

#### Option B: Manual Upload via Dashboard
- Go to your `pages` index
- Click **Upload JSON**
- Copy the JSON content from the script and paste it

### 5. Configure Index Settings
In the Algolia Dashboard for your `pages` index:

**Searchable Attributes** (in order of importance):
1. `title`
2. `content`
3. `keywords`
4. `brand`
5. `type`

**Facets** (for filtering):
- `type`
- `brand`
- `categories`

### 6. Test the Search
- Use the **Browse** tab in your index to verify data is uploaded
- Use the **Search Preview** to test queries

### 7. Enable Algolia in Code
Once the index is set up and populated:
1. Go to `app/components/Search.tsx`
2. Uncomment the Algolia search code (lines 51-66)
3. Comment out the fallback error line (line 69)
4. Test locally then deploy

## 🔧 Your Current Configuration

**Application ID**: `02AH4INZGM`
**Search API Key**: `aa414ecd747f987b896d2041ccafe33b`
**Index Name**: `pages`

## 📝 Content Structure

Each search item should have this structure:
```json
{
  "objectID": "unique-id",
  "title": "Page Title",
  "content": "Description/content",
  "path": "/url-path",
  "type": "Paddle Review|Guide|Page|Comparison",
  "brand": "Brand Name (if applicable)",
  "categories": ["category1", "category2"],
  "keywords": ["keyword1", "keyword2"]
}
```

## 🐛 Troubleshooting

**Index not found (404)**: 
- Check index name matches exactly: `pages`
- Verify index exists in dashboard

**Permission denied**:
- Verify Write API Key is correct
- Check API key has write permissions

**No results**:
- Check data uploaded successfully
- Verify searchable attributes configured
- Test with simple queries first

## 🚀 Next Steps After Setup

1. **Regular Updates**: Set up automation to sync new content
2. **Analytics**: Monitor search performance in Algolia dashboard
3. **Refinement**: Adjust rankings and filters based on usage
4. **A/B Testing**: Test different search configurations