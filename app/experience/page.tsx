import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Calendar, MapPin } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My professional journey in software development, from internships to full-time roles.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {/* Current Role */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Software Development Engineer</CardTitle>
                    <div className="flex items-center gap-2 text-slate-600 mt-1">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">KITSOLUTIONS</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>July 2024 – May 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Vadodara, IND</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Contributed to optimizing Mapbox integration for aerospace applications, reducing frontend tile
                      load times by 15%, and implemented geometric algorithms (point reflection and projection) for
                      dynamic pattern drawing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Identified, analyzed, and resolved 10+ bugs in aerospace system backends, enhancing stability and
                      performance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Led requirement-gathering sessions with aerospace clients translating needs into actionable
                      specifications and provided technical suggestions to streamline development.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Created and implemented cron jobs for automated data processing and Elasticsearch integration for
                      master search, boosting processing efficiency and search accuracy across large datasets.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Mapbox</Badge>
                  <Badge variant="secondary">Elasticsearch</Badge>
                  <Badge variant="secondary">Cron Jobs</Badge>
                  <Badge variant="secondary">Aerospace Systems</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Internship 1 */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Software Development Intern</CardTitle>
                    <div className="flex items-center gap-2 text-slate-600 mt-1">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">GAURA WEB TECHNOLOGY</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 2024 – June 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Ahmedabad, IND</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Led end-to-end backend development, from client requirements to implementation, including scalable
                      cron jobs for automated trade commission distribution.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Developed accurate API connectors and error-handling methods to improve MetaTrader5 (MT5)
                      integration, which led to a 20% increase in trade management effectiveness.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Backend Development</Badge>
                  <Badge variant="secondary">MetaTrader5</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                  <Badge variant="secondary">Cron Jobs</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Internship 2 */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Jr. Blockchain & Web Developer Intern</CardTitle>
                    <div className="flex items-center gap-2 text-slate-600 mt-1">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">GAURA WEB TECHNOLOGY</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>April 2023 – June 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Ahmedabad, IND</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Improved server response times by 25% through backend API optimization in Node.js, enhancing
                      overall application performance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Developed and deployed secure Dutch and English auction smart contracts for transparent, seamless
                      bidding.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Integrated auction smart contracts with the frontend via Ethers.js for seamless real-time
                      interaction.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Blockchain</Badge>
                  <Badge variant="secondary">Smart Contracts</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Ethers.js</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
