
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cs50p",
    title: "Harvard CS50P",
    description: "A Course from Harvard University on Computer-Science In Python",
    image: "/placeholder.svg",
    tags: ["Education", "Python", "Computer Science"],
    company: "Harvard University",
    location: "Cambridge, Massachusetts, United States",
    online: true,
    completion: "75%",
    proficiency: "84%",
    content: {
      introduction: "As a computer science enthusiast, I'm always on the lookout for opportunities to sharpen my skills. When I discovered CS50P (Introduction to Programming with Python), a highly regarded course from Harvard University, I knew it would be the perfect next step in my learning journey.",
      weekBreakdown: "The course begins with simple projects that introduce the basic syntax and functionality of Python, like creating a tip calculator or interpreting file extensions. While Week 0 eased me in, it wasn't long before the challenges escalated.",
      testingAndDebugging: "By Week 5, I was introduced to testing, an aspect of programming that's often overlooked by beginners. I built a program that required testing different conditions and validating responses.",
      finalProject: "For my final project, I created a comprehensive school management program with a graphical user interface (GUI).",
      gains: "Completing CS50P has been an invaluable part of my programming journey.",
      finalThoughts: "CS50P was a challenging yet rewarding experience that reaffirmed my passion for technology and problem-solving.",
      process: {
        research: "Throughout the CS50P course, research and analysis were integral to my learning journey.",
        information: "CS50P is an introductory programming course that focuses on Python.",
        gains: "Completing CS50P has significantly enhanced my programming abilities."
      }
    }
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "Description of project two",
    image: "/placeholder.svg",
    tags: ["Mobile", "React Native"],
    company: "Company Two",
    location: "Location Two",
    online: false,
    completion: "90%",
    proficiency: "92%",
    content: {
      introduction: "Introduction to project two",
      weekBreakdown: "Weekly progress of project two",
      testingAndDebugging: "Testing process for project two",
      finalProject: "Final implementation of project two",
      gains: "What was learned from project two",
      finalThoughts: "Concluding thoughts on project two",
      process: {
        research: "Research phase of project two",
        information: "Key information about project two",
        gains: "Skills gained from project two"
      }
    }
  },
  {
    id: "project-three",
    title: "Project Three",
    description: "Description of project three",
    image: "/placeholder.svg",
    tags: ["AI", "Python", "TensorFlow"],
    company: "Company Three",
    location: "Location Three",
    online: true,
    completion: "85%",
    proficiency: "88%",
    content: {
      introduction: "Introduction to project three",
      weekBreakdown: "Weekly progress of project three",
      testingAndDebugging: "Testing process for project three",
      finalProject: "Final implementation of project three",
      gains: "What was learned from project three",
      finalThoughts: "Concluding thoughts on project three",
      process: {
        research: "Research phase of project three",
        information: "Key information about project three",
        gains: "Skills gained from project three"
      }
    }
  }
];
