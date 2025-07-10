'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/buttons';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'church', name: 'Churches' },
  { id: 'government', name: 'Government' },
  { id: 'landscaping', name: 'Landscaping' },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <Section id="portfolio" background="default" padding="xl">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6"
        >
          Our Portfolio
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12"
        >
          See how we&apos;ve helped organizations establish their online presence
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-medium'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="initial"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border border-neutral-100"
            >
              {/* Placeholder for project image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 font-medium">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)} Project
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  {item.results.map((result, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-700">{result}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                  className="w-full"
                >
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your organization establish a strong online presence that converts visitors into clients.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            className="bg-white text-primary-600 hover:bg-white/90"
          >
            Get Started Today
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};