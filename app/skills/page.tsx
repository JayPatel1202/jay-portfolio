import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Wrench, Users, Brain } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Programming Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Java</span>
                      <span className="text-sm text-slate-600">Advanced</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">JavaScript</span>
                      <span className="text-sm text-slate-600">Advanced</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">TypeScript</span>
                      <span className="text-sm text-slate-600">Intermediate</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">PL/SQL</span>
                      <span className="text-sm text-slate-600">Intermediate</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">PL/SQL</Badge>
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Libraries */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-green-600" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Spring Boot</span>
                      <span className="text-sm text-slate-600">Advanced</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">React.js</span>
                      <span className="text-sm text-slate-600">Advanced</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Node.js</span>
                      <span className="text-sm text-slate-600">Advanced</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Nest.js</span>
                      <span className="text-sm text-slate-600">Intermediate</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Nest.js</Badge>
                  <Badge variant="secondary">REST API</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-purple-600" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Development Tools</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Git/GitHub
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Docker
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Linux
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        AWS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Kubernetes
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Agile
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Databases</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        MongoDB
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Elasticsearch
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SQL
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Blockchain</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        EVM Blockchains
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Smart Contracts
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Ethers.js
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Self Motivated</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Problem Solving</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Team Work</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Problem Solving Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-red-600" />
                Problem Solving & Competitive Programming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">1620+</div>
                  <div className="text-slate-600">LeetCode Rating</div>
                  <div className="text-sm text-slate-500 mt-1">Top 15% globally</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">850+</div>
                  <div className="text-slate-600">Problems Solved</div>
                  <div className="text-sm text-slate-500 mt-1">LeetCode & GeeksforGeeks</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">3+</div>
                  <div className="text-slate-600">Hackathon Wins</div>
                  <div className="text-sm text-slate-500 mt-1">Including EthGlobal</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
