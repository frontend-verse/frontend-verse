import { Card } from '@/components/ui/card'
import { Award, Clock, Target, Users } from 'lucide-react';
import React from 'react'

const stats = [
    { number: '2,500+', label: 'Students Placed', icon: <Users className="w-8 h-8" /> },
    { number: '$75k+', label: 'Average Salary', icon: <Target className="w-8 h-8" /> },
    { number: '95%', label: 'Success Rate', icon: <Award className="w-8 h-8" /> },
    { number: '30 Days', label: 'Money Back', icon: <Clock className="w-8 h-8" /> }
];
const StatSection = () => {
    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="bg-black/30 backdrop-blur-md border-white/10 p-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-4">
                                <div className="flex justify-center text-cyan-400">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-white">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default StatSection
