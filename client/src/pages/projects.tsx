import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { useAOS } from "@/hooks/use-aos";

type ProjectCategory = "all" | "web" | "mobile" | "design";

export default function Projects() {
  const { refreshAOS } = useAOS();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  useEffect(() => {
    refreshAOS();
  }, [refreshAOS]);

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard with real-time analytics and inventory management built with React and D3.js.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      title: "Fitness Tracker App",
      description:
        "Cross-platform mobile app for workout tracking with social features and progress analytics.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      category: "mobile",
    },
    {
      title: "Brand Identity System",
      description:
        "Complete brand identity redesign including logo, color palette, and design guidelines for a tech startup.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Figma", "Illustrator", "Branding"],
      liveUrl: "#",
      githubUrl: "#",
      category: "design",
    },
    {
      title: "Social Media Platform",
      description:
        "Full-featured social platform with real-time messaging, posts, and user interactions.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      title: "AI Task Manager",
      description:
        "Intelligent task management tool with AI-powered scheduling and productivity insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "OpenAI", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      title: "Banking App UX Design",
      description:
        "Complete UX redesign for a mobile banking app focusing on accessibility and user experience.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Figma", "User Research", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#",
      category: "design",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ] as const;

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  const handleFilterChange = (filter: ProjectCategory) => {
    setActiveFilter(filter);
    setTimeout(() => {
      refreshAOS();
    }, 100);
  };

  return (
    <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-poppins font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Project Filter */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => handleFilterChange(filter.id)}
              className="transition-all duration-200"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${activeFilter}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
