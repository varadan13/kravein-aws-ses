import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import dotenv from "dotenv";
dotenv.config();

const client = new SESClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: "us-east-1",
});

const createSendEmailCommand = (toAddress, fromAddress, message) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: message,
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "You have a new order online opt out form submission",
      },
    },
    Source: fromAddress,
  });
};

const run = async ({ to, message }) => {
  const sendEmailCommand = createSendEmailCommand(
    to,
    "noreply@kravein.com.au",
    message
  );

  try {
    return await client.send(sendEmailCommand);
  } catch (e) {
    console.error("Failed to send email.");
    return e;
  }
};

export default run;
