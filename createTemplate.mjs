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
import addPlaceTemplate from "./templates/addPlaceTemplate.mjs";
import itemReviewTemplate from "./templates/itemReviewTemplate.mjs";
import claimPlaceTemplate from "./templates/claimPlaceTemplate.mjs";
import placePhotoTemplate from "./templates/placePhotoTemplate.mjs";
import itemPhotoTemplate from "./templates/itemPhotoTemplate.mjs";

import orderReceivedTemplate from "./templates/orderReceivedTemplate.mjs";

import testTemplate from "./templates/testTemplate.mjs";

/* HTML MARKUPS END */

const templateName = {
  ITEM_REVIEW: "ITEM_REVIEW",
  ADD_PLACE: "ADD_PLACE",
  PLACE_REVIEW: "PLACE_REVIEW",
  FEEDBACK: "FEEDBACK",
  CONTACT_US: "CONTACT_US",
  REPORT_MENU_ERROR: "REPORT_MENU_ERROR",
  GOOGLE_MERCHANT_OPT_IN: "GOOGLE_MERCHANT_OPT_IN",
  GOOGLE_MERCHANT_OPT_OUT: "GOOGLE_MERCHANT_OPT_OUT",
  PLACE_CORRECTION: "PLACE_CORRECTION",
  TEST_TEMPLATE: "TEST_TEMPLATE",
  CLAIM_PLACE: "CLAIM_PLACE",
  PLACE_PHOTOS: "PLACE_PHOTOS",
  ITEM_PHOTOS: "ITEM_PHOTOS",
  ORDER_RECEIVED: "ORDER_RECEIVED",
};

const subject = {
  ITEM_REVIEW: "User submitted item review",
  ADD_PLACE: "User added a new place",
  PLACE_REVIEW: "User submitted place review",
  FEEDBACK: "User submitted the feedback form",
  CONTACT_US: "User submitted the contact us form",
  REPORT_MENU_ERROR: "User reported menu or pricing issue",
  GOOGLE_MERCHANT_OPT_IN: "You have a new order online opt in form submission!",
  GOOGLE_MERCHANT_OPT_OUT:
    "You have a new order online opt out form submission!",
  PLACE_CORRECTION: "User reported place correction!",
  TEST_TEMPLATE: "TEST_TEMPLATE",
  CLAIM_PLACE: "User submitted a place claim",
  PLACE_PHOTOS: "User submitted place photos",
  ITEM_PHOTOS: "User submitted item photos",
  ORDER_RECEIVED: "Recieved an order",
};

const html = {
  ITEM_REVIEW: itemReviewTemplate,
  ADD_PLACE: addPlaceTemplate,
  PLACE_REVIEW: placeReviewTemplate,
  PLACE_CORRECTION: placeCorrectionTemplates,
  FEEDBACK: feedbackTemplate,
  CONTACT_US: contactUsTemplate,
  REPORT_MENU_ERROR: menuCorrects,
  GOOGLE_MERCHANT_OPT_IN: googleMerchantOptOut,
  GOOGLE_MERCHANT_OPT_OUT: googleMerchantOptIn,
  TEST_TEMPLATE: testTemplate,
  CLAIM_PLACE: claimPlaceTemplate,
  PLACE_PHOTOS: placePhotoTemplate,
  ITEM_PHOTOS: itemPhotoTemplate,
  ORDER_RECEIVED: orderReceivedTemplate,
};

const createCreateTemplateCommand = () => {
  return new UpdateTemplateCommand({
    Template: {
      TemplateName: templateName["TEST_TEMPLATE"],
      HtmlPart: html["TEST_TEMPLATE"],
      SubjectPart: subject["TEST_TEMPLATE"],
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
