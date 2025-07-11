# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to https://www.mongodb.com/atlas
2. Click "Try Free" or "Sign Up"
3. Create an account or sign in

## Step 2: Create a Cluster

1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region close to you
5. Click "Create"

## Step 3: Set Up Database Access

1. In the left sidebar, click "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and password (save these!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

## Step 4: Set Up Network Access

1. In the left sidebar, click "Network Access"
2. Click "Add IP Address"
3. For development, click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

## Step 5: Get Your Connection String

1. Go back to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string

## Step 6: Update Your Environment File

1. Copy the connection string
2. Replace `<password>` with your actual password
3. Replace `<dbname>` with `ellman-group`
4. Add it to your `.env.local` file:

```
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/ellman-group?retryWrites=true&w=majority
```

## Step 7: Test the Connection

Run the seeding script:
```bash
npm run seed
```

You should see: "Connected to MongoDB" and "Seeded X content items"

## Alternative: Local MongoDB Installation

If you prefer to install MongoDB locally:

### Ubuntu/Debian:
```bash
sudo apt update
sudo apt install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### macOS (with Homebrew):
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Windows:
Download and install from: https://www.mongodb.com/try/download/community

Then use this connection string in `.env.local`:
```
MONGODB_URI=mongodb://localhost:27017/ellman-group
```