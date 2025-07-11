# Ellman Group - Dynamic Content Management System

A modern website for Ellman Group with a comprehensive content management system that allows dynamic editing of all website content through an admin dashboard.

## Features

- **Dynamic Content Management**: All website text content is stored in MongoDB and can be edited through the admin dashboard
- **Admin Dashboard**: Complete content management interface with section-based organization
- **Real-time Updates**: Content changes are reflected immediately on the website
- **Responsive Design**: Modern, mobile-friendly design with smooth animations
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB with Mongoose
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ellman-group
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/ellman-group
```

4. Seed the database with initial content:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to:
   - Website: http://localhost:3000
   - Admin Dashboard: http://localhost:3000/admin

## Content Management

### Admin Dashboard

Access the admin dashboard at `/admin` to manage all website content:

- **Dashboard**: Overview of content statistics and quick actions
- **Content Management**: Edit content organized by sections:
  - Header & Navigation
  - Hero Section
  - Services
  - About
  - Process
  - Contact
  - Footer

### Content Structure

Content is organized by:
- **Section**: Main website sections (header, hero, services, etc.)
- **Subsection**: Sub-categories within sections (nav, cta, features, etc.)
- **Key**: Specific content identifiers (title, description, button, etc.)
- **Type**: Content type (text, title, description, button, badge, feature, stat)

### Adding/Editing Content

1. Navigate to the Content Management tab
2. Select the section you want to edit
3. Click "Edit" on any content item
4. Make your changes and click "Save"
5. Changes are immediately reflected on the website

## Database Schema

The content is stored in a `sitecontents` collection with the following structure:

```typescript
interface SiteContent {
  section: string;           // Main section (header, hero, services, etc.)
  subsection?: string;       // Subsection (nav, cta, features, etc.)
  key: string;              // Content identifier
  value: string;            // Actual content text
  type: string;             // Content type
  order: number;            // Display order
  isActive: boolean;        // Whether content is active
  createdAt: Date;          // Creation timestamp
  updatedAt: Date;          // Last update timestamp
}
```

## API Endpoints

- `GET /api/content` - Fetch all active content
- `POST /api/content` - Create new content item
- `PUT /api/content/[id]` - Update content item
- `DELETE /api/content/[id]` - Delete content item
- `POST /api/seed` - Seed database with initial content

## Development

### Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   └── page.tsx           # Main website page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
└── models/               # Database models
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with initial content

## Deployment

1. Build the application:
```bash
npm run build
```

2. Set up your production MongoDB connection string in environment variables

3. Deploy to your preferred platform (Vercel, Netlify, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
