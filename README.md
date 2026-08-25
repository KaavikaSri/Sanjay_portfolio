# Stellar Portfolio

Create a modern, professional, responsive personal portfolio website based strictly on the information, skills, education, experience, projects, and achievements provided in my attached resume.

The portfolio should look like a professional Full Stack Developer portfolio, suitable for recruiters, companies, internships, and product-based organizations. Do not make it look like a generic student template.

1. Overall Design Direction

Build a clean, premium, modern developer portfolio with:

Professional and minimal UI

Strong visual hierarchy

Excellent typography

Generous spacing

Subtle animations

Modern cards and sections

Responsive design

Professional developer aesthetic

Mobile-first responsiveness

Smooth scrolling

Accessible color contrast

Consistent spacing and border radius

Subtle hover effects

No unnecessary visual clutter

The design should communicate:

Full Stack Developer | Software Developer | Problem Solver

Do not overuse gradients, glassmorphism, glowing effects, or excessive animations. The portfolio should look professional enough for a real developer's personal website.

2. Important Content Rule

Use the attached resume as the primary source of truth.

Extract the following information from the resume:

Full name

Professional title

About/Bio

Contact information

Email

Phone number, if available

Location, if available

LinkedIn

GitHub

Portfolio links

Technical skills

Programming languages

Frontend technologies

Backend technologies

Databases

Frameworks

Tools

Education

Work experience

Internship experience

Projects

Certifications

Achievements

Relevant coursework, if useful

Do not invent information that is not present in the resume.

If a section does not have enough information, either omit it or create a minimal version based only on the resume.

3. Website Structure

Create the portfolio with the following sections:

1. Navbar

Create a sticky professional navigation bar.

Navigation items:

Home

About

Skills

Experience

Projects

Education

Contact

Include:

Personal logo/name

Navigation links

Resume download button

Mobile hamburger menu

The navbar should become slightly more compact or visually elevated when the user scrolls.

4. Hero Section

Create a strong first impression.

The hero section should contain:

Left side

A professional introduction such as:

Hi, I'm [Name]

Full Stack Developer

Then a short 2–3 line professional summary based on my resume.

Example structure:

I build responsive, scalable, and user-focused web applications using modern frontend and backend technologies.

However, customize this according to the actual resume.

Add two primary CTA buttons:

View My Projects

Download Resume

Add secondary links/icons for:

GitHub

LinkedIn

Email

Right side

Create a professional developer visual.

Possible design:

Developer profile image if one is available in the resume

Otherwise create a clean developer-themed visual/card

Avoid using a fake stock-person image

The hero should immediately communicate my professional identity.

5. About Section

Create a professional "About Me" section using information from the resume.

Do not simply copy the objective statement word-for-word.

Transform the information into a natural professional introduction.

Highlight:

My development background

Full Stack development interests

Technologies I work with

Problem-solving ability

Project experience

Career focus

Add a small statistics/highlights area if the resume provides enough information.

For example:

Years/Months of Experience

Projects Completed

Technologies

Certifications

Only show numbers that can be supported by the resume.

6. Skills Section

Create a visually attractive technical skills section.

Group skills into categories.

For example:

Languages

Python

Java

JavaScript

TypeScript

SQL

etc.

Frontend

HTML

CSS

Bootstrap

JavaScript

React

etc.

Backend

Node.js

Express

FastAPI

PHP

Laravel

etc.

Database

MySQL

PostgreSQL

MongoDB

etc.

Tools & Technologies

Git

GitHub

Postman

Swagger

Figma

etc.

Only include technologies actually present in my resume.

Use clean skill cards or badges.

Do not use meaningless progress bars such as:

"JavaScript – 95%"

unless the resume explicitly provides proficiency levels.

7. Experience Section

Create a professional timeline or experience card layout.

For every experience mentioned in the resume, display:

Job title

Company

Employment period

Location if available

Responsibilities

Technologies used

Major contributions

Prioritize impact and actual work performed rather than generic responsibilities.

Use a timeline/card design.

For technical roles, highlight technologies with small badges.

8. Projects Section

This should be one of the most important sections.

Create professional project cards for every significant project from the resume.

Each project card should contain:

Project name

Short description

Problem solved

Technologies used

Key features

GitHub link if available

Live demo link if available

Example structure:

Project Name

Short professional description.

Key Features

Feature 1

Feature 2

Feature 3

Tech Stack
React Node.js PostgreSQL

Buttons:

Live Demo

GitHub

Only display buttons when the corresponding links exist in the resume.

9. Project Details Interaction

When a user clicks a project card, show a detailed project view using either:

Modal

Dedicated project details section

Expandable card

The detailed view should contain:

Project overview

Problem statement

Solution

Features

Technology stack

My contribution

Links

Keep the interaction smooth and professional.

10. Education Section

Create a clean education timeline.

For each education entry show:

Degree

Institution

Year

CGPA/percentage if present

Relevant information if present

Use a professional timeline/card design.

Do not display unnecessary school-level information unless it is actually relevant to the portfolio.

11. Certifications / Achievements

If certifications or achievements are present in the resume, create a separate section.

Use elegant cards containing:

Certification/Achievement name

Organization

Date/year

Credential link if available

If the resume doesn't contain enough information, don't create fake certifications.

