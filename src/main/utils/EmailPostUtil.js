/**
 * Created by SCMORETO on 25/10/2017.
 */

import EmailQuery from "../api/EmailQueryRequest";

let postEmailQuery = (usersEmail, emailQuery) => {
  let query = {
    userEmail: usersEmail,
    userQuery: emailQuery
  };

  return new Promise((resolve, reject) => {
    EmailQuery.postEmailQuery(query).then(resolve).catch(error => {
      console.log("[ERROR]");
      console.log(error);
      resolve();
    });
  });
};

export default {
  postEmailQuery: postEmailQuery
};
