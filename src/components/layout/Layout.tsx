'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full bg-[#4f85a6]/90 backdrop-blur-sm z-50 border-b border-white/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo-01.jpg"
                    alt="Logo"
                    fill
                    className="rounded-full object-cover border-2 border-white/50"
                    sizes="48px"
                  />
                </div>
                <span className="text-2xl font-bold text-white">Ivan&apos;s Blog</span>
              </Link>
            </motion.div>

            <div className="flex items-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-6"
              >
                <Link href="/" className="text-white hover:text-blue-200 transition-colors">Home</Link>
                <Link href="/about" className="text-white hover:text-blue-200 transition-colors">About</Link>
                <Link href="/blog" className="text-white hover:text-blue-200 transition-colors">Blog</Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-6"
              >
                <div className="relative w-8 h-8 hover:opacity-80 transition-opacity">
                  <Image
                    src="/FB.png"
                    alt="Facebook"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <div className="relative w-8 h-8 hover:opacity-80 transition-opacity">
                  <Image
                    src="/IG.png"
                    alt="Instagram"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <div className="relative w-8 h-8 hover:opacity-80 transition-opacity">
                  <Image
                    src="/LINE.PNG"
                    alt="Line"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <div className="relative w-8 h-8 hover:opacity-80 transition-opacity">
                  <Image
                    src="/ME.png"
                    alt="Me"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow mt-16 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-[#4f85a6]/90 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="text-sm text-white">
              © {new Date().getFullYear()} Ivan&apos;s Blog. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 