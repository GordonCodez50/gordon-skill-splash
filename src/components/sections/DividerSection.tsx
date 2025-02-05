import { motion } from "framer-motion";
import { dividerContent } from "@/data/divider";

export const DividerSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500/5 via-green-400/5 to-purple-500/5 py-6 overflow-hidden">
      <div className="relative flex items-center">
        {/* Scrolling Text - Looping Effect */}
        {[0, 1].map((loopIndex) => (
          <motion.div
            key={loopIndex}
            className="whitespace-nowrap flex gap-12 absolute"
            style={{ left: loopIndex === 1 ? "100%" : "0%" }}
            animate={{ x: ["0%", "-100%"] }}
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
