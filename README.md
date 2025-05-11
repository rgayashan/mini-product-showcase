# Product Showcase

A modern, responsive web application built with Next.js and Tailwind CSS v4 that showcases products with cutting-edge web development practices.


This project is a comprehensive demonstration of modern web development techniques, implementing a product showcase with the following features:
- Static Site Generation for the product listing page
- Server-Side Rendering for product details
- API routes for form handling
- Responsive design with Tailwind CSS v4
- Dark mode support
- Modern styling with CSS variables and theming

## ✨ Features

### Product Listing (SSG)
- Uses Static Site Generation with revalidation for optimal performance
- Responsive grid layout that adapts to all screen sizes
- Product card components with hover effects and visual feedback
- Image optimization with Next.js Image component

### Product Detail (SSR)
- Implements Server-Side Rendering for up-to-date product information
- Detailed product view with specifications and description
- Rating display with visual indicators
- Back navigation with breadcrumb-like experience

### Contact Form
- Client-side form validation with error handling
- Form submission via Next.js API Route
- Success/error state management and user feedback
- Accessibility-focused form design

### Additional Features
- Dark mode support with system preference detection
- Modern CSS variables for theming
- Responsive navigation with mobile menu

## 🛠️ Technologies

### Core Technologies
- **Next.js 14**: React framework with App Router for modern routing
- **Tailwind CSS v4**: Utility-first CSS with modern theming approach
- **React 18**: For component-based UI development with hooks

### Development Tools
- **ESLint**: For code quality and consistency
- **Prettier**: For code formatting
- **Next.js Image Optimization**: For responsive and optimized images

### Architecture
- **App Router**: Next.js modern routing system
- **Server Components**: For improved performance and SEO
- **Client Components**: For interactive elements
- **API Routes**: For serverless backend functionality

## 💻 Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rgayashan/mini-product-showcase.git
cd mini-product-showcase
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 🚀 Building for Production

```bash
# Build the application
npm run build
# or
yarn build

# Start the production server
npm start
# or
yarn start
```

## 📁 Project Structure

```
product-showcase/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── contact/          # Contact form API
│   ├── contact/              # Contact page
│   ├── products/             # Products pages
│   │   └── [id]/             # Dynamic product detail page
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.js             # Root layout component
│   └── page.js               # Home page
├── components/               # Reusable UI components
│   ├── ContactForm.js        # Contact form component
│   ├── Footer.js             # Footer component
│   ├── Header.js             # Header with navigation
│   └── ProductCard.js        # Product card component
├── lib/                      # Utility functions and libraries
│   └── products.js           # Product data fetching utilities
├── public/                   # Static assets
├── .eslintrc.json            # ESLint configuration
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── tailwind.config.js        # Tailwind CSS configuration
```

## 🌟 Best Practices

### 1. Performance Optimization
- **Static Site Generation**: Used for pages with static content for improved performance
- **Server-Side Rendering**: Used for dynamic content that needs to be up-to-date
- **Image Optimization**: Using Next.js Image component for optimized loading
- **Component Splitting**: Logical separation of components for code splitting

### 2. Modern CSS Approach
- **CSS Variables**: For theming and consistent design system
- **Media Queries**: For responsive design and dark mode
- **Tailwind CSS v4**: Using the latest features without deprecated APIs
- **Mobile-First Design**: Ensuring responsive design across all devices

### 3. Code Quality
- **Component Architecture**: Modular, reusable components
- **Clean Code Principles**: Descriptive naming, consistent formatting
- **Error Handling**: Comprehensive error states throughout the application
- **Separation of Concerns**: Clear separation between UI, data fetching, and business logic

### 4. Accessibility
- **Semantic HTML**: Using proper HTML tags for better accessibility
- **Form Labels**: Properly associated labels with form controls
- **Color Contrast**: Ensuring sufficient contrast for text readability

### 5. SEO Optimization
- **Metadata**: Proper page titles and descriptions
- **Server Rendering**: Improved SEO with pre-rendered content
- **Semantic Structure**: Logical document structure with proper headings

### 6. State Management
- **React Hooks**: Using React hooks for state and lifecycle management
- **Form State**: Controlled components for form handling
- **Loading States**: Proper handling of loading states for data fetching

### 7. Security
- **Input Validation**: Client-side and server-side validation for forms
- **API Security**: Proper error handling in API routes

## 📈 Future Improvements

With additional time, the following enhancements could be implemented:

1. **Authentication**: User accounts with NextAuth.js
2. **Shopping Cart**: Persistent shopping cart with Context API or Redux
3. **Advanced Search**: Search functionality with filtering and sorting
4. **Pagination**: For handling larger product catalogs
5. **Animations**: Subtle animations for enhanced user experience
6. **Unit Testing**: Jest and React Testing Library for component testing
7. **E2E Testing**: Cypress or Playwright for end-to-end testing
8. **Internationalization**: Multi-language support with next-intl
9. **PWA Features**: Service workers for offline capabilities
10. **Analytics**: User behavior tracking with Google Analytics or Plausible

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)

## 🌙 Dark Mode

Dark mode is implemented using CSS variables and media queries, with system preference detection. This provides a seamless experience for users who prefer dark interfaces.

## 🧩 API Integration

The application fetches product data from [Fake Store API](https://fakestoreapi.com/products), demonstrating how to integrate with external APIs in a Next.js application.

## 👤 Author

Rajitha Gayashan - [contact.gayashan@gmail.com](mailto:contact.gayashan@gmail.com)

---

Built with using Next.js and Tailwind CSS - 2025/05/11