'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * The Header component renders the top navigation bar with links to various pages.
 * It includes a responsive design that adapts between desktop and mobile views.
 * 
 * Features:
 * - Displays a logo and site title with animated effects.
 * - Provides navigation links to Home, Products, Contact, and About pages.
 * - Includes a toggleable mobile menu for smaller screens.
 * - Uses animations for link hover effects and menu transitions.
 * 
 * @returns A motion-enhanced header JSX element.
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <motion.svg 
                className="w-8 h-8 mr-2"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path 
                  d="M12 2L2 7L12 12L22 7L12 2Z" 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="1"
                />
                <path 
                  d="M2 17L12 22L22 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L12 17L22 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </motion.svg>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                ProductShowcase
              </motion.span>
            </Link>
          </motion.div>

          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
              />
            </svg>
          </motion.button>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href} className="text-white hover:text-blue-200 font-medium relative group py-2">
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/about" className="bg-white text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full font-medium transition-colors">
                About Us
              </Link>
            </motion.div>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-blue-500"
            >
              <motion.ul
                className="flex flex-col space-y-3"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                initial="closed"
                animate="open"
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -20 }
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 px-3 text-white hover:bg-blue-700 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -20 }
                  }}
                >
                  <Link
                    href="/about"
                    className="block py-2 px-3 text-white hover:bg-blue-700 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}