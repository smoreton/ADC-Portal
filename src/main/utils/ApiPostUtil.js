import CheckoutRequest from "../api/CheckoutRequest";

//export default function
//
let postCheckoutSummary = (project, services, users, network) => {
  let checkoutDetails = {
    projectDetails: project,
    selectedServices: services,
    usersDetails: users,
    networkDetails: network
  };

  return new Promise((resolve, reject) => {
    CheckoutRequest.postCheckoutSummary(checkoutDetails)
      .then(resolve)
      .catch(error => {
        console.log("[ERROR]");
        console.log(error);
        resolve();
      });
  });
};

export default {
  postCheckoutSummary: postCheckoutSummary
};
