(function () {

  var cats = [
    {
      id: '#cat1',
      increment: 0,
      name: 'Kawaii cat',
      message: 'Este gato é muito fofo, mas é muito fofo tão fofo que da vontade de aperta',
      image: './images/cat.jpg'
    },
    {
      id: '#cat2',
      increment: 0,
      name: 'Snake cat',
      message: 'Este gato é muito astuto, vive pelas sombras e está a onde vc menos espera',
      image: './images/cat2.jpg'
    }
  ];

  function init() {
    // increment = 0;
    // heart = document.querySelector('#like-cat');
    // clicks = document.querySelector('.clicks');

    // heart.addEventListener('click', function (e) {
    //   e.preventDefault();

    //   increment += 1;
    //   clicks.innerText  = '' + increment;
    // }, false);

    cats.forEach(function(cat) {
      var card, title, message, button, clicks;

      card = document.querySelector(cat.id);
      title = document.querySelector(cat.id + ' .card-title');
      message = document.querySelector(cat.id + ' .card-message');
      button = document.querySelector(cat.id + ' button');
      clicks = document.querySelector(cat.id + ' .clicks');

      card.style.backgroundImage = 'url(' + cat.image + ')';

      title.innerText = cat.name;
      message.innerText = cat.message;
      button.addEventListener('click', function (e) {
        e.preventDefault();

        cat.increment += 1;
        clicks.innerText  = '' + cat.increment;
      }, false);
    });
  }

  document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
      init();
    }
  };
})();
