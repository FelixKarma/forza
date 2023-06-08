const voitures = [
	{
		nom: "Porsche Motorsport 935",
		image: "../assets/img/porsche70.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 325 km/h",
			"Accélération: 0-100 km/h en 3,4 secondes",
		],
	},
	{
		nom: "Lamborghini huracan sto",
		image: "../assets/projet_formation/Lamborghini_Huracan_STO.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 350 km/h",
			"Accélération: 0-100 km/h en 2,9 secondes",
		],
	},
	{
		nom: "Audi RS6",
		image: "../assets/projet_formation/Audi_RS6.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 350 km/h",
			"Accélération: 0-100 km/h en 2,9 secondes",
		],
	},
	{
		nom: "Audi quattro",
		image: "../assets/projet_formation/Audi_Quattro.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 350 km/h",
			"Accélération: 0-100 km/h en 2,9 secondes",
		],
	},
	{
		nom: "Toyota MR2 GT",
		image: "../assets/projet_formation/Toyota_MR2_GT.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 350 km/h",
			"Accélération: 0-100 km/h en 2,9 secondes",
		],
	},
	{
		nom: "Toyota sports 800",
		image: "../assets/projet_formation/Toyota_sports_800.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 350 km/h",
			"Accélération: 0-100 km/h en 2,9 secondes",
		],
	},
	{
		nom: "Nissan GT-R Nismo",
		image: "../assets/projet_formation/nissan_GT-R_Nismo.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 350 km/h",
			"Accélération: 0-100 km/h en 2,9 secondes",
		],
	},
	{
		nom: "Lexus LC 500",
		image: "../assets/projet_formation/Lexus_LC_500.jpeg",
		prix: 250000,
		caracteristiques: [
			"Vitesse maximale: 350 km/h",
			"Accélération: 0-100 km/h en 2,9 secondes",
		],
	},
	// Ajoutez d'autres objets pour d'autres voitures
];

// Sélectionnez l'élément HTML où vous souhaitez afficher les cartes des voitures
const carteContainer = document.getElementById("carte");

// Bouclez à travers le tableau de voitures et créez une carte pour chaque voiture
voitures.forEach((voiture) => {
	// Créez les éléments HTML nécessaires pour la carte
	const carte = document.createElement("div");
	const prix = document.createElement("p");
	const caracteristiques = document.createElement("ul");
	const vitessemax = document.createElement("p");
	const performance = document.createElement("p");
	const image = document.createElement("img");
	image.setAttribute("src", "");
	const nom = document.createElement("h2");
	nom.setAttribute("class", "titre2 ");

	carte.classList.add("carte");
	prix.classList.add("carte-prix");
	caracteristiques.classList.add("carte-caracteristiques");
	vitessemax.classList.add("carte-vitessemax");
	performance.classList.add("carte-performance");
	image.classList.add("carte-image");
	nom.classList.add("carte-nom");
	// Définissez les valeurs et attributs des éléments HTML
	image.src = voiture.image;
	nom.textContent = voiture.nom;
	prix.textContent = "Prix: " + voiture.prix + " Cr";

	voiture.caracteristiques.forEach((caracteristique) => {
		const li = document.createElement("li");
		li.textContent = caracteristique;
		caracteristiques.appendChild(li);
	});

	// Ajoutez les éléments à la carte
	carte.appendChild(prix);
	carte.appendChild(caracteristiques);
	carte.appendChild(image);
	carte.appendChild(nom);

	// Ajoutez la carte à l'élément conteneur
	carteContainer.appendChild(carte);
});
