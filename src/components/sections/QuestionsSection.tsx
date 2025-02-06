
import { questions } from "@/data/questions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const QuestionsSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-clash mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-400"
        >
          Common Questions Answered
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-box"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((q) => (
              <AccordionItem
                key={q.id}
                value={q.id}
                className="border border-purple-100 rounded-lg bg-white hover:bg-purple-50/50 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-purple-600">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white rounded-lg shadow-sm border border-purple-50 text-gray-600">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
