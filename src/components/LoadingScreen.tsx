
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from "@/components/ui/progress";

const loadingTexts = [
  "Gordon is setting things up, hang tight!",
  "Assembling the future, just a moment!",
  "Crafting your experience... Almost there!",
  "Building something amazing for you...",
  "Preparing a world of possibilities..."
];

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textTimer = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % loadingTexts.length);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        <div className="w-full max-w-md px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="relative h-24">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 text-2xl font-clash bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 animate-gradient-xy"
                >
                  {loadingTexts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              <Progress value={progress} className="h-2" />
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="relative w-16 h-16">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-t-2 border-purple-500"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-r-2 border-green-400"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
