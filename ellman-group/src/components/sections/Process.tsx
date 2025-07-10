'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Search, Palette, Code, Rocket, Headphones } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const stepIcons = [
  Search,
  Palette,
  Code,
  Rocket,
  Headphones,
];

export const Process = () => {
  return (
    <Section id="process" background="default" padding="xl">
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
          Our Development Process
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-neutral-600 max-w-3xl mx-auto"
        >
          A proven 5-step methodology that ensures your project is delivered on time, 
          on budget, and exceeds your expectations
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2 z-0"></div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10"
        >
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = stepIcons[index];
            
            return (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="text-center group"
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-medium group-hover:shadow-large transition-all duration-300 transform group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Step Details */}
                <div className="mt-6 space-y-3">
                  {index === 0 && (
                    <>
                      <div className="text-sm text-neutral-500">• Requirements gathering</div>
                      <div className="text-sm text-neutral-500">• Goal setting</div>
                      <div className="text-sm text-neutral-500">• Target audience analysis</div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="text-sm text-neutral-500">• Wireframing</div>
                      <div className="text-sm text-neutral-500">• UI/UX design</div>
                      <div className="text-sm text-neutral-500">• Client feedback</div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="text-sm text-neutral-500">• Frontend development</div>
                      <div className="text-sm text-neutral-500">• Backend integration</div>
                      <div className="text-sm text-neutral-500">• Quality assurance</div>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className="text-sm text-neutral-500">• Performance optimization</div>
                      <div className="text-sm text-neutral-500">• SEO implementation</div>
                      <div className="text-sm text-neutral-500">• Go-live support</div>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <div className="text-sm text-neutral-500">• Regular updates</div>
                      <div className="text-sm text-neutral-500">• Security monitoring</div>
                      <div className="text-sm text-neutral-500">• Performance tracking</div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Process Benefits */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2-4</span>
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Weeks to Launch</h4>
              <p className="text-neutral-600 text-sm">
                Efficient process ensures quick turnaround without compromising quality
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">∞</span>
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Unlimited Revisions</h4>
              <p className="text-neutral-600 text-sm">
                We work until you're 100% satisfied with the final result
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-600">24/7</span>
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Ongoing Support</h4>
              <p className="text-neutral-600 text-sm">
                Continuous maintenance and support to keep your site running smoothly
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};