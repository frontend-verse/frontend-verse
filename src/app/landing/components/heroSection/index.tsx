import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Play } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-pulse"></div>
                <div className="absolute top-60 right-10 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full animate-pulse delay-75"></div>
                <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full animate-pulse delay-150"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                                🚀 New Course Available
                            </Badge>
                            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                                Master{' '}
                                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                                    Frontend
                                </span>{' '}
                                Development in Record Time
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                                From zero to hero in just 90 days. Get interview-ready with our comprehensive curriculum designed by industry experts.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-lg font-semibold px-8 py-6 rounded-full group">
                                Start Learning Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm text-lg font-semibold px-8 py-6 rounded-full hover:bg-white/10">
                                <Play className="mr-2 w-5 h-5" />
                                View Demo
                            </Button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-400">90</div>
                                <div className="text-sm text-gray-400">Days to Master</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pink-400">500+</div>
                                <div className="text-sm text-gray-400">Practice Problems</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400">95%</div>
                                <div className="text-sm text-gray-400">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative">
                        <Card className="bg-black/30 backdrop-blur-md border-white/10 p-8 transform hover:scale-105 transition-transform duration-500">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                                <div className="bg-gray-900/70 rounded-lg p-6 font-mono text-sm">
                                    <div className="space-y-1">
                                        <div><span className="text-cyan-400">const</span> <span className="text-purple-400">learningPath</span> <span className="text-white"></span></div>
                                        <div className="ml-4"><span className="text-pink-400">HTML:</span> <span className="text-green-400">'mastered'</span>,</div>
                                        <div className="ml-4"><span className="text-pink-400">CSS:</span> <span className="text-green-400">'mastered'</span>,</div>
                                        <div className="ml-4"><span className="text-pink-400">JavaScript:</span> <span className="text-green-400">'mastered'</span>,</div>
                                        <div className="ml-4"><span className="text-pink-400">React:</span> <span className="text-green-400">'mastered'</span>,</div>
                                        <div className="ml-4"><span className="text-pink-400">interviews:</span> <span className="text-green-400">'cracked'</span></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
