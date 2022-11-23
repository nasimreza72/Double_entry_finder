import express from "express";
import cors from "cors";
import axios from "axios";
import * as dataBase from "./database-connection/database.js";
import { Url } from "./schema/url.js";
import dotenv from "dotenv";

dataBase.connect();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/url", async(request, response) => {
   const urlList = await Url.find()
   response.send(urlList);
});

app.post("/api/url", async (request, response) => {
  await Url.create(request.body);
  console.log(request.body);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
