'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/buttons';
import { ArrowRight, Play, Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { useContent } from '@/hooks/useContent';

export const Hero = () => {
  const { getContent } = useContent();

  const badgeText = getContent('hero', 'badge', 'text') || 'Trusted by 15+ Organizations';
  const mainHeadline = getContent('hero', 'headline', 'main') || 'Premium Websites That Convert Visitors Into Clients';
  const highlightText = getContent('hero', 'headline', 'highlight') || 'Convert Visitors Into Clients';
  const subheadline = getContent('hero', 'subheadline', 'description') || 'Specializing in professional web solutions for churches, local governments, and landscaping businesses';
  const primaryCTA = getContent('hero', 'cta', 'primary') || 'View Our Work';
  const secondaryCTA = getContent('hero', 'cta', 'secondary') || 'Watch Demo';
  const responseGuarantee = getContent('hero', 'trust-indicators', 'response') || '24-hour response guarantee';
  const consultation = getContent('hero', 'trust-indicators', 'consultation') || 'Free 30-minute consultation';
  const support = getContent('hero', 'trust-indicators', 'support') || 'Ongoing support included';
  const scrollText = getContent('hero', 'scroll-indicator', 'text') || 'Scroll to explore';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
              }
            }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">{badgeText}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Premium Websites That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                {highlightText}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
            >
              {subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                variant="cta" 
                size="xl"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                {primaryCTA}
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                icon={<Play className="w-5 h-5" />}
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              >
                {secondaryCTA}
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center items-center gap-8 pt-8 text-neutral-300"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span className="text-sm">{responseGuarantee}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span className="text-sm">{consultation}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span className="text-sm">{support}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">{scrollText}</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};