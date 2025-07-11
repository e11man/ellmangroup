const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ellman-group';

async function testConnection() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    console.log('Testing MongoDB connection...');
    console.log('Connection string:', MONGODB_URI.replace(/\/\/.*@/, '//***:***@')); // Hide credentials
    
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');
    
    const db = client.db();
    const collections = await db.listCollections().toArray();
    console.log('📁 Available collections:', collections.map(c => c.name));
    
    // Test the sitecontents collection
    const collection = db.collection('sitecontents');
    const count = await collection.countDocuments();
    console.log(`📊 Current content items: ${count}`);
    
    if (count === 0) {
      console.log('💡 No content found. Run "npm run seed" to populate the database.');
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Check if your MongoDB URI is correct in .env.local');
    console.log('2. Make sure your MongoDB instance is running');
    console.log('3. Verify network access settings (if using Atlas)');
    console.log('4. Check if your username/password are correct');
  } finally {
    await client.close();
  }
}

testConnection();