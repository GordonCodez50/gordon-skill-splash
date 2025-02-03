import { Card, CardContent } from "@/components/ui/card";
import { Shield, Video, Palette, Code } from "lucide-react";

const skills = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protecting digital assets with advanced security measures"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Creating compelling visual stories through video"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Crafting beautiful and functional designs"
  },
  {
    icon: Code,
    title: "Coding",
    description: "Building robust and scalable applications"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            I'm a passionate tech enthusiast with expertise across multiple domains.
            My goal is to create innovative solutions that combine security, functionality, and aesthetic appeal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <skill.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};