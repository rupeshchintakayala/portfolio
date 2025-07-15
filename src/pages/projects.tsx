import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { ExternalLink, Github, Image } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-site.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Drag & Drop'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://your-task-app.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization using Chart.js.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'Chart.js', 'Weather API', 'CSS3'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-app.com',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration.',
    image: '/api/placeholder/400/300',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Social APIs'],
    githubUrl: 'https://github.com/yourusername/social-dashboard',
    liveUrl: 'https://your-social-dashboard.com',
  },
  {
    id: 5,
    title: 'Recipe Finder App',
    description: 'A mobile-first recipe application with ingredient-based search, meal planning, and nutritional information powered by external APIs.',
    image: '/api/placeholder/400/300',
    tags: ['React Native', 'Recipe API', 'SQLite', 'Expo'],
    githubUrl: 'https://github.com/yourusername/recipe-finder',
    liveUrl: 'https://your-recipe-app.com',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and dark mode support.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.com',
  },
]

export function Projects() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 