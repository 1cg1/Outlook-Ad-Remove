document.addEventListener('DOMContentLoaded', function () {
  var divsToRemove = document.getElementsByClassName('GssDD');
  var divsArray = Array.from(divsToRemove);
  divsArray.forEach(function (div) {
    div.parentNode.removeChild(div);
  });
});