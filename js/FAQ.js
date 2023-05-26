// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("../data/faq.json");
const faqs = await reponse.json();

const faqsContainer = document.getElementById('faqs_container');

faqs.map(function(item) {
    let article = document.createElement('article');
    article.className = 'faq-item';

    const markup = `
    <div class="item-question">
        <button class="question">
        <span>${item.question} </span>
        <img class="img_arrow" src="../assets/img/arrow-drop-down.svg" alt="arrow down">
        </button>
    </div>
    <div class="item-answer">
        <span class="answer-text">${item.answer}</span>
    </div>
    `;
    article.innerHTML = markup;
    faqsContainer.appendChild(article)
})

// Sélectionnez tous les éléments avec la classe "item-question"
const questionItems = document.querySelectorAll('.item-question');

questionItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const parent = e.currentTarget.parentElement;
        parent.classList.toggle('show-answer')
    })
})
