import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export const ProjectsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section ref={containerRef} className="py-20 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="container mx-auto px-4" style={{ y, opacity }}>
        <motion.h2 className="text-4xl md:text-5xl font-clash text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 animate-gradient-xy">
          Featured Projects
        </motion.h2>
        <div className="overflow-hidden">
          <motion.div className="flex gap-8 pb-8"
            initial={{ x: 0 }}
            animate={{ x: `-${100 * projects.length}%` }}
            transition={{
              duration: projects.length * 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {/* Original projects */}
            {projects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="min-w-[350px] flex-shrink-0 transform transition-all duration-300 hover:scale-105">
                <Card className="h-full overflow-hidden bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                  <motion.img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-clash mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 text-primary text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
            {/* Duplicate projects for smooth infinite scroll */}
            {projects.map((project) => (
              <Link to={`/project/${project.id}`} key={`${project.id}-duplicate`} className="min-w-[350px] flex-shrink-0 transform transition-all duration-300 hover:scale-105">
                <Card className="h-full overflow-hidden bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                  <motion.img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-clash mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 text-primary text-sm">
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
      </motion.div>
    </motion.section>
  );
};
