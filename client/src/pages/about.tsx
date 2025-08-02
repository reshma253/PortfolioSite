import { useEffect } from "react";
import { SkillBar } from "@/components/ui/skill-bar";
import { Badge } from "@/components/ui/badge";
import { useAOS } from "@/hooks/use-aos";

export default function About() {
  const { refreshAOS } = useAOS();

  useEffect(() => {
    refreshAOS();
  }, [refreshAOS]);

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

  return (
    <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-poppins font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Professional headshot"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold mb-6">Hi, I'm Alex Johnson</h2>
            <p className="text-muted-foreground mb-6">
              A passionate full-stack developer with over 5 years of experience creating digital
              solutions that make a difference. I specialize in modern web technologies and have a
              keen eye for design that enhances user experience.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you'll find me exploring new design trends, contributing to
              open-source projects, or hiking in the great outdoors. I believe in continuous
              learning and staying at the forefront of technology.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
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
    </div>
  );
}
