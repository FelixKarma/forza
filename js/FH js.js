// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("../data/cars.json");
const cars = await reponse.json();

const popupCars = document.getElementById('popupCars');

cars.map(function(item) {
    let article = document.createElement('article');
    article.className = 'faq-item';

    const markup = `
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${item.saison}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p></p>
      </div>
    </div>
  </div>
</div>

    `;
    article.innerHTML = markup;
    popupCars.appendChild(article)
})