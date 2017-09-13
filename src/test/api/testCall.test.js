/**
 * Created by SCMORETO on 08/09/2017.
 */
import { expect, assert } from "chai";
import getSuccess from "../../main/api/testCall";

describe("GET /tasks", function() {
  let object;

  it("returns a list of tasks", function(done) {
    // object = getSuccess.getSuccess();
    // console.log(object);
    //expect(object).to.equal({});
    object = getSuccess.getSuccess();
    //  new Promise(() => {
    //   getSuccess.getSuccess()//.then(result => {
    // object = JSON.parse(result);
    // })
    //  });
    //  console.log(object.body);
  });
});
