import mongoose from "mongoose";

type ConnectionObject  = {
    isConnected?: number
}


const connection: ConnectionObject = {
   
}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected");
        return
    }

    //if not connected then connect

    try{
        const db = await mongoose.connect(process.env.MONGODB_URL || " ")
        connection.isConnected = db.connections[0].readyState
        console.log(db)
        console.log(db.connections)
        console.log("database connection succesfull")
    }catch(error){
        console.log("database connection failes", error)
        process.exit(1)
    }
}


export default dbConnect