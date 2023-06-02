const voitures = [
    {
      nom: "Ferrari 458 Italia",
      image: "../assets/img/porsche70.jpeg",
      prix: 250000,
      caracteristiques: ["Vitesse maximale: 325 km/h", "Accélération: 0-100 km/h en 3,4 secondes"]
    },
    {
      nom: "Lamborghini Aventador",
      image: "aventador.jpg",
      prix: 350000,
      caracteristiques: ["Vitesse maximale: 350 km/h", "Accélération: 0-100 km/h en 2,9 secondes"]
    },
    // Ajoutez d'autres objets pour d'autres voitures
  ];
  
  // Sélectionnez l'élément HTML où vous souhaitez afficher les cartes des voitures
  const carteContainer = document.getElementById("carte");
  
  // Bouclez à travers le tableau de voitures et créez une carte pour chaque voiture
  voitures.forEach(voiture => {
    // Créez les éléments HTML nécessaires pour la carte
    const carte = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("src","")
    const nom = document.createElement("h2");
    nom.setAttribute("class","titre2 ")
    const prix = document.createElement("p");
    const caracteristiques = document.createElement("ul");
    const vitessemax = document.createElement("p");
    const performance = document.createElement("p")


    carte.classList.add("carte");
    image.classList.add("carte-image");
    nom.classList.add("carte-nom");
    prix.classList.add("carte-prix");
    caracteristiques.classList.add("carte-caracteristiques");
    vitessemax.classList.add("carte-vitessemax")
    performance.classList.add("carte-performance")
    // Définissez les valeurs et attributs des éléments HTML
    image.src = voiture.image;
    nom.textContent = voiture.nom;
    prix.textContent = "Prix: " + voiture.prix + " $";
  
    voiture.caracteristiques.forEach(caracteristique => {
      const li = document.createElement("li");
      li.textContent = caracteristique;
      caracteristiques.appendChild(li);
    });
  
    // Ajoutez les éléments à la carte
    carte.appendChild(image);
    carte.appendChild(nom);
    carte.appendChild(prix);
    carte.appendChild(caracteristiques);
  
    // Ajoutez la carte à l'élément conteneur
    carteContainer.appendChild(carte);
  });