// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("../data/maj_news.json");
const maj = await reponse.json();
console.log(maj);
const feat = document.querySelector('.features_cards');
console.log(feat);

maj.map(function(item, index) {
    let art = document.createElement('div');
    //alterne les class
    art.className = index % 2 === 0 ? 'card_maj' : 'card_maj pair';
    const markup = 
    `<div class="maj_img">
        <img src="${item.img}" alt="">
    </div>
    <div class="ctn_content_maj">
        <h3 class="title_maj">${item.title}</h3>
        <p class="content_maj">${item.content}</p>
    </div>`;

    art.innerHTML = markup;
    feat.appendChild(art);
})

// Sélectionnez tous les éléments avec la classe "item-question"
// const questionItems = document.querySelectorAll('.item-question');

// questionItems.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         const parent = e.currentTarget.parentElement;
//         parent.classList.toggle('show-answer')
//     })
// })