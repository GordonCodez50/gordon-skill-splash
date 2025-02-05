
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  company: string;
  location: string;
  online: boolean;
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
