(() => {
  var __webpack_modules__ = {
    "./src/base/index.js":
      module => {
        module.exports = "base";
      },

    "./src/hello.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        let base = __webpack_require__(
          "./src/base/index.js"
        );
        console.log(base);
        module.exports = "hello";
      }
  };
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }

  !(function() {
    let hello = __webpack_require__( "./src/hello.js");
    console.log(hello);
  })();
})();
