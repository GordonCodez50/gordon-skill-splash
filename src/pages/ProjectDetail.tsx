import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// This would come from your CMS
const getProjectData = (id: string) => {
  // This is a mock function - replace with actual CMS data fetching
  return {
    title: "TaskFLOW",
    subtitle: "Task Management Application",
    description: "TaskFlow is an intuitive and powerful productivity application designed to help you organize tasks, manage your time effectively, and achieve your goals with ease.",
    industry: "Full Stack Saas",
    headquarters: "Bahrain",
    founded: "2025",
    companySize: "0",
    completion: "75%",
    techStack: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    introduction: "As a passionate learner in the realm of technology, I'm always searching for opportunities to explore and expand my skills. TaskFlow—my latest project, is more than just an app—it's a reflection of my journey in combining design, productivity, and user-centric focus. From conception to implementation, this project challenged me to push boundaries, integrate advanced tools, and create something impactful.",
    features: [
      {
        title: "Project Overview",
        description: "TaskFlow is a productivity application designed to help users organize tasks, manage time effectively, and optimize focus. With features like dynamic task management, an enhanced Pomodoro timer, and analytics to track productivity, the app is a comprehensive tool for anyone looking to streamline their work or study routines. It combines seamless design with robust functionality to deliver an experience that's as practical as it is intuitive."
      },
      {
        title: "Development Journey",
        description: "The foundation of TaskFlow began with a simple idea: a task manager with a built-in timer. However, as I delved deeper into the project, it became clear that there was potential to make it much more. The initial weeks were focused on setting up the basic infrastructure and user interface. I wanted a sleek, modern design that wouldn't detract users from their work. This meant implementing a dark theme with minimalistic elements, ensuring that the interface remained clean and easy to navigate."
      },
      {
        title: "Adding Features",
        description: "Once the basics were in place, I started integrating more complex functionalities: Advanced task categorization, Custom timer settings, Progress tracking analytics, Cloud synchronization, Mobile responsiveness."
      }
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  };
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectData(id || "");

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
              {project.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Location
              </div>
              <div className="font-medium">{project.headquarters}</div>
            </div>
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                Founded
              </div>
              <div className="font-medium">{project.founded}</div>
            </div>
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                <Users className="h-4 w-4 mr-2" />
                Company Size
              </div>
              <div className="font-medium">{project.companySize}</div>
            </div>
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                Industry
              </div>
              <div className="font-medium">{project.industry}</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-lg font-medium mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <div key={tech} className="px-3 py-1 rounded-full bg-purple-500/10 text-primary text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert mb-16 max-w-none">
            <p>{project.introduction}</p>
          </div>

          {/* Features */}
          <div className="space-y-12">
            {project.features.map((feature, index) => (
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
                      {feature.title}
                      <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Images */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden bg-muted"
              >
                <img 
                  src={image} 
                  alt={`Project screenshot ${index + 1}`}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;