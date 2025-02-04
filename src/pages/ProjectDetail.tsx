
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-clash mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-end pb-20 relative">
          <div className="max-w-4xl">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-clash mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
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
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                Completion
              </div>
              <div className="font-medium">{project.completion}</div>
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
          <div className="prose prose-lg dark:prose-invert mb-16 max-w-none">
            <p>{project.content.introduction}</p>
          </div>

          <div className="space-y-12">
            {[
              { title: "Week Breakdown", content: project.content.weekBreakdown },
              { title: "Testing & Debugging", content: project.content.testingAndDebugging },
              { title: "Final Project", content: project.content.finalProject },
              { title: "Gains", content: project.content.gains },
              { title: "Final Thoughts", content: project.content.finalThoughts }
            ].map((section, index) => (
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
