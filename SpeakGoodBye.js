
(function (window) {
var speakWord = "Good Bye";
var speak_bye = {};
speak_bye.say_good_bye = (function (name) {
  console.log(speakWord + " " + name);
})
window.speak_bye = speak_bye;
})(window)
