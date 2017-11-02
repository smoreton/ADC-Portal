/**
 * Created by SCMORETO on 27/06/2017.
 */
/** Update by TDietrich 25/10/2017 to include updated test setup for react-16**/

import raf from "./tempPolyfills";
import Enzyme, { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import injectTapEventPlugin from "react-tap-event-plugin";
// Make Enzyme functions available in all test files without importing

global.shallow = shallow;
global.render = render;
global.mount = mount;

configure({ adapter: new Adapter() });
injectTapEventPlugin();

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
