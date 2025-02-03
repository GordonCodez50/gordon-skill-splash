import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
  "Cyber Security",
  "Video Editing",
  "Graphic Design",
  "3D Animation",
  "Coding",
  "Web Design",
  "UI/UX Design",
  "Digital Art",
  "Motion Graphics",
  "Game Development"
];

export const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const baseVelocity = 1; // Reduced from 2 to slow down
  const velocity = useTransform(scrollYProgress, [0, 1], [baseVelocity, baseVelocity * 3]); // Reduced multiplier
  const [duration, setDuration] = useState(40); // Increased base duration

  useEffect(() => {
    const unsubscribe = velocity.on("change", (latest) => {
      setDuration(60 / latest); // Increased from 40 to 60 to slow down
    });
    return () => unsubscribe();
  }, [velocity]);

  return (
    <motion.section 
      ref={containerRef} 
      className="py-12 bg-background overflow-hidden" // Reduced padding from py-24
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-clash mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 animate-gradient-xy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skillsets
        </motion.h2>
        
        <div className="relative flex flex-col gap-4 py-4">
          {/* First row - moving right */}
          <div className="flex gap-4 items-center">
            <motion.div
              className="flex gap-4 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="min-w-[180px] h-[80px] bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 border border-purple-500/20"
                >
                  <span className="text-lg font-clash text-foreground whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - moving left */}
          <div className="flex gap-4 items-center">
            <motion.div
              className="flex gap-4 items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="min-w-[180px] h-[80px] bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 border border-purple-500/20"
                >
                  <span className="text-lg font-clash text-foreground whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};