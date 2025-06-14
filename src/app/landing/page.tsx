"use client"
import React from 'react';
import Footer from '@/layouts/footer';
import CtaSection from './components/cta-section';
import StatSection from './components/stats-section';
import LearningPath from './components/learning-path';
import FeatureSection from './components/feature-section';
import HeroSection from './components/heroSection';
import Navbar from '@/layouts/navbar';

const FrontendVerseLanding = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <LearningPath />
            <StatSection />
            <CtaSection />
            <Footer />
        </div>
    );
};

export default FrontendVerseLanding;