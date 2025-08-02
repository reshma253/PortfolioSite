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
    <Card className="project-card bg-white/60 backdrop-blur-sm shadow-xl overflow-hidden group border-0" data-category={category}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
      <CardContent className="p-6 relative">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium flex items-center gap-1 hover:scale-105 transform transition-transform"
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 hover:scale-105 transform transition-transform"
            >
              GitHub
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
