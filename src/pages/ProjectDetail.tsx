
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Navbar } from '@/components/Navbar';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-clash mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Go back to projects
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { title: "Week Breakdown", content: project.content.weekBreakdown },
    { title: "Testing & Debugging", content: project.content.testingAndDebugging },
    { title: "Final Project", content: project.content.finalProject },
    { title: "Gains", content: project.content.gains },
    { title: "Final Thoughts", content: project.content.finalThoughts }
  ].filter(section => section.content);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[40vh] bg-gradient-to-b from-purple-50 to-white">
        <img
          src={project.headerImage || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
      </div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50/50 via-white to-green-50/50">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl">
            <Link to="/projects" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-clash mb-4 text-gray-900"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              {project.description}
            </motion.p>
            
            {project.projectLink && (
              <motion.a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center mt-6 px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 transition-colors"
              >
                Visit Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Location
              </div>
              <div className="font-medium">
                {project.online ? "Online" : project.location}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                Company
              </div>
              <div className="font-medium">{project.company}</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-lg font-medium mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <div key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 text-primary text-sm">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          {project.content.introduction && (
            <div className="prose prose-lg dark:prose-invert mb-16 max-w-none">
              <p>{project.content.introduction}</p>
            </div>
          )}

          {/* Dynamically Render Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gradient-to-r from-purple-500/10 via-green-400/5 to-purple-500/10 opacity-0 transition group-hover:opacity-100 sm:block" />
                  <div className="relative">
                    <h3 className="text-2xl font-clash mb-4 inline-flex items-center">
                      {section.title}
                      <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
