import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";
import merchantOptoutData from "./testData/merchantOptoutData.mjs";

const createSendEmailCommand = () => {
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: ["rcaesar1996@gmail.com"],
    },
    TemplateData: JSON.stringify({}),
    Source: "noreply@kravein.com.au",
    Template: "FANCY_TEMPLATE",
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
