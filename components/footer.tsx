import Link from "next/link";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">Jaykumar Patel</span>
            </div>
            <p className="text-slate-400 text-sm">
              Software Development Engineer passionate about building scalable
              applications and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>jaypatell.atwork@gmail.com</li>
              <li>+91 8866551202</li>
              <li>Vadodara, Gujarat, India</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/patelljay/"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/JayPatel1202" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:jaypatell.atwork@gmail.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://leetcode.com/u/jaypatel12/" target="_blank">
                  <Code className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Jaykumar Patel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
