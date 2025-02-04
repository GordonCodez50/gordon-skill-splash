import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export const ProjectsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const baseVelocity = 1; // Base speed for the animation (you can increase this value for faster scroll)
  const velocity = useTransform(scrollYProgress, [0, 1], [baseVelocity, baseVelocity * 3]);
  const [duration, setDuration] = useState(30); // Faster duration for the animation (was 40)

  useEffect(() => {
    const unsubscribe = velocity.on("change", (latest) => {
      setDuration(60 / latest); // Adjust duration based on scroll velocity
    });
    return () => unsubscribe();
  }, [velocity]);

  // Parallax effect for the heading
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="py-24 bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-clash mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 animate-gradient-xy"
          style={{ y: yHeading, opacity: opacityHeading }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="relative flex gap-8 items-center">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: duration, // Adjusted for faster animation
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...projects, ...projects].map((project) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="min-w-[350px] flex-shrink-0 transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full overflow-hidden bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-clash mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-purple-500/10 text-primary text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
