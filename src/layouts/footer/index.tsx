import React from 'react'

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            Frontend Verse
                        </div>
                        <p className="text-gray-500">Empowering the next generation of frontend developers.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Learning</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Challenges</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500">
                    <p>&copy; 2025 Frontend Verse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
