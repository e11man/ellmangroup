'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/buttons';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" background="dark" padding="xl">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Let's Start Your Project
        </h2>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Ready to transform your online presence? Get in touch for a free consultation 
          and let's discuss how we can help your organization grow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-accent-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Thank You!
              </h3>
              <p className="text-neutral-600">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-large">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Get Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your organization"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="church">Church Website</option>
                      <option value="government">Government Portal</option>
                      <option value="landscaping">Landscaping Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  loading={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-neutral-300">{SITE_CONFIG.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <p className="text-neutral-300">{SITE_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-neutral-300">{SITE_CONFIG.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Response Time</h4>
                  <p className="text-neutral-300">24-hour response guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-xl font-bold text-white mb-4">
              Free 30-Minute Consultation
            </h4>
            <p className="text-neutral-300 mb-6">
              Schedule a free consultation to discuss your project requirements, 
              timeline, and budget. No obligation, just valuable insights.
            </p>
            <Button
              variant="cta"
              size="lg"
              className="w-full bg-white text-primary-600 hover:bg-white/90"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
              <span className="text-neutral-300">No upfront costs</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
              <span className="text-neutral-300">Transparent pricing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
              <span className="text-neutral-300">Ongoing support included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};