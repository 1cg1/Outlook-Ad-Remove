//any time window changes, script will execute
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var elementsToRemove = document.querySelectorAll('div.GssDD, div.Ogt7j, div.Ogqyq'); //GssDD is ad pane on the right, Ogt7j is ad at top of mailbox, Ogqyq is upgrade to premium ad at bottom of folder list
    
    elementsToRemove.forEach(function (element) {
      element.remove();
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });