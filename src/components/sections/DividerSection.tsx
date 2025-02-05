import { motion } from "framer-motion";
import { dividerContent } from "@/data/divider";

export const DividerSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500/5 via-green-400/5 to-purple-500/5 py-6 overflow-hidden">
      <div className="relative flex items-center whitespace-nowrap">
        {[0, 1].map((loopIndex) => (
          <motion.div
            key={loopIndex}
            className="flex gap-12"
            style={{ position: "absolute", whiteSpace: "nowrap" }}
            animate={{ x: ["-100%", "0%"] }} // Left to right animation
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {dividerContent.texts.map((text, index) => (
              <span
                key={`${loopIndex}-${index}`}
                className="text-lg font-clash bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-400"
              >
                {text}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
