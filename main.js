(function () {
  var heart, clicks, increment;

  function init() {
    increment = 0;
    heart = document.querySelector('#like-cat');
    clicks = document.querySelector('.clicks');

    heart.addEventListener('click', function (e) {
      e.preventDefault();

      increment += 1;
      clicks.innerText  = '' + increment;
    }, false);
  }

  document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
      init();
    }
  };
})();
