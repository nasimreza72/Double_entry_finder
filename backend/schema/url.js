import mongoose from "mongoose";

const { Schema, model } = mongoose;
const required = true;
const unique = true;
const trim = true;

const urlSchema = new Schema({
  url: { type: String, required, trim, unique }
});

const Url = model("url", urlSchema);

export { Url };