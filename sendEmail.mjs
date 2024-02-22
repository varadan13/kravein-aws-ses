import { SendEmailCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

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

const sendEmail = async ({ to, message }) => {
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

export default sendEmail;
