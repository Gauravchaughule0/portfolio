"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    "Java",
    "Spring Boot",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "PostgreSQL",
    "Tailwind CSS",
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      school: "GES's R.H. Sapat COE Nashik",
      year: "2021-2023",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "K.V.N. Naik College Nashik",
      year: "2018-2021",
    },
  ];

  const experience = [
    {
      title: "Full Stack Java Developer",
      company: "Ampcus Tech PVT. LTD.",
      period: "Mar 2023 - Present",
      description:
        "Developed scalable web applications. Implemented microservices architecture, Handled Cloud Infrastructure and improved system performance by 40%.",
    },
  ];

  const projects = [
    {
      title: "ComplyX",
      description:
        "A compliance automation platform designed to help enterprises streamline regulatory, risk, and audit workflows. It provides modules for Third-Party Risk Management, PCI-DSS compliance, and ESG monitoring, with capabilities for continuous assessment, audit readiness, and integration with industry standards like HITRUST, ISO, and SOC 2.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Next.js",
        "Java Spring Boot",
        "Python",
        "PostgresQL",
        "Tailwind CSS",
        "Socket.io",
      ],
      features: [
        "Real-time suppliers monitoring",
        "Real-time global disaster discovery",
        "Admin dashboard with analytics and statistics",
        "Responsive design",
        "User authentication & authorization",
      ],
    },
    {
      title: "Acquaa",
      description:
        "A water utility management system that includes specialized modules such as the Fire Hydrant Permits Module, enabling municipalities and utilities to efficiently process, track, and manage fire hydrant usage requests, permits, and compliance records.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Next.js",
        "Java/Kotlin Spring Boot",
        "PostgresQL",
        "Tailwind CSS",
        "Socket.io",
      ],
      features: [
        "Payment Integration",
        "Payment Components Management",
        "Permit requests management",
        "Responsive design",
        "User authentication & authorization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "education",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section
                      ? "text-purple-400"
                      : "text-white hover:text-purple-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {[
                "home",
                "about",
                "education",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-white hover:text-purple-300 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <Image
              src="/1000172607.png"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-purple-400 shadow-2xl animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold pb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
            Gaurav Chaughule
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
            Full-Stack Java Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            Passionate about creating innovative solutions and building scalable
            applications that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with 2+ years of experience
              building web applications. I love turning complex problems into
              simple, beautiful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <User className="text-purple-400" size={32} />
                <h3 className="text-2xl font-semibold text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Started my journey in computer science with a passion for
                problem-solving. Over the past 2+ years, I’ve worked as a Full
                Stack Java Developer, building scalable web applications using
                technologies like Spring Boot, React, Next.js, and AWS. My
                experience spans projects ranging from business websites to
                enterprise-grade applications with microservices architecture
                and secure APIs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the
                latest tools and practices—especially in cloud infrastructure
                and modern web frameworks—to deliver efficient, reliable, and
                future-ready solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-4">
                <Code className="text-purple-400" size={32} />
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-900/30 text-purple-300 border-purple-400/30 p-3 text-center justify-center hover:bg-purple-800/40 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-white/5 border-purple-400/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-purple-400 mt-1" size={24} />
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-purple-300 text-lg">
                        {edu.school}
                      </CardDescription>
                      <p className="text-gray-400 mt-1">{edu.year}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/5 border-purple-400/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Briefcase className="text-purple-400 mt-1" size={24} />
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-purple-300 text-lg">
                        {exp.company}
                      </CardDescription>
                      <p className="text-gray-400 mt-1">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Project
            </h2>
          </div>

          {projects.map((project, i) => (
            <Card
              key={i}
              className="bg-white/5 border-purple-400/30 backdrop-blur-sm overflow-hidden animate-fade-in-up mb-8"
            >
              <div className="grid md:grid-cols-1 gap-0">
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-white text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Key Features:
                    </h4>
                    <ul className="text-gray-300 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-900/30 text-purple-300 border-purple-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-purple-400/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in-up">
              <Mail className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">gauravchaughule0007@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-purple-400/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in-up animation-delay-200">
              <Phone className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+91 96239 49245</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-purple-400/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in-up animation-delay-400">
              <MapPin className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Maharashtra, India</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <Link href="https://github.com" target="_blank">
                <Github size={20} className="mr-2" />
                GitHub
              </Link>
            </Button> */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <Link
                href="https://www.linkedin.com/in/gaurav-chaughule-459405229"
                target="_blank"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>

          {/* Resume Download and Preview */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
            >
              <Link href="/Gaurav_Chaughule_Resume.pdf" download>
                <Download size={20} className="mr-2" />
                Download Resume
              </Link>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
                >
                  Preview Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] bg-slate-900 border-purple-400/30">
                <DialogHeader>
                  <DialogTitle className="text-white">
                    Resume Preview
                  </DialogTitle>
                </DialogHeader>
                <div className="w-full h-[70vh] bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="/Gaurav_Chaughule_Resume.pdf"
                    className="w-full h-full"
                    title="Resume Preview"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Gaurav Chaughule. All rights reserved. Built with ❤ and Joy.
          </p>
        </div>
      </footer>
    </div>
  );
}
