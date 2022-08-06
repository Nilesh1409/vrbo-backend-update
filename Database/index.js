const mongoose=require("mongoose");
require('dotenv').config();
async function connectDatabase()
{
    
    const dbURI=process.env.MONGOURI;
    try {
        await mongoose.connect(dbURI);
        console.log("Database connected ")
    } catch (error) {
        console.log("Something went wrong with database")
    }
}

module.exports=connectDatabase;