import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { User, Database, Globe, Palette, Zap } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Tools & Design',
    icon: Palette,
    items: ['Figma', 'Git', 'Docker', 'VS Code', 'Photoshop', 'Sketch']
  },
  {
    category: 'Other',
    icon: Zap,
    items: ['Problem Solving', 'Team Leadership', 'UI/UX Design', 'Testing', 'Agile', 'DevOps']
  }
]

export function About() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know me better and explore my skills and experience
            </p>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <User className="w-32 h-32 text-muted-foreground" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              </motion.div>
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Hello! I'm a passionate developer
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a frontend developer with a passion for creating beautiful, 
                    functional, and user-friendly web applications. With several years 
                    of experience in the field, I've worked on projects ranging from 
                    simple landing pages to complex web applications.
                  </p>
                  <p>
                    My journey in web development started with curiosity about how 
                    websites work, and it has evolved into a deep passion for crafting 
                    digital experiences that users love. I believe in writing clean, 
                    maintainable code and staying up-to-date with the latest technologies.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or sharing my knowledge with 
                    the developer community.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{skill.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="text-xs"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 