import { motion } from "framer-motion";
import { dividerContent } from "@/data/divider";

export const DividerSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500/5 via-green-400/5 to-purple-500/5 py-6 overflow-hidden">
      <div className="relative flex items-center">
        {/* First Motion Div (Scrolling text from left to right) */}
        <motion.div
          className="whitespace-nowrap flex gap-8"
          initial={{ x: "100%" }} // Start off-screen to the right
          animate={{
            x: ["100%", "-100%"], // Scroll from right to left
          }}
          transition={{
            duration: 60, // Scroll across in 1 minute
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-8">
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

        {/* Second Motion Div (Duplicate for seamless loop) */}
        <motion.div
          className="whitespace-nowrap flex gap-8 absolute left-full"
          initial={{ x: "100%" }} // Start off-screen to the right
          animate={{
            x: ["100%", "-100%"], // Scroll from right to left
          }}
          transition={{
            duration: 60, // Scroll across in 1 minute
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-8">
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