12. Resume Section

Create a dedicated resume CTA section.

Example:

Interested in working together?

View my complete resume to learn more about my experience, skills, and projects.

Buttons:

Download Resume

View Resume

The download button should use the actual uploaded resume file.

13. Contact Section

Create a professional contact section.

Include:

Email

Phone if available

LinkedIn

GitHub

Location if available

Add a contact form with:

Name

Email

Subject

Message

Send Message button

Add proper form validation.

Do not claim that messages are actually sent unless a backend/email service is implemented.

If no backend is configured, provide a clean frontend form and clearly structure it so an email service/API can be connected later.

14. Footer

Create a minimal professional footer.

Include:

Name

Professional title

GitHub

LinkedIn

Email

Copyright

Example:

© 2026 [Name]. All rights reserved.

15. UI / UX Requirements

The website must be fully responsive.

Desktop

Use a polished two-column layout where appropriate.

Tablet

Adapt spacing and grid layouts.

Mobile

Use:

Hamburger navigation

Single-column sections

Touch-friendly buttons

Proper typography scaling

No horizontal scrolling

Test the design for:

1440px

1200px

992px

768px

480px

375px

16. Animations

Use subtle professional animations.

Include:

Fade-in on scroll

Slide-up section animations

Navbar transition

Button hover effects

Project card hover effects

Skill card hover effects

Smooth scrolling

Avoid:

Excessive bouncing

Flashing animations

Overly complicated particle effects

Distracting backgrounds

Animations should improve the experience, not distract from the content.

17. Color Theme

Use a professional developer-oriented color palette.

Preferred direction:

Neutral/light background

Dark text

One primary accent color

Subtle secondary colors

Alternatively, provide a professional dark mode.

Implement:

Light Mode

Clean professional white/light-gray interface.

Dark Mode

Dark charcoal background with readable text and a controlled accent color.

Add a theme toggle in the navbar.

Do not use too many colors.

18. Typography

Use a modern professional font such as:

Inter

Manrope

Poppins

Geist

Use:

Large bold heading for hero

Medium-weight section headings

Comfortable body text

Consistent font hierarchy

Make the typography look similar to a professional SaaS/developer product website.

19. Technical Implementation

Prefer the following stack:

Frontend

React

TypeScript

Vite

Styling

Use either:

Tailwind CSS

or

Clean modular CSS

Choose whichever produces the cleaner and more maintainable result.

Icons

Use a professional icon library such as:

Lucide React

Do not use random emoji icons for professional UI.

20. Component Architecture

Structure the application using reusable components.

Suggested structure:

src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Experience
│   ├── Projects
│   ├── ProjectCard
│   ├── ProjectModal
│   ├── Education
│   ├── Certifications
│   ├── ResumeCTA
│   ├── Contact
│   └── Footer
│
├── data/
│   └── portfolio.ts
│
├── assets/
│
├── App.tsx
├── main.tsx
└── index.css


Keep portfolio content separated from UI components wherever possible.

For example, project information should be stored in structured data rather than hardcoded repeatedly inside components.

21. Code Quality

Write clean, production-quality code.

Requirements:

TypeScript

Reusable components

Meaningful component names

No unnecessary duplication

Proper responsive CSS

Accessible HTML

Semantic elements

Proper alt text

Keyboard accessibility

Clean folder structure

No unused imports

No console errors

Avoid writing everything inside one large App.tsx.

22. SEO

Add proper:

Page title

Meta description

Open Graph metadata

Favicon

Semantic HTML

Proper heading hierarchy

The title should be similar to:

[Name] | Full Stack Developer

The meta description should professionally summarize my profile based on the resume.

23. Performance

Optimize the website for fast loading.

Use:

Lazy loading where appropriate

Optimized images

Minimal dependencies

Efficient animations

Proper asset handling

Avoid unnecessary heavy libraries.

24. Professional Recruiter Experience

The website should be designed so that a recruiter can understand my profile within 30–60 seconds.

The most important information should be immediately visible:

Who I am

What I do

My technical skills

My experience

My projects

How to contact me

Resume

Make the portfolio feel like a real professional developer portfolio, not a college assignment.

25. Important Content Accuracy Rules

Do NOT:

Invent work experience

Invent companies

Invent projects

Invent certifications

Invent technologies

Invent achievements

Invent GitHub repositories

Invent live demo URLs

Invent job titles

Add fake statistics

Everything must be derived from the resume.

You may professionally rewrite descriptions for better presentation, but the underlying facts must remain accurate.

26. Final Quality Check

Before completing the website, verify:

All resume information is correctly represented

No fake information is added

No broken links

Resume download works

GitHub links work

LinkedIn link works

Contact information is correct

All sections are responsive

Mobile navigation works

Dark/light mode works

Animations are smooth

No horizontal overflow

No console errors

UI looks professional

Typography is consistent

Cards have consistent spacing

Buttons have hover states

Website is recruiter-friendly

Final Goal

Create a portfolio that gives the impression:

"This is a professional Full Stack Developer who has hands-on development experience and builds real-world applications."

The final design should be modern, elegant, minimal, technically polished, recruiter-friendly, and production-ready, while remaining completely faithful to the attached resume.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4e4d3fd8-d203-4597-be59-9c7746ef8e8c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
