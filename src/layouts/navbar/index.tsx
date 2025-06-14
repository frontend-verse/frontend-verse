"use client"
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#features', label: 'Features' },
        { href: '#roadmap', label: 'Roadmap' },
        { href: '#resources', label: 'Resources' },
        { href: '#pricing', label: 'Pricing' }
    ];
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 100 ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        Frontend Verse
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-cyan-400 transition-colors duration-300 relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/50 backdrop-blur-md rounded-lg mt-2 p-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block py-2 hover:text-cyan-400 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
