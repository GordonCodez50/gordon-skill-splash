
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    if (!isHovering && showButtons) {
      timeout = setTimeout(() => {
        setShowButtons(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isHovering, showButtons]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleButtonClick = () => {
    window.location.reload();
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AnimatePresence>
            {showButtons && (
              <motion.div 
                className="flex gap-1.5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  onClick={handleButtonClick}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                />
                <div
                  onClick={handleButtonClick}
                  className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"
                />
                <div
                  onClick={handleButtonClick}
                  className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-px h-4 bg-border mx-3" />
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/2c36197a-3862-4fc3-85fb-5bfadd8ddf56.png" alt="Logo" className="w-8 h-8" />
            <span className="font-bebas text-2xl tracking-wide">Gordon Edacherié</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
          <Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
          <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};

