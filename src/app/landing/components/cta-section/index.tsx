import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import React from 'react'

const CtaSection = () => {
    return (
        <section className="py-20 relative">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30 mb-6">
                    Limited Time Offer
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
                <p className="text-xl text-gray-400 mb-8">
                    Join thousands of developers who've successfully landed frontend roles with our proven system.
                </p>

                <div className="space-y-6">
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-xl font-bold px-12 py-6 rounded-full animate-pulse group">
                        Start Your Journey Today
                        <Star className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </Button>

                    <p className="text-sm text-gray-500">No credit card required • 7-day free trial</p>
                </div>
            </div>
        </section>
    )
}

export default CtaSection
