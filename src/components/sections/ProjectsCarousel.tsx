import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick"; // Importing slick carousel

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
];

export const ProjectsCarousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null); // Creating a ref for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight className="h-6 w-6 text-muted-foreground" />, // Optional custom arrows
    prevArrow: <ArrowRight className="h-6 w-6 text-muted-foreground transform rotate-180" />,
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="ghost" className="group" onClick={() => sliderRef?.slickNext()}>
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Adding the slider */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.title} className="group overflow-hidden">
              <Card className="group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
