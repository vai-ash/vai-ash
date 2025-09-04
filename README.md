# Vaijayanti's Portfolio Website

This is a personal portfolio website built using the Ronaldo theme design as reference. It's ready to be deployed on GitHub Pages.

## Setup Instructions

### 1. Create a GitHub Repository
- Create a new repository named `[your-username].github.io`
- This will be your GitHub Pages URL

### 2. Update Your Information
Edit the `index.html` file to add your personal information:
- Update name and title in the hero section
- Add your actual email and phone in About and Contact sections
- Update Education section with your degrees
- Add your work experience in Experience section
- Update Skills with your technical and professional skills
- Add your projects with descriptions and links
- Update social media links with your profiles

### 3. Add Images
Replace placeholder images with your actual photos:
- `images/profile-placeholder.jpg` - Your professional photo for hero section
- `images/about-placeholder.jpg` - Your photo for about section
- `images/project1-placeholder.jpg`, etc. - Screenshots of your projects

### 4. Customize Content
- Update the color scheme in `css/style.css` if desired
- Add or remove sections as needed
- Update the typing effect titles in `js/main.js`

### 5. Deploy to GitHub Pages
1. Initialize git in the project folder:
   ```bash
   cd github.io-profile
   git init
   git add .
   git commit -m "Initial portfolio website"
   ```

2. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/[your-username]/[your-username].github.io.git
   ```

3. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

4. Your website will be live at: `https://[your-username].github.io`

## Features
- Responsive design
- Smooth scrolling navigation
- Animated skill bars
- Timeline for education and experience
- Project portfolio section
- Contact form
- Social media links

## Technologies Used
- HTML5
- CSS3
- JavaScript/jQuery
- Bootstrap 4
- Font Awesome Icons
- Google Fonts

## Customization Tips
- To change the primary color, update the `--primary-color` variable in `css/style.css`
- To enable the typing effect, uncomment the `typeWriter()` call in `js/main.js`
- To add more projects, copy the project card HTML structure in the projects section
- For a working contact form, integrate with a service like Formspree or EmailJS