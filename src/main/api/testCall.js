import request from "then-request";

let endpoint = "http://localhost:8080/adc-portal/tester";

let getSuccess = object => {
  return request("GET", endpoint).then(response => {
    let body = JSON.parse(response.getBody());
    console.log(response.statusCode);
    console.log(body);
    return body;
  });
};

export default {
  getSuccess: getSuccess
};
