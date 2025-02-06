
import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const iconComponents = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
};

export const FooterSection = () => {
  return (
    <footer className="w-full py-12 bg-gradient-to-b from-white/50 to-gray-100/50 border-t border-gray-200">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks
              .filter((link) => link.active)
              .map((link) => {
                const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-green-200 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity" />
                    <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </motion.a>
                );
              })}
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm"
          >
            Gordon Edacherié All Rights Reserved ©️ {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
