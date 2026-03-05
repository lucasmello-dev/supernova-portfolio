import { FileJson, Database, Server, Container, Leaf, Coffee, Smartphone, Code } from "lucide-react"

interface TechLogoProps {
  name: string
  className?: string
}

export function TechLogo({ name, className = "w-6 h-6" }: TechLogoProps) {
  switch (name.toLowerCase()) {
    case "react":
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <div className="relative">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-t-white border-r-white border-b-transparent border-l-transparent"></div>
            <div className="absolute inset-0 animate-spin-slow animation-delay-500 rounded-full border-2 border-t-transparent border-r-transparent border-b-white border-l-white"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      )
    case "next.js":
      return <div className={`flex items-center justify-center ${className} font-bold text-black text-xl`}>N</div>
    case "angular":
      return (
        <div className={`flex items-center justify-center ${className} text-white`}>
          <div className="transform rotate-45">
            <div className="flex">
              <div className="border-t-2 border-l-2 border-white h-3 w-3"></div>
              <div className="border-t-2 border-r-2 border-white h-3 w-3"></div>
            </div>
            <div className="flex">
              <div className="border-b-2 border-l-2 border-white h-3 w-3"></div>
              <div className="border-b-2 border-r-2 border-white h-3 w-3"></div>
            </div>
          </div>
        </div>
      )
    case "flutter":
      return <Smartphone className={`${className} text-white`} />
    case "typescript":
      return <FileJson className={`${className} text-white`} />
    case "java":
      return <Coffee className={`${className} text-white`} />
    case "spring boot":
      return <Leaf className={`${className} text-white`} />
    case "go":
      return <div className={`flex items-center justify-center ${className} font-bold text-white text-lg`}>Go</div>
    case "node.js":
      return <Server className={`${className} text-white`} />
    case "postgresql":
      return <Database className={`${className} text-white`} />
    case "mongodb":
      return <Leaf className={`${className} text-white`} />
    case "docker":
      return <Container className={`${className} text-white`} />
    default:
      return <Code className={`${className} text-white`} />
  }
}
