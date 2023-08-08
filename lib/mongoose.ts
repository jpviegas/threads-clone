import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) return console.error('MONGODB_URL NOT FOUND');
  if (isConnected) return console.error('Already connected to MongoDB');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};
