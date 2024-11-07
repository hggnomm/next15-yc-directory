# Sanity CMS

Sanity is a powerful, open-source, headless CMS designed for flexible content management and efficient collaboration. It's particularly suited for projects requiring frequent content updates, such as websites, blogs, and e-commerce platforms.

## Key Features

- **Real-Time Collaboration**: Enables multiple users to edit content simultaneously.
- **Headless Architecture**: Separates the backend and frontend, allowing use with any frontend technology.
- **Customizable Studio**: Sanity Studio, built with React, can be tailored to match specific project needs.
- **API-First Design**: Offers both GraphQL and REST APIs, making it a strong choice for JAMstack applications.

## Core Concepts

### Content Studio
Sanity Studio is the editing environment where content creators can manage data. The Studio is highly customizable and can be extended with plugins.

### Schemas
Schemas define the structure of your content. Written in JavaScript, schemas allow you to create custom content models, making Sanity flexible for any data structure.

### APIs
Sanity provides both GraphQL and REST APIs, enabling easy access to content and integration with various platforms and frontend frameworks.

## Example Schema

Example of a basic schema for a blog post:

```javascript
// schemas/blogPost.js
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }
  ]
}

```

![image](https://github.com/user-attachments/assets/bf7204f3-0e0a-4000-b7af-fbd44228c38d)

