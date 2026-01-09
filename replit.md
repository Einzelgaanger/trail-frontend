# Trail V3

## Overview
Trail V3 is a Next.js 14 web application for sustainability and ESG (Environmental, Social, and Governance) portfolio management. It allows organizations and individuals to track carbon neutrality goals, green taxonomy compliance, and sustainability metrics.

## Project Architecture
- **Framework**: Next.js 14 with App Router
- **UI Library**: Ant Design (antd) with custom SCSS styling
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SCSS modules
- **Charts**: React Google Charts
- **Maps**: @react-google-maps/api

## Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages (login, signup, forgot-password)
│   └── app/               # Main application pages
│       ├── dashboard/     # Dashboard view
│       ├── carbon-netzero/# Carbon neutrality tracking
│       ├── green-taxonomy/# Green taxonomy compliance
│       ├── goals-indicator/# Goals and KPIs
│       ├── programme/     # Programme management
│       ├── reports/       # Reporting features
│       └── settings/      # User settings
├── components/            # Reusable UI components
├── lib/                   # Utilities (Ant Design registry)
├── pages/                 # Page logic components
├── styles/               # Global SCSS styles
├── Theme/                # Theme configuration
├── types/                # TypeScript type definitions
└── utils/                # Custom hooks and utilities
```

## Running the Project
- **Development**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build`
- **Production**: `npm run start`

## Recent Changes
- 2026-01-09: Initial Replit setup
  - Configured Next.js to run on 0.0.0.0:5000
  - Added cache control headers
  - Set up deployment configuration
