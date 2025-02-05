
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <motion.h1 
          className="text-4xl md:text-6xl font-clash text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Some Of My Past Projects
        </motion.h1>
        
        <div className="mt-16 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-purple-500/10 via-green-400/5 to-purple-500/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-clash mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-purple-500/10 text-primary text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center text-sm hover:text-primary transition-colors"
                      >
                        View Details
                        <motion.span
                          className="inline-block ml-1"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                        >
                          →
                        </motion.span>
                      </Link>
                      
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm hover:text-primary transition-colors"
                        >
                          Visit Project
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-xl aspect-video"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
