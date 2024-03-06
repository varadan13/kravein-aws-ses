import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

const createSendEmailCommand = () => {
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: ["rcaesar1996@gmail.com"],
    },
    TemplateData: JSON.stringify({
      placeName: "sdsd sdsd",
      placeAddress: "sdsd sd",
      userName: "sdsd",
      userEmail: "sdsds",
      itemPhotoUrl: "sdsdsd",
      itemName: "sdsdf sdsd",
    }),
    Source: "noreply@kravein.com.au",
    Template: "ITEM_PHOTOS",
  });
};

const sendEmail = async () => {
  const sendEmailCommand = createSendEmailCommand();

  try {
    return await client.send(sendEmailCommand);
  } catch (e) {
    console.error("Failed to send email.", e);
    return e;
  }
};

sendEmail();

export default sendEmail;
