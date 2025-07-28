# Replit.md

## Overview

This is a simplified portfolio website built with React and Tailwind CSS featuring navbar, hero, services, and contact components. The portfolio showcases Mohammad Naeem, a Computer Systems Engineer specializing in React, Node.js, and modern web technologies. The application uses JavaScript (converted from TypeScript) and features a modern, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.
Programming language preference: JavaScript instead of TypeScript for portfolio site.
Portfolio owner: Mohammad Naeem, Computer Systems Engineer from Sukkur, Pakistan.
Development environment: Windows (requires Windows-compatible npm scripts).

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx and Vite middleware integration

### Data Storage
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with migration support
- **Schema Location**: Shared schemas in `/shared/schema.ts`
- **Session Storage**: PostgreSQL-backed sessions

## Key Components

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Development server integration
├── shared/           # Shared TypeScript definitions
│   └── schema.ts     # Database schemas and types
└── migrations/       # Database migration files
```

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Type Safety**: Drizzle-zod integration for runtime validation
- **Migrations**: Managed through drizzle-kit

### Storage Layer
- **Interface**: `IStorage` defines CRUD operations
- **Implementation**: `MemStorage` for development (in-memory)
- **Extensibility**: Designed to easily swap in database-backed storage

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Routing**: Express routes handle HTTP requests at `/api/*` endpoints
3. **Data Access**: Storage interface abstracts database operations
4. **Response**: JSON responses with error handling middleware
5. **Client Updates**: Query client manages caching and synchronization

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI component library
- **Icons**: Lucide React icon set
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Vite with React plugin and error overlay

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with PostgreSQL dialect
- **Sessions**: connect-pg-simple for session persistence
- **Development**: tsx for TypeScript execution

### Shared Dependencies
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date manipulation
- **Utilities**: clsx and class-variance-authority for conditional styling

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: Uses tsx with hot reload and Vite middleware
- **Production**: Compiled JavaScript with static file serving
- **Database**: Requires `DATABASE_URL` environment variable

### Development Workflow
- **Scripts**: 
  - `npm run dev` - Development server with hot reload
  - `npm run build` - Production build
  - `npm run db:push` - Database schema updates
- **Type Checking**: Shared TypeScript configuration across client/server

### Production Considerations
- **Database Migrations**: Manual migration management with drizzle-kit
- **Session Storage**: PostgreSQL-backed sessions for scalability
- **Static Files**: Express serves built frontend in production
- **Error Handling**: Centralized error middleware with proper status codes

### Netlify Deployment
- **Build Command**: `npm run build` creates static files in `dist/public`
- **Publish Directory**: `dist/public`
- **SPA Routing**: `_redirects` file handles client-side routing
- **Node Version**: Set to Node 20 in netlify.toml
- **Deployment Type**: Frontend-only static deployment (backend not included)