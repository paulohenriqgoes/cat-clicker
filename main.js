(function () {

  var cats = [
    {
      increment: 0,
      name: 'Kawaii cat',
      message: 'Este gato é muito fofo, mas é muito fofo tão fofo que da vontade de aperta',
      image: './images/cat.jpg'
    },
    {
      increment: 0,
      name: 'Snake cat',
      message: 'Este gato é muito astuto, vive pelas sombras e está a onde vc menos espera',
      image: './images/cat2.jpg'
    }
  ];

  /*
    cria os elementos nesta estrutura
    <div class="cat-card" id="cat1">
      <div class="card-content">
        <div class="card-title" cat-name></div>
        <p class="card-message">
        </p>

        <div class="card-actions">
          <button type="button" cat-onclick>
            <img src="images/heart.svg" alt="heart" class="icon-heart">
          </button>
          <span class="clicks" cat-clicks>
            0
          </span>
        </div>
      </div>
    </div>
  */
  function init() {
    cats.forEach(function(cat) {
      var card, title, message, button, clicks, repeat, cardActions, cardContent, heart;

      repeat = document.querySelector('#repeat-cats');

      card = document.createElement('div');
      title = document.createElement('div');
      cardActions = document.createElement('div');
      cardContent = document.createElement('div');
      message = document.createElement('p');
      button = document.createElement('button');
      clicks = document.createElement('span');
      heart = document.createElement('img');

      card.classList.add('cat-card');
      card.style.backgroundImage = 'url(' + cat.image + ')';

      cardContent.classList.add('card-content');
      cardActions.classList.add('card-actions');

      title.classList.add('card-title');
      title.innerText = cat.name;

      message.innerText = cat.message;

      clicks.classList.add('clicks');
      clicks.innerText = '0';

      heart.src = 'images/heart.svg';
      heart.classList.add('icon-heart');

      button.addEventListener('click', function (e) {
        e.preventDefault();

        cat.increment += 1;
        clicks.innerText  = '' + cat.increment;
      }, false);

      button.appendChild(heart);
      cardActions.appendChild(button);
      cardActions.appendChild(clicks);

      cardContent.appendChild(title);
      cardContent.appendChild(message);
      cardContent.appendChild(cardActions);

      card.appendChild(cardContent);
      repeat.appendChild(card);
    });
  }

  document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
      init();
    }
  };
})();
