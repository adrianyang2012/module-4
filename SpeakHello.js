
(function (window) {
var speakWord = "Hello";
var speak_hi = {};
speak_hi.say_hi = (function (name) {
  console.log(speakWord + " " + name);
})
window.speak_hi = speak_hi;
})(window)

