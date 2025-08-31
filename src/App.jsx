import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Users, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Heart, 
  Baby, 
  Shield, 
  Church, 
  ShoppingCart, 
  MessageSquare,
  Star,
  Target,
  CheckCircle,
  ArrowRight,
  Github,
  Mail,
  Phone
} from 'lucide-react'
import { motion } from 'framer-motion'
import logoImage from './assets/images/logo-encontre-aqui.png'
import heroImage from './assets/images/hero-illustration.png'
import communityImage from './assets/images/community-hero.jpg'
import './App.css'

function App() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Users,
      title: "Relacionamentos e Amizades Locais",
      description: "Conecte-se com pessoas da sua região e forme novas amizades na comunidade."
    },
    {
      icon: Briefcase,
      title: "Cadastro de Comércios e Autônomos",
      description: "Divulgue seu negócio local e encontre prestadores de serviços da região."
    },
    {
      icon: MapPin,
      title: "Vagas de Emprego e Renda",
      description: "Encontre oportunidades de trabalho e renda extra na sua comunidade."
    },
    {
      icon: Calendar,
      title: "Eventos Culturais e Sociais",
      description: "Descubra e participe de eventos, festivais e atividades culturais locais."
    },
    {
      icon: Heart,
      title: "Painel 'Dor para quem precisa'",
      description: "Rede de apoio comunitário para quem precisa de ajuda e solidariedade."
    },
    {
      icon: Baby,
      title: "Espaço Criança e Família",
      description: "Recursos e atividades voltadas para famílias com crianças."
    },
    {
      icon: Shield,
      title: "Painel 60+ e Cuidados",
      description: "Suporte e cuidados especiais para pessoas idosas da comunidade."
    },
    {
      icon: Church,
      title: "Mapa de Igrejas e Templos",
      description: "Encontre espaços de fé e espiritualidade na sua região."
    },
    {
      icon: ShoppingCart,
      title: "Feira Virtual Comunitária",
      description: "Marketplace local para compra e venda entre vizinhos."
    },
    {
      icon: MessageSquare,
      title: "Voz Cidadã Ativa",
      description: "Canal para sugestões e denúncias construtivas da comunidade."
    }
  ]

  const stats = [
    { number: "10 mil+", label: "Pessoas Conectadas" },
    { number: "300+", label: "Ações Culturais" },
    { number: "500+", label: "Famílias Atendidas" },
    { number: "1.000+", label: "Negócios Locais" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="EncontreAqui" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-800">EncontreAqui</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('sobre')} className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('funcionalidades')} className="text-gray-600 hover:text-blue-600 transition-colors">Funcionalidades</button>
              <button onClick={() => scrollToSection('impacto')} className="text-gray-600 hover:text-blue-600 transition-colors">Impacto</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-600 hover:text-blue-600 transition-colors">Contato</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                Tecnologia Social
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Conectando
                <span className="text-blue-600"> Comunidades</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Um aplicativo comunitário para aproximar pessoas, negócios e oportunidades 
                na sua região. Promovendo inclusão, cultura e desenvolvimento local.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => scrollToSection('sobre')}
                >
                  Conheça o Projeto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contato')}
                >
                  Junte-se ao Movimento
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={heroImage} 
                alt="Comunidade conectada" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={communityImage} 
                alt="Comunidade periférica" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                O que é o EncontreAqui?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                É um aplicativo comunitário criado para conectar pessoas da mesma região, 
                promovendo relacionamento, cultura, serviços, fé, trabalho e apoio social. 
                Foi desenvolvido com base na realidade de bairros periféricos e comunidades locais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Objetivo Central</h3>
                    <p className="text-gray-600">
                      Promover inclusão, oportunidades e acolhimento através da tecnologia, 
                      aproximando moradores, talentos locais e iniciativas sociais.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Público-Alvo</h3>
                    <p className="text-gray-600">
                      Moradores da periferia, pequenos comerciantes, jovens, famílias, 
                      pessoas idosas, espaços de fé e voluntários locais.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra todas as ferramentas que o EncontreAqui oferece para 
              fortalecer sua comunidade e criar conexões significativas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`h-full transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    activeFeature === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Segurança e Código de Ética
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Priorizamos um ambiente seguro e respeitoso para toda a comunidade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Verificação de Cadastros",
                description: "Moderação ativa e verificação de perfis para garantir autenticidade."
              },
              {
                icon: Users,
                title: "Conselho Comunitário",
                description: "Mediação e decisões éticas tomadas pela própria comunidade."
              },
              {
                icon: CheckCircle,
                title: "Política Antidiscriminação",
                description: "Tolerância zero para discriminação e proteção de dados pessoais."
              },
              {
                icon: Heart,
                title: "Convivência Pacífica",
                description: "Incentivo ao respeito entre diferentes religiões, culturas e classes."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-green-100 rounded-full w-fit">
                      <item.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section id="impacto" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Impacto Esperado</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nossos objetivos ambiciosos para transformar comunidades através da tecnologia social.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Junte-se ao Movimento EncontreAqui
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              O EncontreAqui é mais que um app. É um movimento. Queremos incubadoras, 
              patrocinadores, voluntários, ONGs e articuladores culturais e religiosos 
              juntos nessa construção.
            </p>
            <p className="text-lg text-gray-700 mb-8 font-medium">
              Com tecnologia, afeto e propósito, mudamos o bairro. E o mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                Ver no GitHub
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Incubadoras e Investidores",
                  description: "Ajude-nos a escalar o projeto e levar tecnologia social para mais comunidades."
                },
                {
                  title: "Voluntários e ONGs",
                  description: "Contribua com seu tempo e conhecimento para fortalecer o movimento."
                },
                {
                  title: "Articuladores Locais",
                  description: "Seja um embaixador do EncontreAqui na sua comunidade."
                }
              ].map((item, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={logoImage} alt="EncontreAqui" className="h-8 w-8" />
              <span className="text-xl font-bold">EncontreAqui</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                Conectando comunidades através da tecnologia social
              </p>
              <p className="text-sm text-gray-500">
                © 2024 EncontreAqui. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

