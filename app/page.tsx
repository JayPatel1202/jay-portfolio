import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Software Development Engineer
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
                Hi, I'm <span className="text-blue-600">Jaykumar Patel</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Passionate Software Engineer with expertise in full-stack
                development, blockchain technology, and scalable system
                architecture. Currently building innovative solutions at
                KitSolutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://drive.google.com/uc?export=download&id=1FBLHa--4Bb4yhcZlG2YADiDiSmO9f6QH"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              {/* <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button> */}
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/patelljay/"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/JayPatel1202" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://leetcode.com/u/jaypatel12/" target="_blank">
                  <Code className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Image
                src="/profile.jpg?height=300&width=300"
                alt="Jaykumar Patel"
                width={300}
                height={300}
                className="rounded-full border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">1.5+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">850+</div>
            <div className="text-slate-600">Problems Solved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">1620+</div>
            <div className="text-slate-600">LeetCode Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">3+</div>
            <div className="text-slate-600">Hackathon Wins</div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development and blockchain technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">LinkedHub</h3>
                <Badge>Microservices</Badge>
              </div>
              <p className="text-slate-600">
                Scalable LinkedIn clone with 6 microservices using Spring Boot,
                Docker & Kubernetes
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">Spring Boot</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
              </div>
              <Button variant="outline" asChild>
                <Link href="/projects">View Details</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">DigiCerti</h3>
                <Badge>Blockchain</Badge>
              </div>
              <p className="text-slate-600">
                Blockchain-based certificate verification system with
                tamper-proof validation
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">MERN Stack</Badge>
                <Badge variant="secondary">Blockchain</Badge>
                <Badge variant="secondary">Smart Contracts</Badge>
              </div>
              <Button variant="outline" asChild>
                <Link href="/projects">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
