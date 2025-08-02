import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  category,
}: ProjectCardProps) {
  return (
    <motion.div
      className="enhanced-project-card gradient-card rounded-xl overflow-hidden group border-0"
      data-category={category}
      whileHover={{ y: -12, rotateX: 5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="project-image w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
        </motion.div>
      </div>
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-xl font-poppins font-semibold mb-2 group-hover:text-primary transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <p className="text-muted-foreground mb-4 leading-relaxed font-inter">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge variant="secondary" className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-0 font-inter">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium flex items-center gap-1 font-inter"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 font-inter"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
