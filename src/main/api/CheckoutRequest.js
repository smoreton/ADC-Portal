/**
 * Created by SCMORETO on 12/09/2017.
 */

import request from "then-request";

let endpoint =
  "http://adc-portal-checkout-service.eu-gb.mybluemix.net/adc-portal/checkout-summary";

// "http://localhost:8080/adc-portal/checkout-summary";
//

//"http://adc-portal-checkout-service.eu-gb.mybluemix.net/adc-portal/checkout-summary";
//"http://localhost:8080/adc-portal/checkout-summary";
//https://wiremock-adc-aston-aie.eu-gb.mybluemix.net/api/adc-portal/checkout-summary
let result = {};

let postCheckoutSummary = object => {
  return request("POST", endpoint, {
    json: { checkoutSummary: object }
  }).then(response => {
    result = {
      statusCode: response.statusCode,
      jiraResponse: response.body
    };
    return result;
  });
};

export default {
  postCheckoutSummary: postCheckoutSummary
};
