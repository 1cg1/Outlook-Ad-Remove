document.addEventListener('DOMContentLoaded', function () {
  var divsToRemove = document.getElementsByClassName('classNameToRemove');
  var divsArray = Array.from(divsToRemove);
  divsArray.forEach(function (div) {
    div.parentNode.removeChild(div);
  });
});