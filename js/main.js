// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("../data/maj_news.json");
const maj = await reponse.json();
console.log(maj);
const feat = document.querySelector(".features_cards");
console.log(feat);

maj.map(function (item, index) {
  let art = document.createElement("div");
  //alterne les class
  art.className = index % 2 === 0 ? "card_maj" : "card_maj pair";
  const markup = `<div class="maj_img">
        <img src="${item.img}" alt="">
    </div>
    <div class="ctn_content_maj">
        <h3 class="title_maj">${item.title}</h3>
        <p class="content_maj">${item.content}</p>
    </div>`;

  art.innerHTML = markup;
  feat.appendChild(art);
});

// Sélectionnez tous les éléments avec la classe "item-question"
// const questionItems = document.querySelectorAll('.item-question');

// questionItems.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         const parent = e.currentTarget.parentElement;
//         parent.classList.toggle('show-answer')
//     })
// })

// video slider
function videoUrl(url) {
  document.getElementById("slider").src = url;
}

const links = document.querySelectorAll(".link_slider");

//changement de la vidéo auto
const videos = [
    "assets/FH5_extrait1.mp4",
    "assets/FH5_extrait2.mp4",
    "assets/FH5_extrait3.mp4",
  ];
  
  let currentIndex = 0;
  
  const slider = document.getElementById('slider');
  crossfadeVideos(slider);
  
  function playNextVideo(){
      currentIndex = (currentIndex + 1) % videos.length
      const nextVideoUrl = videos[currentIndex]

      // Effectuer la transition en fondu enchaîné entre les vidéos
    crossfadeVideos(slider);
    videoUrl(nextVideoUrl)
  
      // Réinitialise l'icône de tous les éléments de lien
    for (let j = 0; j < links.length; j++) {
      const icon = links[j].querySelector('iconify-icon');
      const defaultIcon = links[j].getAttribute('data-icon-default');
      icon.setAttribute('icon', defaultIcon);
    }
  
    // Met à jour l'icône de l'élément de lien correspondant à la vidéo en cours
    const currentLink = links[currentIndex];
    const activeIcon = currentLink.getAttribute('icon-active');
    const icon = currentLink.querySelector('iconify-icon');
    icon.setAttribute('icon', activeIcon);
  }
  slider.addEventListener('ended', playNextVideo);

//je parcours les liens et ajoute un event au clic
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  const icon = link.querySelector("iconify-icon");
  const defaultIcon = icon.getAttribute("icon");

  link.addEventListener("click", function (event) {
    event.preventDefault();
    const url = this.dataset.videoUrl;
    currentIndex = videos.indexOf(url)
    videoUrl(url);

    // Réinitialise l'icône de tous les éléments de lien
    for (let j = 0; j < links.length; j++) {
      const icon = links[j].querySelector("iconify-icon");
      const defaultIcon = links[j].getAttribute("data-icon-default");
      icon.setAttribute("icon", defaultIcon);
    }

    //modif le lien actif
    const activeIcon = this.getAttribute("icon-active");
    const icon = this.querySelector("iconify-icon");
    icon.setAttribute("icon", activeIcon);
  });
  
}

// animation slider 
// Fonction pour effectuer la transition en fondu enchaîné entre deux vidéos
function crossfadeVideos(fromVideo) {
    const duration = 4; // Durée de l'animation (en secondes)

    gsap.from(fromVideo, { opacity: 0, duration, y: 300, ease: "elastic.out" });
  }

  //scroll animation section_hero
// section_bestcarsaison
// section_maj
// section_rate
// section_populaire
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '.section_hero',
    start: "top top",
    end: '+=700px',
    pin: true
}
)


ScrollTrigger.create({
    trigger: '.section_populaire',
    start: "top top",
    end: '+=400px',
    pin: true
}
)

