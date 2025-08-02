import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import { useAOS } from "@/hooks/use-aos";

export default function Home() {
  const { refreshAOS } = useAOS();

  useEffect(() => {
    refreshAOS();
  }, [refreshAOS]);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
              Creative <span className="text-accent">Developer</span>
              <br />& Designer
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              I craft exceptional digital experiences through innovative design and cutting-edge development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                  className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
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
    </div>
  );
}
