'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Church, Building2, Trees } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const serviceIcons = {
  church: Church,
  government: Building2,
  landscaping: Trees,
};

export const Services = () => {
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
          Professional Web Development
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-neutral-600 max-w-3xl mx-auto"
        >
          Tailored solutions designed to meet the unique needs of your organization
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {SERVICES.map((service, index) => {
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
            Why Choose Ellman Group?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">90+</span>
              </div>
              <p className="text-neutral-600">Lighthouse Score</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">24h</span>
              </div>
              <p className="text-neutral-600">Response Time</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-600">100%</span>
              </div>
              <p className="text-neutral-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};