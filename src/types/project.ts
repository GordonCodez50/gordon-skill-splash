
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  headerImage?: string; // New field for the header image
  tags: string[];
  company: string;
  location: string;
  online: boolean;
  projectLink?: string;
  content: {
    introduction?: string;
    weekBreakdown?: string;
    testingAndDebugging?: string;
    finalProject?: string;
    gains?: string;
    finalThoughts?: string;
    process?: {
      research?: string;
      information?: string;
      gains?: string;
    };
  };
}
