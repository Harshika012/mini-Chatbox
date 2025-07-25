//Here we'll write code to initialise our database
//We'll run this file only once, when we intialize our database with some sample data at starting.
//So, if at anytime we empty our DB, we just need to run this init.js file to store sample data again.
const mongoose = require('mongoose');
const Chat= require("./models/chat.js");
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
allChats=[
    {
    from:"neha",
    to:"priya",
    msg:"Send me your exam sheets",
    created_at: new Date()
    },
      {
    from:"rohit",
    to:"mohit",
    msg:"teach me JS callbacks",
    created_at: new Date()
    },
    {from:"amit",
    to:"sumit",
    msg:"Joined today!",
    created_at: new Date()
    },
    {from:"anita",
    to:"ramesh",
    msg:"bring me some fruits",
    created_at: new Date()
    },
];
Chat.insertMany(allChats);

