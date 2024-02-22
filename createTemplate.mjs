import { CreateTemplateCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

import googleMerchantOptOut from "./templates/googleMerchantOptOut.mjs";
const TEMPLATE_NAME = "GOOGLE_ORDER_ONLINE_MERCHANT_OPT_OUT";
const SUBJECT = "You have a new order online opt out form submission!";

const createCreateTemplateCommand = () => {
  return new CreateTemplateCommand({
    Template: {
      TemplateName: TEMPLATE_NAME,
      HtmlPart: googleMerchantOptOut,
      SubjectPart: SUBJECT,
    },
  });
};

const run = async () => {
  const createTemplateCommand = createCreateTemplateCommand();

  try {
    return await client.send(createTemplateCommand);
  } catch (err) {
    console.log("Failed to create template.", err);
    return err;
  }
};

run();
