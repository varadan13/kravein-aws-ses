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
import placeReviewTemplate from "./templates/placeReviewTemplate.mjs";
import placeCorrectionTemplates from "./templates/placeCorrectionTemplates.mjs";

import testTemplate from "./templates/testTemplate.mjs";

/* HTML MARKUPS END */

const templateName = {
  PLACE_REVIEW: "PLACE_REVIEW",
  FEEDBACK: "FEEDBACK",
  CONTACT_US: "CONTACT_US",
  REPORT_MENU_ERROR: "REPORT_MENU_ERROR",
  GOOGLE_MERCHANT_OPT_IN: "GOOGLE_MERCHANT_OPT_IN",
  GOOGLE_MERCHANT_OPT_OUT: "GOOGLE_MERCHANT_OPT_OUT",
  PLACE_CORRECTION: "PLACE_CORRECTION",
  TEST_TEMPLATE: "TEST_TEMPLATE",
};

const subject = {
  PLACE_REVIEW: "User submitted Place Review",
  FEEDBACK: "User submitted the feedback form",
  CONTACT_US: "User submitted the contact us form",
  REPORT_MENU_ERROR: "User reported menu or pricing issue",
  GOOGLE_MERCHANT_OPT_IN: "You have a new order online opt in form submission!",
  GOOGLE_MERCHANT_OPT_OUT:
    "You have a new order online opt out form submission!",
  PLACE_CORRECTION: "User reported place correction!",
  TEST_TEMPLATE: "TEST_TEMPLATE",
};

const html = {
  PLACE_REVIEW: placeReviewTemplate,
  PLACE_CORRECTION: placeCorrectionTemplates,
  FEEDBACK: feedbackTemplate,
  CONTACT_US: contactUsTemplate,
  REPORT_MENU_ERROR: menuCorrects,
  GOOGLE_MERCHANT_OPT_IN: googleMerchantOptOut,
  GOOGLE_MERCHANT_OPT_OUT: googleMerchantOptIn,
  TEST_TEMPLATE: testTemplate,
};

const createCreateTemplateCommand = () => {
  return new UpdateTemplateCommand({
    Template: {
      TemplateName: templateName["REPORT_MENU_ERROR"],
      HtmlPart: html["REPORT_MENU_ERROR"],
      SubjectPart: subject["REPORT_MENU_ERROR"],
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
