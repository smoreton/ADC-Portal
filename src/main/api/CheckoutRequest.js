/**
 * Created by SCMORETO on 12/09/2017.
 */

import request from "then-request";

let endpoint = "http://localhost:8080/adc-portal/checkout-summary";

let postCheckoutSummary = object => {
  return request("POST", endpoint, {
    json: { checkoutSummary: object }
  }).then(response => {
    // let body = JSON.parse(response.body);
    // let statusCode = ;
    console.log(response.statusCode);
    return JSON.parse(response.statusCode);
  });
};

export default {
  postCheckoutSummary: postCheckoutSummary
};
