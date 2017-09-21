/**
 * Created by SCMORETO on 21/09/2017.
 */
import CheckoutRequest from "../api/CheckoutRequest";

let postCheckoutRequest = (project, services, users, network) => {
  let APIResponseCode = {};

  let checkoutDetails = {
    projectDetails: project,
    selectedServices: services,
    usersDetails: users,
    networkDetails: network
  };
  console.log(checkoutDetails);

  return new Promise((resolve, reject) => {
    CheckoutRequest.postCheckoutSummary(checkoutDetails)
      .then(result => {
        APIResponseCode = result;
        console.log(APIResponseCode);
      })
      .then(resolve)
      .catch(error => {
        console.log("[ERROR]");
        console.log(error);
        resolve();
      });
    console.log(APIResponseCode);

    return APIResponseCode;
  });
};

export default {
  postCheckoutRequest: postCheckoutRequest
};
