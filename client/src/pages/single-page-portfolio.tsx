import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/project-card";
import { SkillBar } from "@/components/ui/skill-bar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Code, Palette, Zap, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { sendEmail } from "@/lib/emailjs";
import { useAOS } from "@/hooks/use-aos";

type ProjectCategory = "all" | "web" | "mobile" | "design";

export default function SinglePagePortfolio() {
  const { refreshAOS } = useAOS();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    refreshAOS();
  }, [refreshAOS]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Services data
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Vue.js, TypeScript, and modern CSS frameworks",
      delay: 100,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design with Figma and Adobe Creative Suite",
      delay: 200,
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fast loading, SEO-optimized, and accessible web applications",
      delay: 300,
    },
  ];

  // Skills data
  const skills = [
    { name: "JavaScript & TypeScript", percentage: 95 },
    { name: "React & Vue.js", percentage: 90 },
    { name: "Node.js & Express", percentage: 85 },
    { name: "UI/UX Design", percentage: 88 },
    { name: "Python & Django", percentage: 80 },
    { name: "Database Management", percentage: 82 },
  ];

  const technologies = ["JavaScript", "React", "Node.js", "Python", "UI/UX"];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Led development of responsive web applications serving 100k+ users. Implemented modern React patterns and optimized performance by 40%.",
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2019 - 2021",
      description:
        "Built end-to-end web solutions using MERN stack. Collaborated with design team to create intuitive user interfaces.",
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2018 - 2019",
      description:
        "Developed custom WordPress themes and plugins. Gained experience in client communication and project management.",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard with real-time analytics and inventory management built with React and D3.js.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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

  // Contact info
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.johnson@email.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      color: "text-green-500",
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="gradient-bg pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative">
        <div className="hero-pattern absolute inset-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left" data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
                Creative <span className="text-accent">Developer</span>
                <br />& Designer
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                I craft exceptional digital experiences through innovative design and cutting-edge development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
              <div className="animate-bounce lg:hidden">
                <ChevronDown 
                  className="w-8 h-8 text-white mx-auto cursor-pointer" 
                  onClick={() => scrollToSection('services')}
                />
              </div>
            </div>
            <div className="hidden lg:block" data-aos="fade-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                  alt="Professional headshot"
                  className="rounded-full w-80 h-80 object-cover mx-auto masked-image shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 section-divider">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-poppins font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground">
              Specialized in creating modern, responsive web applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border-0"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                      <Icon className="w-10 h-10 text-primary relative z-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 to-accent/10 section-divider">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-poppins font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right" className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
                  alt="Professional workspace"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover h-96"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-6">Hi, I'm Alex Johnson</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A passionate full-stack developer with over 5 years of experience creating digital
                solutions that make a difference. I specialize in modern web technologies and have a
                keen eye for design that enhances user experience.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open-source projects, or hiking in the great outdoors. I believe in continuous
                learning and staying at the forefront of technology.
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/60 text-foreground border-0">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                {skills.slice(0, 3).map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
              <div>
                {skills.slice(3).map((skill, index) => (
                  <SkillBar
                    key={index + 3}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={(index + 3) * 200}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-8 text-center">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-1"></div>
                  <div>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-accent font-medium">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 section-divider">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-poppins font-bold mb-4">My Projects</h2>
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
                className={`transition-all duration-200 ${
                  activeFilter === filter.id 
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg" 
                    : "bg-white/60 border-primary/20 hover:bg-primary/10"
                }`}
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5 section-divider">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-poppins font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to work on new projects and collaborate with passionate people.
                Whether you have a project in mind or just want to chat about technology and design,
                feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${info.color}/10 rounded-full flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card data-aos="fade-left" className="bg-white/70 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-2 bg-white/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-2 bg-white/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry"
                      className="mt-2 bg-white/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="mt-2 resize-none bg-white/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}