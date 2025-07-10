'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/buttons';
import { GraduationCap, Award, Users, Target } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

const values = [
  {
    icon: Target,
    title: 'Quality',
    description: 'We deliver exceptional websites that exceed expectations'
  },
  {
    icon: Award,
    title: 'Reliability',
    description: 'Consistent performance and ongoing support you can count on'
  },
  {
    icon: Users,
    title: 'Innovation',
    description: 'Cutting-edge solutions that keep you ahead of the competition'
  },
  {
    icon: GraduationCap,
    title: 'Client Success',
    description: 'Your success is our success - we\'re invested in your growth'
  }
];

export const About = () => {
  return (
    <Section id="about" background="muted" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              About {SITE_CONFIG.name}
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Founded by {SITE_CONFIG.owner}, a passionate web developer and student at {SITE_CONFIG.university}, 
              we specialize in creating premium websites that drive real results for organizations that matter.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Student-Driven Innovation
                </h3>
                <p className="text-neutral-600">
                  As a current student at {SITE_CONFIG.university}, I bring fresh perspectives and cutting-edge 
                  web development techniques to every project, ensuring your website stands out in today's digital landscape.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Specialized Expertise
                </h3>
                <p className="text-neutral-600">
                  We focus on three key sectors: churches, local governments, and landscaping businesses. 
                  This specialization allows us to deliver solutions that truly understand your unique needs and challenges.
                </p>
              </div>
            </div>
          </div>

          <Button 
            variant="cta" 
            size="lg"
            className="w-full sm:w-auto"
          >
            Learn More About Our Process
          </Button>
        </motion.div>

        {/* Visual/Stats */}
        <motion.div
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Mission Statement */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-100">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Our Mission
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              To help organizations establish strong online presences that not only look professional 
              but also convert visitors into engaged clients and community members.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-soft border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-neutral-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Why Organizations Choose Us
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-white/80 text-sm">Organizations Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">90+</div>
                <div className="text-white/80 text-sm">Lighthouse Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-white/80 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};