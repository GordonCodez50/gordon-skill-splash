
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { testimonials } from '@/data/testimonials';
import { X } from 'lucide-react';

export const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="py-24 bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-clash mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 animate-gradient-xy"
          style={{ y: yHeading, opacity: opacityHeading }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={testimonial.enableHoverEffects ? { scale: 1.02, rotateY: 5 } : {}}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-green-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 h-full">
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="relative w-16 h-16 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-clash text-xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                
                <blockquote className="mt-4 text-foreground/80 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {testimonial.isTeacher && testimonial.recommendationLetter && (
                  <motion.button
                    onClick={() => setSelectedLetter(testimonial.recommendationLetter)}
                    className="mt-4 inline-block text-sm px-4 py-2 bg-gradient-to-r from-purple-600 to-green-400 text-white rounded-md hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Recommendation Letter
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedLetter} onOpenChange={() => setSelectedLetter(null)}>
          <DialogContent className="max-w-4xl w-full p-0">
            <button
              onClick={() => setSelectedLetter(null)}
              className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 backdrop-blur-sm"
            >
              <X className="h-4 w-4" />
            </button>
            {selectedLetter && (
              <img
                src={selectedLetter}
                alt="Recommendation Letter"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};
