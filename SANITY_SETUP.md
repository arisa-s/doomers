# Sanity CMS Setup Guide

This project now includes Sanity CMS integration for managing content dynamically.

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Getting Started with Sanity

### 1. Create a Sanity Project

```bash
# Install Sanity CLI globally if you haven't already
npm install -g @sanity/cli

# Create a new Sanity project (or use existing one)
sanity init

# Follow the prompts to create your project
# Make note of your Project ID and Dataset name
```

### 2. Configure Environment Variables

After creating your Sanity project:

1. Copy your Project ID from the Sanity dashboard
2. Add the environment variables to `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

### 3. Start the Development Server

```bash
# Start the Next.js development server
npm run dev

# In another terminal, start the Sanity Studio
npm run studio
```

### 4. Access Sanity Studio

Once both servers are running:

- **Next.js App**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

## Content Types

The project includes three main content types:

### Cast Members

- Actor name
- Character name
- Biography
- Initials
- Profile color
- Profile image (optional)
- Display order

### Press Quotes

- Publication name
- Quote text
- Background color
- Text color
- Publication link
- Display order

### Reading List Items

- Type (Talk, Book, Article)
- Title
- Author/Speaker
- Description
- Link (optional)
- Link text (e.g., "Watch →", "Read →")
- Category (Good Talks, Good Books, Good Articles)
- Display order

## Adding Content

1. Go to http://localhost:3000/studio
2. Click on the content type you want to add
3. Fill in the required fields
4. Publish the content
5. The changes will appear on your website immediately

## Fallback Data

If Sanity is unavailable, the application will fall back to hardcoded dummy data to ensure the site remains functional.

## Deployment

When deploying to production:

1. Make sure your environment variables are set in your hosting platform
2. Ensure your Sanity project is configured for production
3. Update CORS settings in your Sanity project to allow your production domain

## Troubleshooting

- **"Project ID not found"**: Check your environment variables
- **CORS errors**: Add your domain to Sanity project CORS settings
- **Content not loading**: Check browser console for API errors
- **Studio not loading**: Ensure all dependencies are installed correctly
