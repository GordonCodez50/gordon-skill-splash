import { motion } from "framer-motion";
import { dividerContent } from "@/data/divider";

export const DividerSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500/5 via-green-400/5 to-purple-500/5 py-6 overflow-hidden">
      <div className="relative flex items-center whitespace-nowrap">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["-100%", "0%"] }} // Moves left to right
          transition={{
            duration: 25, // 25-second smooth scroll
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-12">
              {dividerContent.texts.map((text, index) => (
                <span
                  key={`${loopIndex}-${index}`}
                  className="text-lg font-clash bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-400"
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
