import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

const createSendEmailCommand = () => {
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: ["rcaesar1996@gmail.com"],
    },
    TemplateData: JSON.stringify({
      itemReviewUrl:
        "https://dev1.admin.portal.kravein.com.au/place-approval-update/6d5ca11c-60be-47cf-a936-099db3bb5e9f",
      username: "Varadan",
      userId: "6d5ca11c-60be-47cf-a936-099db3bb5e9f",
    }),
    Source: "noreply@kravein.com.au",
    Template: "ITEM_REVIEW",
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
