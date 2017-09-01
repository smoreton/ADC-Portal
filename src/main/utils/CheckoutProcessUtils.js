const checkoutSteps = require("../data/checkoutProgressSteps.json");

//-------- START PROGRESS BAR STEPS SETUP --------
const progressBarContent = Object.values(checkoutSteps.progressSteps);
const completeProgressBarContent = Object.values(
  checkoutSteps.completeProgressSteps
);
const networkProgressBarContent = Object.values(
  checkoutSteps.networkProgressSteps
);
//-------- START PROGRESS BAR STEPS SETUP --------

//-------- START CHECKOUT PATH SETUP --------
const checkoutPaths = Object.values(checkoutSteps.checkoutMainPath);
const completeCheckoutPaths = Object.values(checkoutSteps.checkoutCompletePath);
const checkoutNetworkPath = Object.values(checkoutSteps.checkoutNetworkPath);
//-------- START CHECKOUT PATH SETUP --------

export default function(array, type) {
  let network = false;
  let standard = false;

  array.forEach(item => {
    if (
      item.service.category === "PaaS / IaaS" ||
      item.service.category === "Networks"
    ) {
      network = true;
    }

    if (item.service.category === "Tools/Software") {
      standard = true;
    }
  });

  if (network && !standard) {
    if (type === "step") {
      return networkProgressBarContent;
    } else {
      return checkoutNetworkPath;
    }
  } else if (!network && standard) {
    if (type === "step") {
      return progressBarContent;
    } else {
      return checkoutPaths;
    }
  } else {
    if (type === "step") {
      return completeProgressBarContent;
    } else {
      return completeCheckoutPaths;
    }
  }
}
