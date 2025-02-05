
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
    <footer className="w-full py-12 bg-gradient-to-b from-background to-black/10 border-t border-purple-100/20">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-400 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity" />
                    <div className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-black/20 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900">
                      <IconComponent className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-green-400 transition-colors" />
                    </div>
                  </motion.a>
                );
              })}
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            Gordon Edacherié All Rights Reserved ©️ {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
