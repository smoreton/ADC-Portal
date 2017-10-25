/**
 * Created by SCMORETO on 25/10/2017.
 */

import request from "then-request";

let endpoint =
  "https://adc-portal-checkout-service.eu-gb.mybluemix.net/adc-portal/user-query";

let result = {};

let postEmailQuery = object => {
  return request("POST", endpoint, {
    json: { emailQuery: object }
  }).then(response => {
    result = {
      statusCode: response.statusCode
    };
    console.log(response.body);
    return result;
  });
};

export default {
  postEmailQuery: postEmailQuery
};
