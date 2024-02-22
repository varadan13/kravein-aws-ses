import { CreateTemplateCommand } from "@aws-sdk/client-ses";
import client from "./client.mjs";

import googleMerchantOptOut from "./templates/googleMerchantOptOut.mjs";

import fancytemplate from "./templates/fancytemplate.mjs";
const TEMPLATE_NAME = "FANCY_TEMPLATE";
const SUBJECT = "You have a new order online opt out form submission!";

const createCreateTemplateCommand = () => {
  return new CreateTemplateCommand({
    Template: {
      TemplateName: TEMPLATE_NAME,
      HtmlPart: fancytemplate,
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
