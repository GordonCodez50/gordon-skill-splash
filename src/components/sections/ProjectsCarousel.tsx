import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from "@/components/ui/card";

// This would typically come from your CMS
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one",
    image: "/placeholder.svg",
    tags: ["Web", "React", "TypeScript"]
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two",
    image: "/placeholder.svg",
    tags: ["Mobile", "React Native"]
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three",
    image: "/placeholder.svg",
    tags: ["AI", "Python", "TensorFlow"]
  }
];

export const ProjectsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-clash text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600"
        >
          Featured Projects
        </motion.h2>

        <div className="relative flex items-center justify-center perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`absolute w-full max-w-2xl transition-all duration-500 ${
                index === activeProject ? 'z-20 scale-100 opacity-100' :
                index < activeProject ? '-translate-x-full scale-95 opacity-50 z-10' :
                'translate-x-full scale-95 opacity-50 z-10'
              }`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === activeProject ? 1 : 0.5,
                x: index === activeProject ? 0 : index < activeProject ? -100 : 100,
                scale: index === activeProject ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-purple-500/20">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-clash mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeProject ? 'bg-primary scale-125' : 'bg-primary/30'
              }`}
              onClick={() => setActiveProject(index)}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};