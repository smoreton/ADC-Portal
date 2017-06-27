/**
 * Created by SCMORETO on 27/06/2017.
 */

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
window.matchMedia =
  window.matchMedia ||
  function() {
    console.log("hello");
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
