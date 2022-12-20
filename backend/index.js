import express from "express";
import cors from "cors";
import axios from "axios";
import * as dataBase from "./database-connection/database.js";
import { Url } from "./schema/url.js";
import dotenv from "dotenv";
import { trusted } from "mongoose";


dataBase.connect();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

///// Get Url

app.get("/api/getUrl", async (request, response) => {
  const urlList = await Url.find();

  try {
    response.send(urlList);
  } catch (error) {
    response.send({ message: "url is already there" });
    console.log(error);
  }
});

/////////// Test 19.12.2022

app.post("/api/sendOrderData", async (request, response) => {
  console.log(request.body.message[1]?.id);

  response.send({ "message": "Post data recived" });

});


///// Post Url to database

app.post("/api/url", async (request, response) => {
  console.log(request.body.sendUrl.preSendUrl);

  let checkUrl = await Url.findOne({
    url: request.body.sendUrl.preSendUrl,
  });

  if (checkUrl) {
    response.send({ "message": "Url altrady exist" });
    console.log("Url is already there")
  } else {
    try {
      await Url.create({ url: request.body.sendUrl.preSendUrl });
      response.send({ noMessage: "succesfully added" });
    } catch (error) {
      console.log(error);
    }
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


