import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn; // Use existing connection
  }

  if (!cached.promise) {
    const options = {
      maxPoolSize: 10,
      minPoolSize: 5,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4, // Force IPv4
    };

    // Handle SSL/TLS for MongoDB Atlas
    // This fixes the "tlsv1 alert internal error" issue
    if (MONGODB_URI.includes('mongodb+srv') || MONGODB_URI.includes('ssl=true')) {
      // For development: allow invalid certificates
      // For production: remove these and use proper certificates
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

      options.ssl = true;
      options.tls = true;
      options.tlsAllowInvalidCertificates = true;
      options.tlsAllowInvalidHostnames = true;
    }

    console.log('🔌 Attempting to connect to MongoDB...');

    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => {
        console.log("✅ MongoDB Connected Successfully");
        return mongoose;
      })
      .catch((error) => {
        console.error("❌ MongoDB Connection Failed:", error.message);
        console.error("Error details:", {
          name: error.name,
          code: error.code,
          reason: error.reason
        });
        cached.promise = null; // Reset so next call can retry
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.conn = null;
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default connectDB;