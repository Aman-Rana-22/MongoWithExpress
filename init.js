const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "yash",
        to: "preeti",
        msg: "Send me you id",
        created_at: new Date(),
    },
    {
        from: "yash",
        to: "preeti",
        msg: "Send me you id",
        created_at: new Date(),
    },
    {
        from: "Giri",
        to: "Tejas",
        msg: "Send me you game id",
        created_at: new Date(),
    },
    {
        from: "Rohit",
        to: "Narendra",
        msg: "Send me you instagram id",
        created_at: new Date(),
    },
    {
        from: "Sachin",
        to: "Sonu",
        msg: "Let's go buy some food",
        created_at: new Date(),
    },
    {
        from: "Naari",
        to: "Shudha",
        msg: "Send me you Facebook id",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);