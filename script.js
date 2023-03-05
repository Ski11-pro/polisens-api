var container = document.querySelector('.container');
var apiUrl = 'https://polisen.se/api/events';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    var latestEvents = data.slice(0, 6);

    latestEvents.forEach(event => {
      var card = document.createElement('div');
      card.className = 'card';

      var h2 = document.createElement('h2');
      h2.textContent = event.summary;

      var p1 = document.createElement('p');
      var date = new Date(event.datetime);
      p1.style.fontSize = '18px';
      p1.textContent = 'Datum: ' + date.toLocaleDateString() + ' Tid: ' + date.toLocaleTimeString();

      var p2 = document.createElement('p');
      p2.textContent = event.description;

      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);

      container.appendChild(card);
    });
  })
  .catch(error => console.log(error));
