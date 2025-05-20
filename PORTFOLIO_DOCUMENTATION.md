# Ihsaan Ullah Portfolio Documentation

This document provides a comprehensive guide to the structure, components, and customization options for your portfolio website. Use this as a reference when you need to make changes or updates to your site.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Component Documentation](#component-documentation)
4. [Styling System](#styling-system)
5. [Image Assets](#image-assets)
6. [Contact Form](#contact-form)
7. [Customization Guide](#customization-guide)

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library
- **EmailJS**: Client-side email service (currently in fallback mode)
- **Lucide Icons**: Modern icon set
- **Wouter**: Lightweight routing
- **React Query**: Data fetching library

## Project Structure

```
client/
  ├── public/            # Static assets
  │   └── images/        # Your profile photos
  ├── src/
  │   ├── components/    # React components
  │   ├── hooks/         # Custom React hooks
  │   ├── lib/           # Utility functions
  │   ├── pages/         # Page components
  │   ├── App.tsx        # Main application component
  │   ├── index.css      # Global styles
  │   └── main.tsx       # Entry point
  └── index.html         # HTML template
```

## Component Documentation

### Navbar (`client/src/components/Navbar.tsx`)

**Purpose**: Site navigation and theme toggle

**Key Elements**:
- **Logo** (Lines 57-81): The "Ihsaan." text with gradient effect
- **Navigation Links** (Lines 82-89): Links to different sections
- **Theme Toggle** (Lines 90-102): Button to switch between light and dark mode
- **Mobile Menu** (Lines 142-161): Responsive navigation for small screens

**Customization Notes**:
- To update navigation links, modify the `links` array in the `NavLinks` component (Lines 175-181)

### Hero Section (`client/src/components/Hero.tsx`)

**Purpose**: Main landing section with your introduction

**Key Elements**:
- **Animated Background** (Lines 29-65): Floating shapes and patterns
- **Title & Subtitle** (Lines 86-93): Your name and main headline
- **Description** (Lines 95-103): Brief introduction about yourself
- **Call-to-Action Buttons** (Lines 105-129): "View My Work" and "Get In Touch" buttons
- **Animated Card** (Lines 150-196): Visual element with your initials and animated bars

**Customization Notes**:
- To update your headline text, modify Line 92
- To update your introduction text, modify Lines 101-102
- To change button text or links, update Lines 111-129

### About Section (`client/src/components/About.tsx`)

**Purpose**: Detailed information about you

**Key Elements**:
- **Profile Image** (Lines 40-46): Your photo with decorative elements
- **Who Am I** (Lines 72-84): Personal introduction
- **My Expertise** (Lines 87-99): Your skills and specialties
- **Learning & Goals** (Lines 102-114): Your aspirations and what you're learning
- **Connect Button** (Lines 117-129): Call-to-action to the contact section

**Customization Notes**:
- To update your profile image, change the `profileImagePath` variable (Line 5)
- To update your personal information, modify the text in each section (Lines 78-84, 93-99, 108-114)

### Projects Section (`client/src/components/Projects.tsx`)

**Purpose**: Showcase your work

**Key Elements**:
- **Project List** (Lines 5-38): Array of project objects with details
- **Section Header** (Lines 43-57): Title and description
- **Project Grid** (Lines 59-70): Display projects in a responsive grid

**Customization Notes**:
- To add or update projects, modify the `projects` array (Lines 5-38)
- Each project requires: id, title, description, tags, imageUrl, and link

### Skills Section (`client/src/components/Skills.tsx`)

**Purpose**: Highlight your technical abilities

**Key Elements**:
- **Skills List** (Lines 5-23): Array of skill objects categorized by type
- **Categories** (Line 25): Array of skill categories
- **Category Sections** (Lines 47-76): Group skills by category
- **Continuous Learning Note** (Lines 78-93): Statement about your ongoing learning

**Customization Notes**:
- To add or update skills, modify the `skills` array (Lines 5-23)
- To change categories, update the `categories` array (Line 25)

### Contact Section (`client/src/components/Contact.tsx`)

**Purpose**: Allow visitors to connect with you

**Key Elements**:
- **EmailJS Configuration** (Lines 8-11): Settings for email functionality
- **Contact Form** (Lines 209-284): Form for sending messages
- **Contact Information** (Lines 150-194): Your email, LinkedIn, and location

**Customization Notes**:
- Update your contact information in the respective sections (Lines 150-194)
- To enable EmailJS:
  1. Create an EmailJS account
  2. Create a service and template
  3. Update the `serviceId`, `templateId`, and `publicKey` variables (Lines 9-11)

### Footer (`client/src/components/Footer.tsx`)

**Purpose**: Site footer with copyright information

**Key Elements**:
- **Name** (Lines 10-13): Your name with gradient effect
- **Social Links** (Lines 16-48): Email, LinkedIn, and GitHub links
- **Copyright** (Lines 50-56): Copyright notice with current year

**Customization Notes**:
- Update social links with your information (Lines 16-48)
- The year updates automatically (Line 4)

## Styling System

The portfolio uses a custom color system with:

- **Primary Color**: Orange/Amber (Used for buttons, accents, and highlights)
- **Secondary Color**: Teal (Used as a complementary color)
- **Accent Color**: Purple (Used for tertiary elements)

These colors are defined in `client/src/index.css` as CSS variables and can be accessed via Tailwind CSS classes.

**Custom CSS Classes**:
- `.gradient-text`: Animated gradient text effect
- `.card-hover`: Hover effect for cards
- `.animated-border`: Animated gradient border
- `.hover-lift`: Subtle lift animation on hover
- `.accent-glow`: Glowing shadow effect

## Image Assets

Your profile images are stored in `client/public/images/`:
- `profile1.jpg`: First profile photo
- `profile2.jpg`: Second profile photo (currently used in About section)
- `profile3.jpg`: Third profile photo

To use these images in components, reference them with the path `/images/filename.jpg`.

## Contact Form

The contact form has two operating modes:

1. **EmailJS Mode**: When properly configured with your EmailJS account
2. **Fallback Mode**: Currently active, opens the user's email client with pre-filled information

To set up EmailJS:
1. Create an account on [emailjs.com](https://www.emailjs.com/)
2. Create a service (e.g., Gmail, Outlook)
3. Create an email template with variables: `{{name}}`, `{{email}}`, and `{{message}}`
4. Get your service ID, template ID, and public key
5. Update the variables in `Contact.tsx` (Lines 9-11)

## Customization Guide

### Common Changes

1. **Updating Your Information**
   - Personal details: Update text in `About.tsx`
   - Contact info: Update in `Contact.tsx`
   - Skills: Modify the skills array in `Skills.tsx`

2. **Changing Colors**
   - Edit the color variables in `client/src/index.css` (Lines 50-79 for light mode, Lines 81-109 for dark mode)

3. **Adding New Projects**
   - Add a new project object to the projects array in `Projects.tsx`
   - Follow the same structure as existing projects
   - Use appropriate tags and images

4. **Updating Profile Photo**
   - Replace any of the images in `client/public/images/`
   - Update the `profileImagePath` variable in `About.tsx` if needed

5. **Modifying Navigation**
   - Edit the `links` array in `Navbar.tsx` (NavLinks component)

### Advanced Customization

1. **Animation Adjustments**
   - Framer Motion animations are defined within each component
   - Common patterns: `initial`, `animate`, `whileHover`, and `transition` props

2. **Adding New Sections**
   - Create a new component in the components directory
   - Import and add it to `Home.tsx`
   - Add a navigation link in `Navbar.tsx`

3. **Background Effects**
   - Main background effects are in `Hero.tsx`
   - Additional decorative elements are in each section component

4. **For More Extensive Changes**
   - Refer to the Tailwind CSS documentation: [tailwindcss.com](https://tailwindcss.com/)
   - Refer to the Framer Motion documentation: [framer.com/motion](https://www.framer.com/motion/)