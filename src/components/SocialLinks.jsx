import React from 'react';
import { Instagram, Linkedin, Twitter, Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks = ({ social }) => {
  if (!social) return null;

  const iconMap = {
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    website: Globe,
  };

  const socialItems = Object.entries(social).map(([platform, url]) => ({
    platform,
    url,
    Icon: iconMap[platform] || Globe,
  }));

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {socialItems.map(({ platform, url, Icon }, index) => (
        <motion.a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.1 }}
          className="relative group h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-indigo-50 cursor-pointer"
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 transition-colors group-hover:text-indigo-600" />
          
          {/* Tooltip or indicator */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
