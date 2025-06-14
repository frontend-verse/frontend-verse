import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, CheckCircle, Zap } from 'lucide-react';
import React from 'react'

const features = [
    {
        icon: <Zap className="w-8 h-8" />,
        title: 'Lightning Fast Learning',
        description: 'Master frontend fundamentals in just 30 days with our intensive, project-based approach.',
        gradient: 'from-cyan-400 to-blue-500'
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: 'Interview Ready',
        description: 'Practice with 500+ real interview questions from top tech companies like Google, Meta, and Amazon.',
        gradient: 'from-pink-400 to-purple-500'
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: 'Real Projects',
        description: 'Build 15+ industry-standard projects that will make your portfolio stand out to recruiters.',
        gradient: 'from-purple-400 to-pink-500'
    }
];

const FeatureSection = () => {
    return (
        <section id="features" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">
                        Why Choose Us
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Frontend Verse?</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Our proven methodology has helped thousands of developers land their dream frontend roles
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-black/30 backdrop-blur-md border-white/10 hover:bg-white/5 transition-all duration-300 group">
                            <CardHeader>
                                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-2xl text-gray-200">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-400 text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
