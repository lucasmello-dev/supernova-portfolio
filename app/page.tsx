"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Star,
  Sparkles,
  Rocket,
  Code,
  Smartphone,
  Globe,
  Brain,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TechLogo } from "@/components/tech-logo"

export default function SuperNovaPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [projectDescription, setProjectDescription] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleWhatsAppRedirect = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5562995280604?text=${encodedMessage}`, "_blank")
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (projectDescription.trim()) {
      handleWhatsAppRedirect(projectDescription)
      setProjectDescription("")
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="cosmic-dust"></div>
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-purple-400 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SuperNova
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicos" className="hover:text-purple-400 transition-colors">Serviços</a>
              <a href="#projetos" className="hover:text-purple-400 transition-colors">Projetos</a>
              <a href="#sobre" className="hover:text-purple-400 transition-colors">Nossa Jornada</a>
              <a href="#tecnologias" className="hover:text-purple-400 transition-colors">Tecnologias</a>
              <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
            </div>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-white transition-all"></div>
            </button>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-purple-500/20 py-4 flex flex-col space-y-4 px-6">
              {["#servicos", "#projetos", "#sobre", "#tecnologias", "#contato"].map((href, i) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-purple-400 transition-colors text-lg"
                >
                  {["Serviços", "Projetos", "Nossa Jornada", "Tecnologias", "Contato"][i]}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center z-20 max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
                SuperNova
              </span>
              <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
            </h1>
            <div className="shooting-star"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">Desenvolvendo o futuro, uma linha de código por vez</p>
          <p className="text-lg text-purple-300 mb-8">Full-Stack · Mobile · AI Engineering · Sistemas Escaláveis</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleWhatsAppRedirect("Olá! Gostaria de conhecer mais sobre os projetos da SuperNova.")}
              className="cosmic-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-6 h-6 mr-2" />
              Nossos Projetos
            </Button>
            <Button
              onClick={() =>
                handleWhatsAppRedirect("Olá! Gostaria de entrar em contato sobre um projeto em potencial.")
              }
              variant="outline"
              className="border-purple-500 bg-transparent text-white hover:bg-purple-500/20 hover:text-white px-10 py-6 rounded-full text-xl font-semibold transition-all duration-300 border-2"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Entre em Contato
            </Button>
          </div>

          {/* Floating particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - FIRST */}
      <section id="servicos" className="py-20 px-6 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300">Soluções completas para seu negócio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Integration Card */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm text-center h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-violet-300 mb-4">Integração com IA</h3>
                <ul className="text-gray-300 space-y-2 mb-6 flex-grow">
                  <li>• Chatbots inteligentes</li>
                  <li>• Análise de dados com IA</li>
                  <li>• Automação de processos</li>
                  <li>• Personalização de experiências</li>
                  <li>• Integração com Claude (Anthropic), GPT e outros modelos</li>
                </ul>
                <Button
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "Olá! Tenho interesse em saber mais sobre os serviços de Integração com IA da SuperNova.",
                    )
                  }
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm text-center h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Desenvolvimento de Websites</h3>
                <ul className="text-gray-300 space-y-2 mb-6 flex-grow">
                  <li>• Landing pages profissionais</li>
                  <li>• Sites institucionais</li>
                  <li>• E-commerce completo</li>
                  <li>• Portfólios personalizados</li>
                  <li>• Next.js e tecnologias modernas</li>
                </ul>
                <Button
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "Olá! Tenho interesse em saber mais sobre os serviços de Desenvolvimento de Websites da SuperNova.",
                    )
                  }
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm text-center h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Desenvolvimento de Aplicativos</h3>
                <ul className="text-gray-300 space-y-2 mb-6 flex-grow">
                  <li>• Apps iOS e Android</li>
                  <li>• Flutter (iOS & Android)</li>
                  <li>• Soluções personalizadas</li>
                  <li>• Integração com APIs e dispositivos externos</li>
                  <li>• Modo offline e sincronização</li>
                </ul>
                <Button
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "Olá! Tenho interesse em saber mais sobre os serviços de Desenvolvimento de Aplicativos da SuperNova.",
                    )
                  }
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm text-center h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Sistemas Web Completos</h3>
                <ul className="text-gray-300 space-y-2 mb-6 flex-grow">
                  <li>• CRM e ERP personalizados</li>
                  <li>• Sistemas de gestão</li>
                  <li>• Desenvolvimento full-stack</li>
                  <li>• Arquitetura escalável</li>
                  <li>• Auth completa: Google, Apple, Facebook, JWT</li>
                  <li>• Integrações com APIs externas e dispositivos</li>
                </ul>
                <Button
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "Olá! Tenho interesse em saber mais sobre os serviços de Sistemas Web Completos da SuperNova.",
                    )
                  }
                  className="w-full bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-500 hover:to-purple-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section - SECOND */}
      <section id="projetos" className="py-20 px-6 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nossos Projetos
            </h2>
            <p className="text-xl text-gray-300">Soluções inovadoras que desenvolvemos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 — Psicólogo João Pedro Martins */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src="/joao-pedro.png" alt="Psicólogo João Pedro Martins" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">Psicólogo João Pedro Martins</h3>
                <p className="text-gray-400 mb-4">Website profissional para psicólogo com foco na conversão de pacientes</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300">Next.js</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300">Tailwind CSS</Badge>
                </div>
                <Button
                  onClick={() => window.open("https://psicologojoaopedromartins.netlify.app/", "_blank")}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 mt-auto"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Ver Site
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 — Fazenda On (phone mockup, side by side) */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="relative flex justify-center items-center mb-4 bg-gradient-to-br from-green-900/40 to-emerald-900/20 rounded-lg p-4 h-[220px]">
                  {/* Back phone - splash */}
                  <div className="absolute left-[18%] top-6 w-[95px] h-[190px] bg-black rounded-[20px] border-2 border-gray-700 overflow-hidden shadow-lg opacity-75 rotate-[-4deg]">
                    <img src="/fazendaon-splash.png" alt="FazendaOn splash" className="w-full h-full object-cover" />
                  </div>
                  {/* Front phone - dashboard */}
                  <div className="relative w-[105px] h-[210px] bg-black rounded-[22px] border-2 border-green-500/60 overflow-hidden shadow-2xl ml-12 z-10">
                    <img src="/fazendaon-dashboard.png" alt="FazendaOn dashboard" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-300 mb-2">FazendaOn</h3>
                <p className="text-gray-400 mb-4">SaaS mobile para gestão de pecuária com telemedicina veterinária e preços de mercado em tempo real</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-green-500/20 text-green-300">Flutter</Badge>
                  <Badge className="bg-green-500/20 text-green-300">Go</Badge>
                  <Badge className="bg-green-500/20 text-green-300">Firebase</Badge>
                </div>
                <Button
                  onClick={() => handleWhatsAppRedirect("Olá! Gostaria de saber mais sobre o projeto FazendaOn.")}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Em Breve — Saiba Mais
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 — Air Connect (horizontal scroll carousel) */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src="/airconnect-splash.png" alt="Air Connect" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">Air Connect</h3>
                <p className="text-gray-400 mb-4">App mobile de aviação para busca e reserva de voos de passageiros e carga</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-500/20 text-blue-300">Flutter</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300">Kotlin</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300">APIs REST</Badge>
                </div>
                <Button
                  onClick={() => handleWhatsAppRedirect("Olá! Gostaria de saber mais sobre o projeto Air Connect.")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            {/* Project 4 — Flow CRM */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg mb-4 overflow-hidden flex items-center justify-center p-3">
                  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Header bar */}
                    <rect x="0" y="0" width="320" height="28" rx="4" fill="#1a1a2e" opacity="0.8"/>
                    <circle cx="12" cy="14" r="5" fill="#f97316" opacity="0.9"/>
                    <rect x="24" y="10" width="60" height="8" rx="2" fill="#f97316" opacity="0.6"/>
                    <rect x="240" y="8" width="36" height="12" rx="6" fill="#f97316" opacity="0.4"/>
                    <rect x="282" y="8" width="32" height="12" rx="6" fill="#ea580c" opacity="0.5"/>
                    {/* Pipeline columns */}
                    <rect x="4" y="36" width="72" height="14" rx="3" fill="#f97316" opacity="0.7"/>
                    <rect x="82" y="36" width="72" height="14" rx="3" fill="#fb923c" opacity="0.6"/>
                    <rect x="160" y="36" width="72" height="14" rx="3" fill="#fdba74" opacity="0.5"/>
                    <rect x="242" y="36" width="72" height="14" rx="3" fill="#22c55e" opacity="0.6"/>
                    {/* Cards col 1 */}
                    <rect x="4" y="56" width="72" height="34" rx="4" fill="#1e2a3a" stroke="#f97316" strokeWidth="0.5" opacity="0.9"/>
                    <rect x="10" y="62" width="40" height="5" rx="2" fill="#f97316" opacity="0.8"/>
                    <rect x="10" y="71" width="55" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="10" y="78" width="30" height="4" rx="2" fill="#94a3b8" opacity="0.4"/>
                    <rect x="4" y="96" width="72" height="34" rx="4" fill="#1e2a3a" stroke="#f97316" strokeWidth="0.5" opacity="0.8"/>
                    <rect x="10" y="102" width="45" height="5" rx="2" fill="#f97316" opacity="0.7"/>
                    <rect x="10" y="111" width="55" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="10" y="118" width="25" height="4" rx="2" fill="#94a3b8" opacity="0.4"/>
                    {/* Cards col 2 */}
                    <rect x="82" y="56" width="72" height="34" rx="4" fill="#1e2a3a" stroke="#fb923c" strokeWidth="0.5" opacity="0.9"/>
                    <rect x="88" y="62" width="35" height="5" rx="2" fill="#fb923c" opacity="0.8"/>
                    <rect x="88" y="71" width="55" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="88" y="78" width="40" height="4" rx="2" fill="#94a3b8" opacity="0.4"/>
                    <rect x="82" y="96" width="72" height="34" rx="4" fill="#1e2a3a" stroke="#fb923c" strokeWidth="0.5" opacity="0.7"/>
                    <rect x="88" y="102" width="50" height="5" rx="2" fill="#fb923c" opacity="0.7"/>
                    <rect x="88" y="111" width="55" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="88" y="118" width="35" height="4" rx="2" fill="#94a3b8" opacity="0.4"/>
                    {/* Cards col 3 */}
                    <rect x="160" y="56" width="72" height="34" rx="4" fill="#1e2a3a" stroke="#fdba74" strokeWidth="0.5" opacity="0.9"/>
                    <rect x="166" y="62" width="42" height="5" rx="2" fill="#fdba74" opacity="0.7"/>
                    <rect x="166" y="71" width="55" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="166" y="78" width="28" height="4" rx="2" fill="#94a3b8" opacity="0.4"/>
                    {/* Cards col 4 - won */}
                    <rect x="242" y="56" width="72" height="34" rx="4" fill="#14532d" stroke="#22c55e" strokeWidth="0.5" opacity="0.9"/>
                    <rect x="248" y="62" width="38" height="5" rx="2" fill="#22c55e" opacity="0.9"/>
                    <rect x="248" y="71" width="55" height="4" rx="2" fill="#86efac" opacity="0.5"/>
                    <rect x="248" y="78" width="32" height="4" rx="2" fill="#86efac" opacity="0.4"/>
                    <rect x="242" y="96" width="72" height="34" rx="4" fill="#14532d" stroke="#22c55e" strokeWidth="0.5" opacity="0.8"/>
                    <rect x="248" y="102" width="44" height="5" rx="2" fill="#22c55e" opacity="0.8"/>
                    <rect x="248" y="111" width="55" height="4" rx="2" fill="#86efac" opacity="0.5"/>
                    <rect x="248" y="118" width="20" height="4" rx="2" fill="#86efac" opacity="0.4"/>
                    {/* Bottom stats bar */}
                    <rect x="4" y="140" width="90" height="32" rx="4" fill="#1e2a3a" opacity="0.8"/>
                    <rect x="10" y="146" width="30" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="10" y="154" width="50" height="8" rx="2" fill="#f97316" opacity="0.8"/>
                    <rect x="100" y="140" width="90" height="32" rx="4" fill="#1e2a3a" opacity="0.8"/>
                    <rect x="106" y="146" width="40" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="106" y="154" width="45" height="8" rx="2" fill="#22c55e" opacity="0.8"/>
                    <rect x="196" y="140" width="120" height="32" rx="4" fill="#1e2a3a" opacity="0.8"/>
                    <rect x="202" y="146" width="50" height="4" rx="2" fill="#94a3b8" opacity="0.5"/>
                    <rect x="202" y="154" width="35" height="4" rx="2" fill="#fb923c" opacity="0.6"/>
                    <rect x="242" y="154" width="25" height="4" rx="2" fill="#fb923c" opacity="0.4"/>
                    <rect x="272" y="154" width="38" height="4" rx="2" fill="#fb923c" opacity="0.3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-300 mb-2">Flow CRM</h3>
                <p className="text-gray-400 mb-4">Dashboard CRM completo com interface moderna para gestão de clientes e pipeline de vendas</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-orange-500/20 text-orange-300">Next.js</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300">TypeScript</Badge>
                </div>
                <Button
                  onClick={() => handleWhatsAppRedirect("Olá! Gostaria de saber mais sobre o projeto Flow CRM.")}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            {/* Project 5 — LigDoctor */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src="/ligdoctor.png" alt="LigDoctor" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-teal-300 mb-2">LigDoctor</h3>
                <p className="text-gray-400 mb-4">Plataforma de saúde com governança, inteligência artificial e monitoramento contínuo</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-teal-500/20 text-teal-300">Flutter</Badge>
                  <Badge className="bg-teal-500/20 text-teal-300">APIs REST</Badge>
                </div>
                <Button
                  onClick={() => window.open("https://ligdoctor.com.br", "_blank")}
                  className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-500 hover:to-green-500 mt-auto"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Ver Site
                </Button>
              </CardContent>
            </Card>

            {/* Project 6 — InovaBot.ai */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src="/inovabot.png" alt="InovaBot.ai" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-pink-300 mb-2">InovaBot.ai</h3>
                <p className="text-gray-400 mb-4">Chatbot com IA para clínicas com integração WhatsApp e automação de atendimento</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-pink-500/20 text-pink-300">React</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300">Vite</Badge>
                  <Badge className="bg-pink-500/20 text-pink-300">n8n</Badge>
                </div>
                <Button
                  onClick={() => window.open("https://inovabot.ai", "_blank")}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 mt-auto"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Ver Site
                </Button>
              </CardContent>
            </Card>

            {/* Project 7 — US Construction Marketplace */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src="/marketplace.png" alt="US Construction Marketplace" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">US Construction Marketplace</h3>
                <p className="text-gray-400 mb-4">Plataforma americana de construção civil com chat em tempo real, busca avançada, verificação de identidade por SMS e app mobile</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-500/20 text-blue-300">Next.js</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300">Flutter</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300">Firebase</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300">Stream Chat</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300">Algolia</Badge>
                </div>
                <Button
                  onClick={() => handleWhatsAppRedirect("Olá! Gostaria de saber mais sobre o US Construction Marketplace.")}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            {/* Project 8 — FastPower */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src="/fastpower.png" alt="FastPower" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-yellow-300 mb-2">FastPower</h3>
                <p className="text-gray-400 mb-4">E-commerce completo para carregadores elétricos com painel administrativo e integração de pagamentos</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-500/20 text-yellow-300">Next.js</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-300">Go</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-300">PostgreSQL</Badge>
                </div>
                <Button
                  onClick={() => window.open("https://fastpower.shop", "_blank")}
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 mt-auto"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Ver Site
                </Button>
              </CardContent>
            </Card>

            {/* Project 9 — WhatsApp AI Bot */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src="/wellness-bot.png" alt="WhatsApp AI Bot" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-green-300 mb-2">WhatsApp AI Bot</h3>
                <p className="text-gray-400 mb-4">Bot de automação inteligente para WhatsApp com fluxos de IA, CRM e protocolo de atendimento automatizado</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-green-500/20 text-green-300">n8n</Badge>
                  <Badge className="bg-green-500/20 text-green-300">Claude API</Badge>
                  <Badge className="bg-green-500/20 text-green-300">Evolution API</Badge>
                  <Badge className="bg-green-500/20 text-green-300">PostgreSQL</Badge>
                </div>
                <Button
                  onClick={() => handleWhatsAppRedirect("Olá! Gostaria de conhecer melhor o seu portfolio de bot de WhatsApp com IA.")}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 mt-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* About Section - THIRD (Nossa Jornada) */}
      <section id="sobre" className="py-20 px-6 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-300">Conheça a equipe por trás da SuperNova</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tâmella */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300">Tâmella Gomes Barra</h3>
                    <p className="text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p>• 4+ anos de experiência em desenvolvimento de software</p>
                  <p>• Bacharel em Gestão da Informação (UFG)</p>
                  <p>• Especialista em Java/Spring Boot + Angular</p>
                  <p>• Desenvolvedora Plena na CI&T — atuando com clientes de grande porte</p>
                  <p>• Experiência em sistemas para bancos e empresas de renome nacional</p>
                  <p>• Background: ITSS Tecnologia (Estagiária → Desenvolvedora Jr)</p>
                  <p>• Projetos: Portal Belgo Arames, sistemas farmacêuticos, setor bancário</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "Docker", "Azure", "Microservices"].map((tech) => (
                    <Badge key={tech} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lucas */}
            <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300">Lucas Ferreira Assunção Mello</h3>
                    <p className="text-gray-400">Full-Stack Engineer & Co-fundador</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p>• 4+ anos de experiência em engenharia de software full-stack</p>
                  <p>• Arquitetura de sistemas escaláveis, microsserviços e APIs REST</p>
                  <p>• Bacharel em Gestão da Informação (UFG) - cursando</p>
                  <p>• Projetos: US Construction Marketplace, FazendaOn, FastPower, LigDoctor, InovaBot</p>
                  <p>• AI Engineering: WhatsApp bots, n8n, Claude API, automação de processos</p>
                  <p>• DevOps: Docker, DigitalOcean, Railway, Coolify, GitHub Actions</p>
                  <p>• Auth: Firebase Auth, OAuth (Google, Apple, Facebook), JWT, verificação SMS</p>
                  <p>• Segurança: anti-phishing, detecção de bots, proteção contra ataques Unicode</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Next.js", "Flutter", "Go", "TypeScript", "Firebase", "PostgreSQL", "Docker", "Node.js", "Kotlin"].map((tech) => (
                    <Badge key={tech} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 px-6 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tecnologias
            </h2>
            <p className="text-xl text-gray-300">Stack moderno para soluções inovadoras</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", color: "from-blue-400 to-cyan-400" },
              { name: "Next.js", color: "from-gray-400 to-white" },
              { name: "Angular", color: "from-red-500 to-red-600" },
              { name: "Flutter", color: "from-blue-400 to-blue-600" },
              { name: "TypeScript", color: "from-blue-500 to-blue-700" },
              { name: "Java", color: "from-orange-500 to-red-500" },
              { name: "Spring Boot", color: "from-green-500 to-green-600" },
              { name: "Go", color: "from-cyan-400 to-blue-500" },
              { name: "Node.js", color: "from-green-400 to-green-600" },
              { name: "PostgreSQL", color: "from-blue-600 to-blue-800" },
              { name: "MongoDB", color: "from-green-500 to-green-700" },
              { name: "Docker", color: "from-blue-500 to-blue-700" },
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                  >
                    <TechLogo name={tech.name} className="w-10 h-10" />
                  </div>
                  <p className="text-sm font-semibold text-gray-300">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-gray-300">Pronto para transformar sua ideia em realidade?</p>
          </div>

          <Card className="cosmic-card bg-[#161b22]/80 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-6">Entre em Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400">WhatsApp</p>
                        <Button
                          onClick={() => handleWhatsAppRedirect("Olá! Gostaria de entrar em contato com a SuperNova.")}
                          className="text-white font-semibold bg-transparent hover:bg-green-500/20 p-0 h-auto text-left justify-start"
                          variant="ghost"
                        >
                          +55 (62) 99528-0604
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-white font-semibold">lucasmellodev@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-purple-300 mb-4">Redes Sociais</h4>
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        onClick={() => window.open("https://github.com/lucasmello-dev", "_blank")}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-6">Descreva seu Projeto</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <textarea
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Descreva seu projeto..."
                      rows={6}
                      className="w-full p-3 bg-[#0d1117] border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 text-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Enviar via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20 relative z-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              SuperNova
            </span>
          </div>
          <p className="text-gray-400 mb-4">© 2026 SuperNova. Desenvolvendo o futuro, uma linha de código por vez.</p>

          {/* WhatsApp CTA Button in Footer */}
          <Button
            onClick={() => handleWhatsAppRedirect("Olá! Gostaria de entrar em contato com a SuperNova.")}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </footer>
    </div>
  )
}
