import { NextResponse } from 'next/server';
import { seedContent } from '@/lib/seedContent';

export async function POST() {
  try {
    const content = await seedContent();
    return NextResponse.json({ 
      message: 'Database seeded successfully', 
      count: content.length 
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}