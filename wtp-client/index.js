const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", async (qr) => {
  let qcode = await qrcode.generate(qr, { small: true });
});

client.on("auth_failure", (s) => {
  console.log(`AUTH FAILIYAAA`);
});

client.on("ready", async () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  console.log(message.body);
  console.log(message.author);

  const chat = await message.getChat();
  console.log(chat);

  //   if (message.body.includes("ns") && message.hasMedia) {
  //     const media = await message.downloadMedia();
  //     console.log(media.data.length, media.filename, media.mimetype);
  //     const fileName = media.filename ? media.filename : "custom-file-name.jpeg";

  //     try {
  //       fs.writeFile("./media" + fileName, media.data, "base64", function (err) {
  //         if (err) {
  //           console.log(err);
  //         }
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
});

export default client;
