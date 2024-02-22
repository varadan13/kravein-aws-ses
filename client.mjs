import { SESClient } from "@aws-sdk/client-ses";
import dotenv from "dotenv";
dotenv.config();

const client = new SESClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: "us-east-1",
});

export default client;
