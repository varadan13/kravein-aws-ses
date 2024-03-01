import {
  CreateTemplateCommand,
  UpdateTemplateCommand,
} from "@aws-sdk/client-ses";
import client from "./client.mjs";

import googleMerchantOptOut from "./templates/googleMerchantOptOut.mjs";
import verceltemplate from "./templates/verceltemplate.mjs";
import googleMerchantOptIn from "./templates/googleMerchantOptIn.mjs";
import fancytemplate from "./templates/fancytemplate.mjs";

import menuCorrects from "./templates/menuCorrects.mjs";

const TEMPLATE_NAME = "REPORT_MENU_ERROR";
const SUBJECT = "User reported menu or pricing issue";

const fromIsAlways = ["noreply@kravein.com.au"];

const to = ["restaurantEmail"]; // if restaurant email not found send to admin kravein
const copyInProd = ["admin@kravein.com.au", "dave@bytelocal.com.au"];
const copyInDev = ["noreply@kravein.com.au"];

const createCreateTemplateCommand = () => {
  return new UpdateTemplateCommand({
    Template: {
      TemplateName: TEMPLATE_NAME,
      HtmlPart: menuCorrects,
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
