
export interface Testimonial {
  id: string;
  name: string;
  title: string;
  image: string;
  testimonial: string;
  isTeacher: boolean;
  recommendationLetter?: string;
  enableHoverEffects?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    title: "Computer Science Professor at ISB",
    image: "/lovable-uploads/teacher1.png",
    testimonial: "Gordon is an exceptional student with remarkable problem-solving abilities. His passion for technology and creative approach to challenges sets him apart.",
    isTeacher: true,
    recommendationLetter: "/lovable-uploads/recommendation1.png",
    enableHoverEffects: true
  },
  {
    id: "2",
    name: "Prof. James Wilson",
    title: "Head of Mathematics Department",
    image: "/lovable-uploads/teacher2.png",
    testimonial: "A brilliant mind with an extraordinary grasp of mathematical concepts. Gordon's innovative thinking and dedication to excellence are truly inspiring.",
    isTeacher: true,
    recommendationLetter: "/lovable-uploads/recommendation2.png",
    enableHoverEffects: true
  },
  {
    id: "3",
    name: "Emily Chen",
    title: "Tech Club Mentor",
    image: "/lovable-uploads/mentor1.png",
    testimonial: "Working with Gordon in the Tech Club has been a joy. His leadership skills and technical expertise have greatly contributed to our projects' success.",
    isTeacher: false,
    enableHoverEffects: true
  }
];
