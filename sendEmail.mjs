import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";
import merchantOptoutData from "./testData/merchantOptoutData.mjs";

const createSendEmailCommand = () => {
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: ["rcaesar1996@gmail.com", "noreply@kravein.com.au"],
    },
    TemplateData: JSON.stringify(merchantOptoutData),
    Source: "noreply@kravein.com.au",
    Template: "GOOGLE_ORDER_ONLINE_MERCHANT_OPT_OUT",
  });
};

const sendEmail = async () => {
  const sendEmailCommand = createSendEmailCommand();

  try {
    return await client.send(sendEmailCommand);
  } catch (e) {
    console.error("Failed to send email.");
    return e;
  }
};

sendEmail();

export default sendEmail;
