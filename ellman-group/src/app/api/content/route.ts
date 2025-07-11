import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import SiteContent from '@/models/SiteContent';

export async function GET() {
  try {
    await dbConnect();
    
    const content = await SiteContent.find({ isActive: true })
      .sort({ section: 1, subsection: 1, order: 1 })
      .lean();

    // Group content by section and subsection
    const groupedContent: Record<string, any> = {};
    
    content.forEach((item) => {
      if (!groupedContent[item.section]) {
        groupedContent[item.section] = {};
      }
      
      if (item.subsection) {
        if (!groupedContent[item.section][item.subsection]) {
          groupedContent[item.section][item.subsection] = {};
        }
        groupedContent[item.section][item.subsection][item.key] = item.value;
      } else {
        groupedContent[item.section][item.key] = item.value;
      }
    });

    return NextResponse.json(groupedContent);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { section, subsection, key, value, type, order } = body;

    const newContent = new SiteContent({
      section,
      subsection,
      key,
      value,
      type,
      order: order || 0
    });

    await newContent.save();

    return NextResponse.json(newContent, { status: 201 });
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    );
  }
}