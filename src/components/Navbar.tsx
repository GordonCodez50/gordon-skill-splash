import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* MacOS-style buttons */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <div className="w-px h-4 bg-border mx-3" />
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/2c36197a-3862-4fc3-85fb-5bfadd8ddf56.png" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg">Gordon Edacherié</span>
          </div>
        </div>
        
        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};