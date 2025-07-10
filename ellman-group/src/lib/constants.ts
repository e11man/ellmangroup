export const SITE_CONFIG = {
  name: "Ellman Group",
  description: "Premium web development for churches, local governments, and landscaping businesses",
  owner: "Josh Ellman",
  university: "Taylor University",
  email: "josh@ellmangroup.com",
  phone: "+1 (555) 123-4567",
  location: "Taylor University Area",
  social: {
    linkedin: "https://linkedin.com/in/josh-ellman",
    github: "https://github.com/josh-ellman",
  }
}

export const SERVICES = [
  {
    title: "Church Websites",
    description: "Professional websites that connect congregations and communities",
    features: [
      "Sermon streaming integration",
      "Event management systems", 
      "Donation platforms",
      "Community features"
    ],
    icon: "church"
  },
  {
    title: "Government Portals",
    description: "Citizen-focused digital services for local governments",
    features: [
      "Citizen service portals",
      "Document management",
      "Meeting schedules", 
      "Public information access"
    ],
    icon: "government"
  },
  {
    title: "Landscaping Business Sites",
    description: "Showcase your work and streamline operations",
    features: [
      "Portfolio galleries",
      "Service booking systems",
      "Estimate calculators",
      "Seasonal promotions"
    ],
    icon: "landscaping"
  }
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "Understanding your needs and goals"
  },
  {
    step: 2, 
    title: "Design & Prototyping",
    description: "Creating beautiful, functional designs"
  },
  {
    step: 3,
    title: "Development & Testing", 
    description: "Building with quality and performance"
  },
  {
    step: 4,
    title: "Launch & Optimization",
    description: "Going live with ongoing improvements"
  },
  {
    step: 5,
    title: "Ongoing Support",
    description: "Continuous maintenance and updates"
  }
]

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Grace Community Church",
    category: "church",
    description: "Modern church website with sermon streaming and event management",
    image: "/assets/portfolio/church-1.jpg",
    results: ["40% increase in online engagement", "Streamlined event registration"]
  },
  {
    id: 2,
    title: "Riverside City Hall",
    category: "government", 
    description: "Citizen portal with document access and service requests",
    image: "/assets/portfolio/government-1.jpg",
    results: ["60% reduction in phone calls", "Improved citizen satisfaction"]
  },
  {
    id: 3,
    title: "Green Thumb Landscaping",
    category: "landscaping",
    description: "Portfolio showcase with online booking and estimates",
    image: "/assets/portfolio/landscaping-1.jpg", 
    results: ["50% increase in leads", "Automated quote generation"]
  }
]