import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Database, Cloud, Shield } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Projects</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating expertise in full-stack development, microservices
              architecture, and blockchain technology.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LinkedHub Project */}
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Code className="h-6 w-6 text-blue-600" />
                      LinkedHub
                    </CardTitle>
                    <p className="text-slate-600 mt-2">Scalable LinkedIn Clone with Microservices</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="#" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="#" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-700">
                  A comprehensive LinkedIn clone built with modern microservices architecture, featuring 6 independent
                  services for scalability and maintainability.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-blue-600" />
                      Architecture & Deployment
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-6">
                      <li>• Designed 6 microservices using Spring Boot framework</li>
                      <li>• Containerized with Docker for consistent deployment</li>
                      <li>• Orchestrated via Kubernetes for seamless horizontal scaling</li>
                      <li>• Implemented API gateway with load balancing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Database className="h-4 w-4 text-green-600" />
                      Key Features
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-6">
                      <li>• Circuit breaking patterns for fault tolerance</li>
                      <li>• Service discovery for dynamic routing</li>
                      <li>• Separate services for users, posts, and connections</li>
                      <li>• Real-time data synchronization</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge>Java</Badge>
                  <Badge>Spring Boot</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>Microservices</Badge>
                  <Badge>API Gateway</Badge>
                </div>
              </CardContent>
            </Card>

            {/* DigiCerti Project */}
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Shield className="h-6 w-6 text-green-600" />
                      DigiCerti
                    </CardTitle>
                    <p className="text-slate-600 mt-2">Blockchain Certificate Verification System</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="#" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="#" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-700">
                  A revolutionary certificate verification platform leveraging blockchain technology to ensure
                  tamper-proof validation and eliminate certificate fraud.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      Blockchain Integration
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-6">
                      <li>• Secure blockchain-based validation system</li>
                      <li>• Tamper-proof certificate storage on-chain</li>
                      <li>• QR code integration for instant verification</li>
                      <li>• Immutable data integrity guarantees</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-blue-600" />
                      Development & Collaboration
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-6">
                      <li>• Built during SSIP Hackathon with team of four</li>
                      <li>• Full-stack MERN implementation</li>
                      <li>• Custom digital certificate system design</li>
                      <li>• Real-time verification capabilities</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge>MongoDB</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>React.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Blockchain</Badge>
                  <Badge>Smart Contracts</Badge>
                  <Badge>QR Codes</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Projects Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Other Notable Work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mapbox Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Optimized Mapbox integration for aerospace applications, reducing tile load times by 15%.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Mapbox
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Performance
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Aerospace
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">MetaTrader5 Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Developed API connectors improving MT5 integration with 20% increase in effectiveness.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      API
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Trading
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Integration
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Auction Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Built secure Dutch and English auction smart contracts with frontend integration.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Solidity
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Ethers.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      DeFi
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
