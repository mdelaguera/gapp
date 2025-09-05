# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js + Sanity CMS template that provides a modern full-stack content management solution. The project uses a monorepo structure with two workspaces:

- **frontend/**: Next.js 15 app with App Router, TypeScript, and Tailwind CSS
- **studio/**: Sanity Studio for content management

## Architecture

### Monorepo Structure
- Root-level scripts coordinate both workspaces using `npm-run-all`
- Shared dependencies are managed at the root level
- Each workspace has its own package.json with workspace-specific scripts

### Frontend Architecture (Next.js)
- **Next.js 15** with App Router and Turbopack for development
- **TypeScript** with strict type checking
- **Tailwind CSS v4** for styling with PostCSS
- **Sanity integration** via next-sanity and Live Content API
- Auto-generated types from Sanity schema in `sanity.types.ts`

### Studio Architecture (Sanity)
- **Sanity Studio v4** with custom configuration
- Schema types defined in `studio/src/schemaTypes/`
- Custom structure and plugins in respective directories
- AI Assist integration for content enhancement
- Unsplash asset source plugin for media

## Development Commands

### Start Development (Both Apps)
```bash
npm run dev
```
This starts both Next.js frontend (port 3000) and Sanity Studio (port 3333) in parallel.

### Individual Workspace Commands
```bash
# Frontend only
npm run dev:next

# Studio only  
npm run dev:studio
```

### Build and Type Checking
```bash
# Build frontend
npm run build --workspace=frontend

# Type check all workspaces
npm run type-check

# Lint frontend
npm run lint
```

### Sanity-Specific Commands
```bash
# Generate TypeScript types from Sanity schema
npm run typegen --workspace=frontend

# Import sample data
npm run import-sample-data

# Deploy Sanity Studio
npm run deploy --workspace=studio
```

## Key Configuration Files

- **Root package.json**: Workspace configuration and shared scripts
- **frontend/next.config.ts**: Next.js configuration with Sanity integration
- **frontend/sanity-typegen.json**: Type generation configuration
- **studio/sanity.config.ts**: Sanity Studio configuration and plugins
- **studio/sanity.cli.ts**: CLI configuration for deployments

## Content Schema

The Sanity schema includes these document types:
- `Page`: Dynamic pages with page builder
- `Post`: Blog posts with rich content
- `Person`: Author/team member profiles  
- `Settings`: Global site settings

Schema types are defined in `studio/src/schemaTypes/` and automatically generate TypeScript types for the frontend.

## Environment Variables

Frontend requires:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN`

Studio requires:
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

## Visual Editing

The project supports real-time visual editing through Sanity's Presentation Tool, allowing content editors to preview changes live on the Next.js frontend while editing in the Studio.