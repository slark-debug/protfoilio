# AI/ML Portfolio Website

A modern, professional portfolio website showcasing AI/ML expertise, built with Next.js and Tailwind CSS.

## 🚀 Features

- **Dark Theme**: Minimal and professional dark design
- **Fully Responsive**: Optimized for mobile and desktop
- **Smooth Navigation**: Scroll-based navigation with smooth scrolling
- **Animations**: Beautiful transitions using Framer Motion
- **Interactive Elements**: Hover effects on project cards
- **SEO Optimized**: Meta tags and semantic HTML
- **Clean Architecture**: Reusable components and organized code structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Fixed navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section with skills
│   ├── Projects.tsx      # Projects showcase
│   ├── Experience.tsx    # Experience and certifications
│   └── Contact.tsx       # Contact information
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone or download** this repository

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `components/Hero.tsx` - Name and title
- `components/About.tsx` - Bio and skills
- `components/Projects.tsx` - Your projects
- `components/Experience.tsx` - Work experience and certifications
- `components/Contact.tsx` - Contact links and information
- `app/layout.tsx` - SEO metadata

### Styling

- Colors are defined in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles inline with Tailwind classes

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Update navigation in `components/Navigation.tsx`

## 📱 Sections

1. **Hero** - Name, title, and call-to-action
2. **About** - Personal bio and skills grid
3. **Projects** - Featured projects with tech stack and links
4. **Experience** - Work experience and certifications
5. **Contact** - Email and social media links

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!