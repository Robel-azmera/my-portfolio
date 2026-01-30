# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based personal portfolio website featuring a multi-page layout with smooth page transitions, contact form integration via EmailJS, and a custom animated cursor. Built with React 18, React Router v6, and Bootstrap 5.

## Development Commands

```bash
# Install dependencies
npm install
# or
yarn install

# Start development server (runs on http://localhost:3000)
npm start
# or
yarn start

# Build for production
npm run build
# or
yarn build

# Run tests
npm test
# or
yarn test

# Deploy to GitHub Pages
npm run predeploy  # Builds and creates 404.html for client-side routing
npm run deploy     # Deploys to gh-pages branch
```

## Architecture

### Content Management System
- **Central Configuration**: All portfolio content is centralized in `src/content_option.js`
- This single file controls all text, data, and configuration across the entire site including:
  - Personal information (name, title, description)
  - About section (bio, work timeline, skills)
  - Portfolio projects (images, descriptions, links)
  - Contact details and EmailJS configuration
  - Social media links
- **Key Pattern**: To modify any content on the site, edit `src/content_option.js` rather than individual page components

### Application Structure
- **Entry Point**: `src/index.js` → `src/app/App.js`
- **Routing**: `src/app/routes.js` defines all routes with animated transitions using `react-transition-group`
- **Pages**: Each page is in `src/pages/{page-name}/index.js` with co-located styles in `style.css`
  - `/` - Home page with typewriter effect intro
  - `/about` - About section with skills and timeline
  - `/portfolio` - Portfolio grid
  - `/contact` - Contact form with EmailJS integration
- **Layout**: Fixed header (`src/header/index.js`) with hamburger menu that overlays content
- **Components**:
  - `src/components/socialicons/` - Social media icon links (displayed globally via routes.js)
  - `src/components/themetoggle/` - Dark/light theme toggle
  - `src/hooks/AnimatedCursor.js` - Custom animated cursor effect
  - `src/hooks/withRouter.js` - HOC for accessing router props

### Styling Approach
- Bootstrap 5 for layout grid and utility classes
- Custom CSS per component (co-located `style.css` files)
- Global styles in `src/index.css` and `src/app/App.css`
- Theme toggle functionality built into components

### Contact Form Integration
The contact form uses EmailJS for email delivery:
1. Configure EmailJS credentials in `src/content_option.js` under `contactConfig`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_USER_ID`
2. Form submission handled in `src/pages/contact/index.js`
3. Template parameters: `from_name`, `user_name`, `to_name`, `message`

### Build Configuration
- `.env` disables source maps and ESLint plugin for production builds
- `predeploy` script creates `404.html` copy of `index.html` to handle GitHub Pages client-side routing
- Uses `process.env.PUBLIC_URL` for correct asset paths when deployed to subdirectories

## Working with This Codebase

### To Update Portfolio Content
1. Edit `src/content_option.js`
2. Modify the exported objects (meta, introdata, dataabout, skills, services, dataportfolio, contactConfig, socialprofils)
3. Changes will automatically reflect across all pages

### To Add a New Page
1. Create directory in `src/pages/{page-name}/`
2. Add `index.js` and `style.css`
3. Import and add route in `src/app/routes.js`
4. Add navigation link in `src/header/index.js`

### To Modify Animations
- Page transitions configured in `src/app/routes.js` (CSSTransition timeout: 400ms)
- Transition classes defined in CSS with `.page-enter`, `.page-exit` naming convention
- Cursor animation in `src/hooks/AnimatedCursor.js`

### EmailJS Setup
To enable the contact form:
1. Create account at emailjs.com
2. Create email service and template
3. Update `contactConfig` in `src/content_option.js` with your credentials
4. Test form submission in development
