import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

const createSendEmailCommand = () => {
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: ["rcaesar1996@gmail.com"],
    },
    TemplateData: JSON.stringify({
      name: "Aneesh",
      relationship: "asdasd",
      email: "sdadsd@sad",
      phone: "2113123213",
      address: "213123",
      linkedin: "123213",
      services: "123123123",
      claimPlaceUrl: "sdfsdfsdf",
    }),
    Source: "noreply@kravein.com.au",
    Template: "CLAIM_PLACE",
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
