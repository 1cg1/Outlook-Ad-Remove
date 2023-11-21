document.addEventListener('DOMContentLoaded', function () {
    var divToRemove = document.getElementsByClassName("GssDD");
    if (divToRemove) {
      divToRemove.parentNode.removeChild(divToRemove);
    }
  });