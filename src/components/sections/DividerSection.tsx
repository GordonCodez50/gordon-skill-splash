
import { motion } from "framer-motion";
import { dividerContent } from "@/data/divider";

export const DividerSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500/5 via-green-400/5 to-purple-500/5 py-6 overflow-hidden">
      <div className="relative flex items-center">
        <motion.div
          className="whitespace-nowrap flex gap-8"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="text-lg font-clash bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-400"
            >
              {dividerContent.text}
            </span>
          ))}
        </motion.div>
        
        {/* Duplicate for seamless loop */}
        <motion.div
          className="whitespace-nowrap flex gap-8 absolute left-full"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="text-lg font-clash bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-400"
            >
              {dividerContent.text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
