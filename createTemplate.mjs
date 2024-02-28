import { CreateTemplateCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

import googleMerchantOptOut from "./templates/googleMerchantOptOut.mjs";
import verceltemplate from "./templates/verceltemplate.mjs";
import googleMerchantOptIn from "./templates/googleMerchantOptIn.mjs";

import fancytemplate from "./templates/fancytemplate.mjs";
const TEMPLATE_NAME = "GOOGLE_MERCHANT_OPT_IN";
const SUBJECT = "You have a new order online opt in form submission!";

const createCreateTemplateCommand = () => {
  return new CreateTemplateCommand({
    Template: {
      TemplateName: TEMPLATE_NAME,
      HtmlPart: googleMerchantOptIn,
      SubjectPart: SUBJECT,
    },
  });
};

const createTemplate = async () => {
  const createTemplateCommand = createCreateTemplateCommand();

  try {
    return await client.send(createTemplateCommand);
  } catch (err) {
    console.log("Failed to create template.", err);
    return err;
  }
};

createTemplate();

export default createTemplate;
