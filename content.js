//wait for window to load before continuing
window.onload = function() {
  var elementsToRemove = document.querySelectorAll('div.GssDD'); //in my testing, the div showing the ad pane was <div class="GssDD">
  
  elementsToRemove.forEach(function (element) {
    element.remove();
  });
};