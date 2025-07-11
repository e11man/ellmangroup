'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Church, Building2, Trees } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useContent } from '@/hooks/useContent';

const serviceIcons = {
  church: Church,
  government: Building2,
  landscaping: Trees,
};

export const Services = () => {
  const { getContent } = useContent();

  const title = getContent('services', undefined, 'title') || 'Professional Web Development';
  const subtitle = getContent('services', undefined, 'subtitle') || 'Tailored solutions designed to meet the unique needs of your organization';
  
  const services = [
    {
      title: getContent('services', 'features', 'church_title') || 'Church Websites',
      description: getContent('services', 'features', 'church_description') || 'Professional websites that connect congregations and communities',
      features: [
        getContent('services', 'features', 'church_feature1') || 'Sermon streaming integration',
        getContent('services', 'features', 'church_feature2') || 'Event management systems',
        getContent('services', 'features', 'church_feature3') || 'Donation platforms',
        getContent('services', 'features', 'church_feature4') || 'Community features'
      ],
      icon: 'church'
    },
    {
      title: getContent('services', 'features', 'government_title') || 'Government Portals',
      description: getContent('services', 'features', 'government_description') || 'Citizen-focused digital services for local governments',
      features: [
        getContent('services', 'features', 'government_feature1') || 'Citizen service portals',
        getContent('services', 'features', 'government_feature2') || 'Document management',
        getContent('services', 'features', 'government_feature3') || 'Meeting schedules',
        getContent('services', 'features', 'government_feature4') || 'Public information access'
      ],
      icon: 'government'
    },
    {
      title: getContent('services', 'features', 'landscaping_title') || 'Landscaping Business Sites',
      description: getContent('services', 'features', 'landscaping_description') || 'Showcase your work and streamline operations',
      features: [
        getContent('services', 'features', 'landscaping_feature1') || 'Portfolio galleries',
        getContent('services', 'features', 'landscaping_feature2') || 'Service booking systems',
        getContent('services', 'features', 'landscaping_feature3') || 'Estimate calculators',
        getContent('services', 'features', 'landscaping_feature4') || 'Seasonal promotions'
      ],
      icon: 'landscaping'
    }
  ];

  return (
    <Section id="services" background="muted" padding="xl">
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
          {title}
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-neutral-600 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => {
          const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
          
          return (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-neutral-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 mx-auto">
                <IconComponent className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            {getContent('services', 'stats', 'why_choose_title') || 'Why Choose Ellman Group?'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">
                  {getContent('services', 'stats', 'lighthouse_score') || '90+'}
                </span>
              </div>
              <p className="text-neutral-600">
                {getContent('services', 'stats', 'lighthouse_label') || 'Lighthouse Score'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">
                  {getContent('services', 'stats', 'response_time') || '24h'}
                </span>
              </div>
              <p className="text-neutral-600">
                {getContent('services', 'stats', 'response_label') || 'Response Time'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-600">
                  {getContent('services', 'stats', 'satisfaction') || '100%'}
                </span>
              </div>
              <p className="text-neutral-600">
                {getContent('services', 'stats', 'satisfaction_label') || 'Client Satisfaction'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};