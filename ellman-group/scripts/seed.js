const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ellman-group';

const initialContent = [
  // Header/Navigation
  { section: 'header', key: 'logo', value: 'Ellman Group', type: 'title', order: 0, isActive: true },
  { section: 'navigation', subsection: 'nav', key: 'services', value: 'Services', type: 'text', order: 0, isActive: true },
  { section: 'navigation', subsection: 'nav', key: 'portfolio', value: 'Portfolio', type: 'text', order: 1, isActive: true },
  { section: 'navigation', subsection: 'nav', key: 'about', value: 'About', type: 'text', order: 2, isActive: true },
  { section: 'navigation', subsection: 'nav', key: 'process', value: 'Process', type: 'text', order: 3, isActive: true },
  { section: 'navigation', subsection: 'nav', key: 'contact', value: 'Contact', type: 'text', order: 4, isActive: true },
  { section: 'header', subsection: 'cta', key: 'button', value: 'Get Started', type: 'button', order: 0, isActive: true },

  // Hero Section
  { section: 'hero', subsection: 'badge', key: 'text', value: 'Trusted by 15+ Organizations', type: 'badge', order: 0, isActive: true },
  { section: 'hero', subsection: 'headline', key: 'main', value: 'Premium Websites That Convert Visitors Into Clients', type: 'title', order: 0, isActive: true },
  { section: 'hero', subsection: 'headline', key: 'highlight', value: 'Convert Visitors Into Clients', type: 'title', order: 1, isActive: true },
  { section: 'hero', subsection: 'subheadline', key: 'description', value: 'Specializing in professional web solutions for churches, local governments, and landscaping businesses', type: 'description', order: 0, isActive: true },
  { section: 'hero', subsection: 'cta', key: 'primary', value: 'View Our Work', type: 'button', order: 0, isActive: true },
  { section: 'hero', subsection: 'cta', key: 'secondary', value: 'Watch Demo', type: 'button', order: 1, isActive: true },
  { section: 'hero', subsection: 'trust-indicators', key: 'response', value: '24-hour response guarantee', type: 'text', order: 0, isActive: true },
  { section: 'hero', subsection: 'trust-indicators', key: 'consultation', value: 'Free 30-minute consultation', type: 'text', order: 1, isActive: true },
  { section: 'hero', subsection: 'trust-indicators', key: 'support', value: 'Ongoing support included', type: 'text', order: 2, isActive: true },
  { section: 'hero', subsection: 'scroll-indicator', key: 'text', value: 'Scroll to explore', type: 'text', order: 0, isActive: true },

  // Services Section
  { section: 'services', key: 'title', value: 'Professional Web Development', type: 'title', order: 0, isActive: true },
  { section: 'services', key: 'subtitle', value: 'Tailored solutions designed to meet the unique needs of your organization', type: 'description', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'church_title', value: 'Church Websites', type: 'title', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'church_description', value: 'Professional websites that connect congregations and communities', type: 'description', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'church_feature1', value: 'Sermon streaming integration', type: 'feature', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'church_feature2', value: 'Event management systems', type: 'feature', order: 1, isActive: true },
  { section: 'services', subsection: 'features', key: 'church_feature3', value: 'Donation platforms', type: 'feature', order: 2, isActive: true },
  { section: 'services', subsection: 'features', key: 'church_feature4', value: 'Community features', type: 'feature', order: 3, isActive: true },
  { section: 'services', subsection: 'features', key: 'government_title', value: 'Government Portals', type: 'title', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'government_description', value: 'Citizen-focused digital services for local governments', type: 'description', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'government_feature1', value: 'Citizen service portals', type: 'feature', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'government_feature2', value: 'Document management', type: 'feature', order: 1, isActive: true },
  { section: 'services', subsection: 'features', key: 'government_feature3', value: 'Meeting schedules', type: 'feature', order: 2, isActive: true },
  { section: 'services', subsection: 'features', key: 'government_feature4', value: 'Public information access', type: 'feature', order: 3, isActive: true },
  { section: 'services', subsection: 'features', key: 'landscaping_title', value: 'Landscaping Business Sites', type: 'title', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'landscaping_description', value: 'Showcase your work and streamline operations', type: 'description', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'landscaping_feature1', value: 'Portfolio galleries', type: 'feature', order: 0, isActive: true },
  { section: 'services', subsection: 'features', key: 'landscaping_feature2', value: 'Service booking systems', type: 'feature', order: 1, isActive: true },
  { section: 'services', subsection: 'features', key: 'landscaping_feature3', value: 'Estimate calculators', type: 'feature', order: 2, isActive: true },
  { section: 'services', subsection: 'features', key: 'landscaping_feature4', value: 'Seasonal promotions', type: 'feature', order: 3, isActive: true },
  { section: 'services', subsection: 'stats', key: 'why_choose_title', value: 'Why Choose Ellman Group?', type: 'title', order: 0, isActive: true },
  { section: 'services', subsection: 'stats', key: 'lighthouse_score', value: '90+', type: 'stat', order: 0, isActive: true },
  { section: 'services', subsection: 'stats', key: 'lighthouse_label', value: 'Lighthouse Score', type: 'text', order: 0, isActive: true },
  { section: 'services', subsection: 'stats', key: 'response_time', value: '24h', type: 'stat', order: 0, isActive: true },
  { section: 'services', subsection: 'stats', key: 'response_label', value: 'Response Time', type: 'text', order: 0, isActive: true },
  { section: 'services', subsection: 'stats', key: 'satisfaction', value: '100%', type: 'stat', order: 0, isActive: true },
  { section: 'services', subsection: 'stats', key: 'satisfaction_label', value: 'Client Satisfaction', type: 'text', order: 0, isActive: true },

  // About Section
  { section: 'about', key: 'title', value: 'About Ellman Group', type: 'title', order: 0, isActive: true },
  { section: 'about', key: 'subtitle', value: 'Building digital solutions that make a difference', type: 'description', order: 0, isActive: true },
  { section: 'about', key: 'description', value: 'We specialize in creating professional websites and digital solutions for organizations that serve their communities. Our focus on churches, local governments, and landscaping businesses comes from understanding the unique challenges these organizations face.', type: 'description', order: 0, isActive: true },

  // Process Section
  { section: 'process', key: 'title', value: 'Our Process', type: 'title', order: 0, isActive: true },
  { section: 'process', key: 'subtitle', value: 'A proven approach to delivering exceptional results', type: 'description', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step1_title', value: 'Discovery & Strategy', type: 'title', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step1_description', value: 'Understanding your needs and goals', type: 'description', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step2_title', value: 'Design & Prototyping', type: 'title', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step2_description', value: 'Creating beautiful, functional designs', type: 'description', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step3_title', value: 'Development & Testing', type: 'title', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step3_description', value: 'Building with quality and performance', type: 'description', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step4_title', value: 'Launch & Optimization', type: 'title', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step4_description', value: 'Going live with ongoing improvements', type: 'description', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step5_title', value: 'Ongoing Support', type: 'title', order: 0, isActive: true },
  { section: 'process', subsection: 'steps', key: 'step5_description', value: 'Continuous maintenance and updates', type: 'description', order: 0, isActive: true },

  // Contact Section
  { section: 'contact', key: 'title', value: 'Get In Touch', type: 'title', order: 0, isActive: true },
  { section: 'contact', key: 'subtitle', value: 'Ready to start your project? Let\'s talk about how we can help.', type: 'description', order: 0, isActive: true },
  { section: 'contact', key: 'email', value: 'josh@ellmangroup.com', type: 'text', order: 0, isActive: true },
  { section: 'contact', key: 'phone', value: '+1 (555) 123-4567', type: 'text', order: 0, isActive: true },
  { section: 'contact', key: 'location', value: 'Taylor University Area', type: 'text', order: 0, isActive: true },

  // Footer
  { section: 'footer', key: 'copyright', value: '© 2024 Ellman Group. All rights reserved.', type: 'text', order: 0, isActive: true },
  { section: 'footer', key: 'tagline', value: 'Building digital solutions that make a difference', type: 'description', order: 0, isActive: true }
];

async function seedDatabase() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    const collection = db.collection('sitecontents');
    
    // Clear existing content
    await collection.deleteMany({});
    console.log('Cleared existing content');
    
    // Insert new content
    const result = await collection.insertMany(initialContent);
    console.log(`Seeded ${result.insertedCount} content items`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();