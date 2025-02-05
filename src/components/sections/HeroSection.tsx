import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link"; // Import Link component for navigation

const roles = [
  "A Computer Enthusiast",
  "High School Grad",
  "All Around Techy",
  "Cyber Analyst",
  "Video Editor",
  "A Web Designer",
  "Digital Creator"
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50); // Faster initial typing speed
  const [isPaused, setIsPaused] = useState(false);

  // Mouse position for interactive gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (isPaused) return;

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, currentRole, isDeleting, isPaused]);

  const tick = () => {
    let fullText = roles[currentRole];
    let updatedText = isDeleting 
      ? text.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
        setDelta(30); // Even faster deletion speed
      }, 1000); // 1 second pause when word is complete
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setDelta(50); // Reset to faster typing speed
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Interactive gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-green-300/20 to-purple-300/30 animate-gradient-xy"
        style={{
          background: "linear-gradient(-45deg, rgba(155, 135, 245, 0.4), rgba(126, 105, 171, 0.4), rgba(242, 252, 226, 0.4), rgba(214, 188, 250, 0.4))",
          backgroundSize: "400% 400%",
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)",
          x: springX,
          y: springY,
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.span
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                Looking for Colleges
              </motion.span>
              
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-clash tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Meet Gordon:
                  <div 
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mt-1"
                    style={{ minHeight: "2.6em" }} // Adjust height if needed
                  >
                    {text}
                  </div>
                </motion.h1>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Passionate about everything tech, from coding and web design to 3D animation and graphic design. 
              As a dedicated student at the Indian School Bahrain, I've honed my skills in mathematics, science, 
              and the arts, all while pursuing my dream of becoming a leading computer science engineer.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* View My Work Button with Link */}
              <Button size="lg" className="group">
                <Link href="/projects"> {/* Add the link here */}
                  View My Work
                </Link>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Profile Image with 3D hover effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/lovable-uploads/bd79ebd9-6b93-438a-8282-c2c96bcd46f8.png"
                alt="Gordon's Profile"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Status badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm flex items-center gap-2 w-fit"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Gordon is now studying in 11th Grade
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
