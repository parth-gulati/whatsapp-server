import client from "./whatsapp-client";
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

app.get("/logout", async (req, res) => {
  try {
    let response = await client.logout();
    res.send({ success: true, message: response });
  } catch (err) {
    res.send({ success: false, message: err.message });
  }
});

app.get("/chats", async (req, res) => {
  try {
    let chats = await client.getChats();
    chats = chats.filter((x) => x.isGroup);
    res.send(chats);
  } catch (err) {
    res.send(`Error: ${err.message} `);
  }
});

app.listen(port);

client.initialize();
