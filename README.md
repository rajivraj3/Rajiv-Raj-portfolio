# Rajiv Raj Portfolio

A modern personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and React Icons. This portfolio highlights projects, training, skills, education, achievements, and contact information in a premium dark-themed layout.

## Live Demo

[View the portfolio](https://rajiv-raj-portfolio.vercel.app/)

## Features

- Responsive one-page portfolio layout
- Smooth scroll navigation
- Animated sections with Framer Motion
- Project showcase with cards and tech stacks
- Skills, education, achievements, and training sections
- Contact section with social links and email
- Professional hero section with personal portrait
- Clean production-ready build setup

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- React Icons

## Project Structure

```bash
portfolio Rajiv/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app locally

```bash
npm run dev -- --host 0.0.0.0
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173/
```

### 3. Build for production

```bash
npm run build
```

## Customization

Update the profile content in the following files:

- `src/data/projects.js` for projects
- `src/data/certifications.js` for certifications / training
- `src/components/Hero.jsx` for intro and social links
- `src/components/Contact.jsx` for email, phone, and social profiles
- `src/assets/` for your profile image

## Author

Rajiv Raj

## License

This project is for personal portfolio use.
