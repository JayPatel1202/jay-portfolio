import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Users, Trophy } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About Me</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A passionate software engineer with a strong foundation in computer science and hands-on experience in
              building scalable applications.
            </p>
          </div>

          {/* Education */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science Engineering</h3>
                  <p className="text-slate-600">IIIT Vadodara • Graduated May 2024</p>
                  <p className="text-slate-600">Cumulative GPA: 7.41 / 10</p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Data Structures and Algorithms</Badge>
                    <Badge variant="outline">Object Oriented Programming</Badge>
                    <Badge variant="outline">Operating Systems</Badge>
                    <Badge variant="outline">Database Management System</Badge>
                    <Badge variant="outline">Computer Networking</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Winner of HackOverflow Hackathon</h4>
                      <p className="text-sm text-slate-600">First place in competitive programming hackathon</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Pool Prize Winner - EthGlobal Scaling Ethereum 2023</h4>
                      <p className="text-sm text-slate-600">Recognized for innovative blockchain solution</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Finalist - Azadi Ka Amrit Mahotsava Hackathon</h4>
                      <p className="text-sm text-slate-600">Gujarat State Level Competition 2022-23</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">LeetCode Rating: 1620+</h4>
                      <p className="text-sm text-slate-600">Solved 850+ problems on LeetCode and GeeksforGeeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership & Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Leadership & Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Club Leadership</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Member of Finance Club</li>
                    <li>• Secretary of Cricket Club</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Event Volunteering</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Technical Fest Volunteer</li>
                    <li>• Cultural Fest Volunteer</li>
                    <li>• Code-O-Fiesta Coding Contest</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Coursera</h4>
                  <p className="text-slate-600">Blockchain Specialization</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Coding Shuttle</h4>
                  <p className="text-slate-600">Spring Boot 0 to 100</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">LinkedIn Learning</h4>
                  <p className="text-slate-600">HTML, CSS, JavaScript, Java, Linux, SQL</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
