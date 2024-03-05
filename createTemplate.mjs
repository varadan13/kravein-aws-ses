import {
  CreateTemplateCommand,
  UpdateTemplateCommand,
} from "@aws-sdk/client-ses";
import client from "./client.mjs";

/* HTML MARKUPS */
import googleMerchantOptOut from "./templates/googleMerchantOptOut.mjs";
import googleMerchantOptIn from "./templates/googleMerchantOptIn.mjs";
import menuCorrects from "./templates/menuCorrects.mjs";
import contactUsTemplate from "./templates/contactUsTemplate.mjs";
import feedbackTemplate from "./templates/feedbackTemplate.mjs";

const templateName = {
  FEEDBACK: "FEEDBACK",
  CONTACT_US: "CONTACT_US",
  REPORT_MENU_ERROR: "REPORT_MENU_ERROR",
  GOOGLE_MERCHANT_OPT_IN: "GOOGLE_MERCHANT_OPT_IN",
  GOOGLE_MERCHANT_OPT_OUT: "GOOGLE_MERCHANT_OPT_OUT",
};

const subject = {
  FEEDBACK: "User submitted the feedback form",
  CONTACT_US: "User submitted the contact us form",
  REPORT_MENU_ERROR: "User reported menu or pricing issue",
  GOOGLE_MERCHANT_OPT_IN: "You have a new order online opt in form submission!",
  GOOGLE_MERCHANT_OPT_OUT:
    "You have a new order online opt out form submission!",
};

const html = {
  FEEDBACK: feedbackTemplate,
  CONTACT_US: contactUsTemplate,
  REPORT_MENU_ERROR: menuCorrects,
  GOOGLE_MERCHANT_OPT_IN: googleMerchantOptOut,
  GOOGLE_MERCHANT_OPT_OUT: googleMerchantOptIn,
};

const createCreateTemplateCommand = () => {
  return new UpdateTemplateCommand({
    Template: {
      TemplateName: templateName["FEEDBACK"],
      HtmlPart: html["FEEDBACK"],
      SubjectPart: subject["FEEDBACK"],
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
