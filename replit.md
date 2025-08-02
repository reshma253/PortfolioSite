# Portfolio Website - Alex Johnson

## Overview

This is a personal portfolio website for Alex Johnson, a creative developer and designer. The application showcases professional work, skills, and contact information through a modern, responsive web interface. Built as a full-stack application with React frontend and Express backend, it features a clean design system, smooth animations, and contact form functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Projects, and Contact
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theme management, supporting both light and dark modes
- **Animations**: AOS (Animate On Scroll) library for smooth scroll-triggered animations
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database Layer**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and PostgreSQL support for production
- **Development Setup**: Vite middleware integration for seamless full-stack development

### Data Storage Solutions
- **Database**: PostgreSQL as the primary database using Neon serverless
- **ORM**: Drizzle ORM with Zod schema validation for type-safe database operations
- **Schema**: User management system with username/password authentication structure
- **Migrations**: Drizzle Kit for database schema migrations and management

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session storage (connect-pg-simple)
- **User Schema**: Basic user model with ID, username, and password fields
- **Security**: Prepared for authentication implementation with storage interfaces already defined

### Theme and Design System
- **Design System**: Custom CSS variables for consistent theming across light and dark modes
- **Typography**: Inter and Poppins fonts for modern, professional appearance
- **Color Palette**: Neutral-based design with blue primary and yellow accent colors
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint coverage

## External Dependencies

### UI and Design
- **Radix UI**: Complete suite of accessible UI primitives for dialogs, dropdowns, navigation, and form components
- **Lucide React**: Icon library for consistent iconography throughout the application
- **AOS**: Animation library for scroll-triggered effects and smooth user interactions
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer for browser compatibility

### Development and Build Tools
- **Vite**: Frontend build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development server

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect support
- **Drizzle Kit**: Database migration and schema management tools
- **Drizzle Zod**: Schema validation integration

### Communication Services
- **EmailJS**: Client-side email service for contact form functionality without backend email processing
- **React Hook Form**: Form handling with validation using Hookform Resolvers

### Development Environment
- **Replit Integration**: Special plugins for Replit development environment including cartographer and runtime error overlay
- **Hot Module Replacement**: Vite HMR for instant development feedback
- **Source Maps**: Trace mapping support for debugging