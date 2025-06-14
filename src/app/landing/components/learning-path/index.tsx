import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const roadmapSteps = [
    {
        phase: 1,
        title: 'Days 1-30: Foundation',
        description: 'HTML5, CSS3, JavaScript ES6+, DOM manipulation, Responsive design, Git & GitHub',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
        colors: ['bg-green-500/20', 'bg-blue-500/20', 'bg-yellow-500/20', 'bg-purple-500/20'],
        gradient: 'from-green-400 to-cyan-500'
    },
    {
        phase: 2,
        title: 'Days 31-60: Advanced Skills',
        description: 'React.js, State Management, APIs & HTTP, Testing, Build Tools, Performance Optimization',
        skills: ['React', 'Redux', 'APIs', 'Testing'],
        colors: ['bg-cyan-500/20', 'bg-purple-500/20', 'bg-pink-500/20', 'bg-orange-500/20'],
        gradient: 'from-purple-400 to-pink-500'
    },
    {
        phase: 3,
        title: 'Days 61-90: Interview Prep',
        description: 'System Design, Coding Challenges, Portfolio Projects, Mock Interviews, Resume Building',
        skills: ['System Design', 'Interviews', 'Portfolio', 'Resume'],
        colors: ['bg-orange-500/20', 'bg-red-500/20', 'bg-indigo-500/20', 'bg-teal-500/20'],
        gradient: 'from-orange-400 to-red-500'
    }
];

const LearningPath = () => {
    return (
        <section id="roadmap" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
                        Learning Path
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Your 90-Day Journey</h2>
                    <p className="text-xl text-gray-400">Follow our proven roadmap to frontend mastery</p>
                </div>

                <div className="space-y-8">
                    {roadmapSteps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-8 group">
                            <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                                {step.phase}
                            </div>
                            <Card className="bg-black/30 backdrop-blur-md border-white/10 flex-1 group-hover:bg-white/5 transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-gray-200">{step.title}</CardTitle>
                                    <CardDescription className="text-gray-400 text-base">
                                        {step.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {step.skills.map((skill, skillIndex) => (
                                            <Badge key={skillIndex} variant="secondary" className={`${step.colors[skillIndex]} text-gray-200 border-0`}>
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LearningPath
