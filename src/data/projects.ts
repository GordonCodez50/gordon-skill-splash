import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cs50p",
    title: "Harvard's CS50P",
    description: "A Course from Harvard University on Computer-Science In Python",
    image: "/placeholder.svg",
    headerImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Education", "Python", "Computer Science"],
    company: "Harvard University",
    location: "Cambridge, United States",
    online: true,
    projectLink: "https://cs50.harvard.edu/python/2022/",
    content: {
      introduction: "As a computer science enthusiast, I'm always on the lookout for opportunities to sharpen my skills. When I discovered CS50P (Introduction to Programming with Python), a highly regarded course from Harvard University, I knew it would be the perfect next step in my learning journey.",
      weekBreakdown: "The course begins with simple projects that introduce the basic syntax and functionality of Python, like creating a tip calculator or interpreting file extensions. While Week 0 eased me in, it wasn't long before the challenges escalated.",
      testingAndDebugging: "By Week 5, I was introduced to testing, an aspect of programming that's often overlooked by beginners. I built a program that required testing different conditions and validating responses.",
      finalProject: "For my final project, I developed a comprehensive Python application that demonstrated the culmination of all concepts learned throughout the course.",
      gains: "Through this course, I gained proficiency in Python programming, problem-solving skills, and a deep understanding of computer science fundamentals.",
      finalThoughts: "CS50P was a challenging yet rewarding experience that reaffirmed my passion for technology and problem-solving.",
      process: {
        research: "Throughout the CS50P course, research and analysis were integral to my learning journey.",
        information: "CS50P is an introductory programming course that focuses on Python.",
        gains: "Completing CS50P has significantly enhanced my programming abilities."
      }
    }
  },
  {
  "id": "TFSaas",
  "title": "TaskFlow",
  "description": "An intuitive and powerful task management dashboard designed to help users organize tasks, manage time effectively, and achieve their goals with ease.",
  "image": "/placeholder.svg",
  "tags": ["React Native", "TypeScript", "HTML", "CSS"],
  "company": "Company Two",
  "location": "Location Two",
  "online": True,
  "content": {
    "introduction": "As a passionate learner in the realm of technology, I’m always searching for opportunities to explore and expand my skills. TaskFlow, my latest project, is more than just an app—it’s a reflection of my journey in combining design, functionality, and user experience. From conceptualization to implementation, this project challenged me to push boundaries, integrate advanced tools, and create something impactful.",
    "weekBreakdown": "The initial weeks were focused on setting up the core infrastructure and designing an intuitive user interface. A clean, modern design with a dark theme was prioritized to maintain user focus. As the project evolved, I added robust task management, a dynamic Pomodoro timer, music integration, and analytics features to enhance productivity. Iterative testing and feedback ensured a seamless user experience.",
    "testingAndDebugging": "During testing, I focused on ensuring smooth API integrations, optimizing performance, and refining the user interface. The Pomodoro timer and notification system were tested rigorously for accuracy and reliability. Cross-device compatibility was also a priority, ensuring that the app worked flawlessly across various screen sizes and operating systems.",
    "finalProject": "The final implementation of TaskFlow includes an enhanced Pomodoro timer, a task management system with categorization and due dates, integrated music options via Spotify/SoundCloud, and productivity analytics with real-time tracking. The combination of these features makes TaskFlow a comprehensive productivity tool.",
    "gains": "Throughout this project, I enhanced my skills in React Native, API integration, UI/UX design, and performance optimization. I also gained experience in handling real-time notifications and data visualization for analytics.",
    "finalThoughts": "TaskFlow represents my growth as a developer, from understanding user needs to integrating advanced features. It’s a project I’m proud of, and one that has reinforced my ability to create functional and user-friendly applications.",
    "process": {
      "research": "The research phase focused on identifying common productivity challenges and exploring effective task management methodologies. I analyzed existing solutions to determine how TaskFlow could provide a unique and improved user experience.",
      "information": "TaskFlow combines essential productivity features into one platform, integrating task management, focus tools, and analytics to create a seamless workflow for users.",
      "gains": "The project helped me develop expertise in React Native, API handling, and UI/UX design, while also improving my ability to create efficient and scalable applications."
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
    content: {
      introduction: "Introduction to project three",
      weekBreakdown: "Weekly progress of project three",
      testingAndDebugging: "Testing process for project three",
      finalProject: "Final implementation details of project three",
      gains: "Advanced AI and machine learning competencies",
      finalThoughts: "Concluding thoughts on project three",
      process: {
        research: "Research phase of project three",
        information: "Key information about project three",
        gains: "Skills gained from project three"
      }
    }
  }
];
