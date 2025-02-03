import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// This would come from your CMS
const getProjectData = (id: string) => {
  // This is a mock function - replace with actual CMS data fetching
  return {
    title: "Harvard CS50P",
    subtitle: "A Course from Harvard University on Computer-Science In Python",
    industry: "Cybersecurity",
    headquarters: "Cambridge, Massachusetts, United States",
    founded: "1636",
    companySize: "100000-1000000",
    completion: "75%",
    pythonProficiency: "84%",
    introduction: "As a computer science enthusiast, I'm always on the lookout for opportunities to sharpen my skills...",
    process: [
      {
        step: "01",
        title: "Research & Analysis",
        description: "Throughout the CS50P course, research and analysis were integral..."
      },
      {
        step: "02",
        title: "Information",
        description: "CS50P is an introductory programming course that focuses on Python..."
      },
      {
        step: "03",
        title: "What i Gained",
        description: "Completing CS50P has been a transformative experience..."
      }
    ]
  };
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectData(id || "");

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-clash mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600"
          >
            {project.title}
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-8">{project.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                <h3 className="text-lg font-clash mb-2">Industry</h3>
                <p>{project.industry}</p>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                <h3 className="text-lg font-clash mb-2">Headquarters</h3>
                <p>{project.headquarters}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                <h3 className="text-lg font-clash mb-2">Founded</h3>
                <p>{project.founded}</p>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20">
                <h3 className="text-lg font-clash mb-2">Company size</h3>
                <p>{project.companySize}</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-clash mb-4">Introduction</h2>
            <p>{project.introduction}</p>
          </div>

          <div className="space-y-12">
            {project.process.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-clash text-purple-500">{step.step}</span>
                  <h3 className="text-2xl font-clash">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;