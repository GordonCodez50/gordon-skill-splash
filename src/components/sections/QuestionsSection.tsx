
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
    <section className="w-full py-20 bg-background">
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
          className="bg-white dark:bg-black/20 rounded-lg border border-purple-100 dark:border-purple-900 shadow-lg p-6"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((q) => (
              <AccordionItem
                key={q.id}
                value={q.id}
                className="border border-purple-100/50 dark:border-purple-900/50 rounded-lg bg-gradient-to-r hover:from-purple-50 hover:to-green-50 dark:hover:from-purple-900/10 dark:hover:to-green-900/10 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-purple-600 dark:hover:text-purple-400">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
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
