import mangoose from 'mongoose';

export const connectDB = async () => {
    try{
        const conn=await mangoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error('Error connecting database');
    }
};