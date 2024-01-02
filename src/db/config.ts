import mongoose from "mongoose";

export async function dbConnect(){
    try {
        mongoose.connect(process.env.MONOGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("db connected");
        })

        connection.on('error', (err) => {
            console.log('db connection error', err);
            process.exit()
        })

    } catch (error) {
        console.log('something went wrong');
        console.log(error);
    }
}