/**
 * Created by SCMORETO on 12/09/2017.
 */

import request from "then-request";

let endpoint = "http://localhost:8080/adc-portal/checkout-summary";

let sendPost = object => {
  return request("POST", endpoint, {
    json: { checkoutSummary: object }
  }).then(response => {
    let body = JSON.parse(response.body);
    console.log(response.statusCode);
    console.log(body);
    return body;
  });
};

export default {
  sendPost: sendPost
};
