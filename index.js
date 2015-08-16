(function(exports) {
  'use strict';

  function isPhantom() {
    return !!(typeof window != 'undefined' && window.callPhantom && window._phantom);
  }

  if(typeof define === 'function' && define.amd) {
    define(function() { return isPhantom; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = isPhantom;
  } else {
    exports.isPhantom = isPhantom;
  }

})(this);
