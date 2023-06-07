
// Fonction pour créer et afficher la modal avec les données JSON
async function afficherModalJSON(carName) {
  const reponse = await fetch("../data/cars.json");
  const cars = await reponse.json();
  // Convertir le tableau JSON en une chaîne de caractères JSON


  // Créer une div pour la modal
  var modalDiv = document.createElement("div");
  modalDiv.style.position = "fixed";
  modalDiv.style.top = "0";
  modalDiv.style.left = "0";
  modalDiv.style.width = "100%";
  modalDiv.style.height = "100%";
  modalDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modalDiv.style.zIndex = "9999";

  // Créer une div pour le contenu de la modal
  var modalContentDiv = document.createElement("div");
  modalContentDiv.style.backgroundColor = "turquoise";
  modalContentDiv.style.color = "blue";
  modalContentDiv.style.textAlign = "center";
  modalContentDiv.style.margin = "10% auto";
  // modalContentDiv.style.marginTop= "px";
  // modalContentDiv.style.marginBottom = "50px";
  // modalContentDiv.style.marginRight = "50px";
  // modalContentDiv.style.marginLeft = "50px";
  modalContentDiv.style.padding = "10px";
  modalContentDiv.style.width = "22%";

  for (const car of cars) {

    console.log(car.voitures);
    if (car.voitures == carName) {
      var jsonPre = document.createElement("pre");
      jsonPre.innerHTML = `
<img src="${car.link}" height="200">
${car.voitures}
indiceperformance : ${car.indiceperformance}
transmission : ${car.transmission}
puissance : ${car.puissance}
couple : ${car.couple} 
poids : ${car.poids}
repartitiondupoids : ${car.repartitiondupoids}
cylindrée : ${car.cylindrée}
vitesse : ${car.vitesse}
tenuederoute : ${car.tenuederoute}
accélération : ${car.accélération}
départarrêter : ${car.départarrêter}
freinage : ${car.freinage}
toutterrain : ${car.toutterrain}

      `;
    }
  }

  // Créer un élément pre pour afficher les données JSON

  // Ajouter le pre à la div de contenu de la modal
  modalContentDiv.appendChild(jsonPre);

  // Créer un bouton de fermeture de la modal
  var closeButton = document.createElement("button");
  closeButton.textContent = "Fermer";
  closeButton.style.marginTop = "10px";

  // Ajouter un gestionnaire d'événement pour fermer la modal lorsqu'on clique sur le bouton
  closeButton.addEventListener("click", function () {
    modalDiv.remove();
  });

  // Ajouter le bouton de fermeture à la div de contenu de la modal
  modalContentDiv.appendChild(closeButton);

  // Ajouter la div de contenu de la modal à la div de la modal
  modalDiv.appendChild(modalContentDiv);

  // Ajouter la div de la modal au body du document
  document.body.appendChild(modalDiv);
}

// Appeler la fonction pour afficher la modal

