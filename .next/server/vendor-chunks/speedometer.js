/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/speedometer";
exports.ids = ["vendor-chunks/speedometer"];
exports.modules = {

/***/ "(ssr)/./node_modules/speedometer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/speedometer/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("var tick = 1\nvar maxTick = 65535\nvar resolution = 4\nvar inc = function () {\n  tick = (tick + 1) & maxTick\n}\n\nvar timer = setInterval(inc, (1000 / resolution) | 0)\nif (timer.unref) timer.unref()\n\nmodule.exports = function (seconds) {\n  var size = resolution * (seconds || 5)\n  var buffer = [0]\n  var pointer = 1\n  var last = (tick - 1) & maxTick\n\n  return function (delta) {\n    var dist = (tick - last) & maxTick\n    if (dist > size) dist = size\n    last = tick\n\n    while (dist--) {\n      if (pointer === size) pointer = 0\n      buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1]\n      pointer++\n    }\n\n    if (delta) buffer[pointer - 1] += delta\n\n    var top = buffer[pointer - 1]\n    var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer]\n\n    return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3BlZWRvbWV0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJFOlxcU2FuaXR5LVN0b3JlXFxzYW5pdHktaHViXFxub2RlX21vZHVsZXNcXHNwZWVkb21ldGVyXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGljayA9IDFcbnZhciBtYXhUaWNrID0gNjU1MzVcbnZhciByZXNvbHV0aW9uID0gNFxudmFyIGluYyA9IGZ1bmN0aW9uICgpIHtcbiAgdGljayA9ICh0aWNrICsgMSkgJiBtYXhUaWNrXG59XG5cbnZhciB0aW1lciA9IHNldEludGVydmFsKGluYywgKDEwMDAgLyByZXNvbHV0aW9uKSB8IDApXG5pZiAodGltZXIudW5yZWYpIHRpbWVyLnVucmVmKClcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xuICB2YXIgc2l6ZSA9IHJlc29sdXRpb24gKiAoc2Vjb25kcyB8fCA1KVxuICB2YXIgYnVmZmVyID0gWzBdXG4gIHZhciBwb2ludGVyID0gMVxuICB2YXIgbGFzdCA9ICh0aWNrIC0gMSkgJiBtYXhUaWNrXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkZWx0YSkge1xuICAgIHZhciBkaXN0ID0gKHRpY2sgLSBsYXN0KSAmIG1heFRpY2tcbiAgICBpZiAoZGlzdCA+IHNpemUpIGRpc3QgPSBzaXplXG4gICAgbGFzdCA9IHRpY2tcblxuICAgIHdoaWxlIChkaXN0LS0pIHtcbiAgICAgIGlmIChwb2ludGVyID09PSBzaXplKSBwb2ludGVyID0gMFxuICAgICAgYnVmZmVyW3BvaW50ZXJdID0gYnVmZmVyW3BvaW50ZXIgPT09IDAgPyBzaXplIC0gMSA6IHBvaW50ZXIgLSAxXVxuICAgICAgcG9pbnRlcisrXG4gICAgfVxuXG4gICAgaWYgKGRlbHRhKSBidWZmZXJbcG9pbnRlciAtIDFdICs9IGRlbHRhXG5cbiAgICB2YXIgdG9wID0gYnVmZmVyW3BvaW50ZXIgLSAxXVxuICAgIHZhciBidG0gPSBidWZmZXIubGVuZ3RoIDwgc2l6ZSA/IDAgOiBidWZmZXJbcG9pbnRlciA9PT0gc2l6ZSA/IDAgOiBwb2ludGVyXVxuXG4gICAgcmV0dXJuIGJ1ZmZlci5sZW5ndGggPCByZXNvbHV0aW9uID8gdG9wIDogKHRvcCAtIGJ0bSkgKiByZXNvbHV0aW9uIC8gYnVmZmVyLmxlbmd0aFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/speedometer/index.js\n");

/***/ })

};
;