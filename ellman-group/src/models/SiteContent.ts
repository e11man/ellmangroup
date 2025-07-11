import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteContent extends Document {
  section: string;
  subsection?: string;
  key: string;
  value: string;
  type: 'text' | 'title' | 'description' | 'button' | 'badge' | 'feature' | 'stat';
  order?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SiteContentSchema = new Schema<ISiteContent>({
  section: {
    type: String,
    required: true,
    enum: ['header', 'hero', 'services', 'portfolio', 'about', 'process', 'contact', 'footer', 'navigation']
  },
  subsection: {
    type: String,
    required: false,
    enum: ['nav', 'cta', 'badge', 'headline', 'subheadline', 'features', 'stats', 'trust-indicators', 'scroll-indicator']
  },
  key: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['text', 'title', 'description', 'button', 'badge', 'feature', 'stat']
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Compound index for efficient queries
SiteContentSchema.index({ section: 1, subsection: 1, key: 1 });

export default mongoose.models.SiteContent || mongoose.model<ISiteContent>('SiteContent', SiteContentSchema);