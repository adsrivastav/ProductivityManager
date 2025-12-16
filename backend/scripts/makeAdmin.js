const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");


dotenv.config({ path: "../.env" }); 

const makeAdmin = async () => {
  try {
   
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    
    const targetEmail = "srivastavji7669@gmail.com"; 

   
    const user = await User.findOne({ email: targetEmail });
    if (!user) {
      console.log("User not found!");
      process.exit(1);
    }

    user.role = "admin";
    await user.save();

    console.log(`Success! User ${user.name} (${user.email}) is now an Admin.`);
    process.exit();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

makeAdmin();