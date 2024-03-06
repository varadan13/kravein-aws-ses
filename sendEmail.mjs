import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

const createSendEmailCommand = () => {
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: ["rcaesar1996@gmail.com"],
    },
    TemplateData: JSON.stringify({
      whatsWrong: "asdasdasd",
      placeInfo: "sadasdasd",
      business_types: "sadasdsad",
      service_category: "wqeqwe",
      feature_types: "--",
      cuisine_style: "weqwe",
      good_for: "qweqwe",
      other_details: "qweqweqwe",
    }),
    Source: "noreply@kravein.com.au",
    Template: "PLACE_CORRECTION",
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
