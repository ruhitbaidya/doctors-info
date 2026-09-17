import mongoose from "mongoose";
import { config } from "./app/config/config";
import app from "./app/app";

const DBConnection = async ()=>{
  try{
    await mongoose.connect(config.db_url as string);
    console.log("Database Is Connect Successfully");
    app.listen(config.port, ()=>{
      console.log("Server Is Connect Successfully")
    })
  }catch(err){
    console.error(`Something Went Wrong ${err}`);
    process.exit(1)
  }
}

DBConnection();