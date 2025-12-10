# Manan's Academic Portfolio

A professional, modern academic portfolio website built with React and Vite. Features a clean, responsive design with smooth animations and an academic-focused layout.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Modern UI**: Contemporary design with professional aesthetics
- **Sections Include**:
  - Hero section with profile introduction
  - About section with highlights
  - Education timeline
  - Research interests and publications
  - Project showcase
  - Skills with progress bars
  - Contact information with social links

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Fixed navigation bar with active section tracking
│   ├── Hero.jsx         # Landing section with CTA buttons
│   ├── About.jsx        # Personal introduction and highlights
│   ├── Education.jsx    # Education timeline
│   ├── Research.jsx     # Research interests and publications
│   ├── Projects.jsx     # Project cards with technologies
│   ├── Skills.jsx       # Skill categories with progress bars
│   └── Contact.jsx      # Contact info and social links
├── App.jsx              # Main application component
├── App.css              # Comprehensive styling with animations
└── index.css            # Base styles
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser** at the URL shown in the terminal (usually http://localhost:5174)

## Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):

   - Replace "Manan" with your name
   - Update field of study and research area
   - Add your photo (replace the placeholder)

2. **About Section** (`src/components/About.jsx`):

   - Write your personal bio
   - Update university, degree, and interests
   - Modify the highlight numbers (papers, projects, GPA)

3. **Education Section** (`src/components/Education.jsx`):

   - Add your educational background
   - Include institutions, degrees, and dates
   - List achievements and honors

4. **Research Section** (`src/components/Research.jsx`):

   - List your research interests
   - Add publications with proper citations
   - Include conference presentations

5. **Projects Section** (`src/components/Projects.jsx`):

   - Showcase your projects
   - Add technologies used
   - Include GitHub/demo links

6. **Skills Section** (`src/components/Skills.jsx`):

   - Update skill categories
   - Adjust proficiency levels
   - Add new technologies

7. **Contact Section** (`src/components/Contact.jsx`):
   - Update email and location
   - Add social media links (LinkedIn, GitHub, Google Scholar, etc.)

### Styling Customization

Edit `src/App.css` to modify:

- Color scheme (CSS variables at the top)
- Font families
- Spacing and layouts
- Animation effects

### Color Scheme

Current colors are defined in CSS variables:

```css
--primary-color: #2c3e50;
--secondary-color: #3498db;
--accent-color: #e74c3c;
```

Change these values to customize the color palette.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with animations
- **JavaScript ES6+** - Modern JavaScript features

## Tips

- All placeholder text is marked with `[brackets]` - search for these to find what needs updating
- Images use placeholders - replace with actual photos
- Links marked with `#` should be updated with real URLs
- Adjust content length to match your experience level

## License

This project is open source and available for personal and academic use. Special thanks to Gaurav Kannaujiya for helping me build this site.
