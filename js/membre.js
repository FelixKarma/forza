document.getElementById('supprimer').addEventListener('click', function () {
    const maincont = document.querySelector('.page')
    const gifContainer = document.getElementById('gif-container');
    maincont.style.backgroundColor = 'white';
    gifContainer.innerHTML = '<img src="https://media.giphy.com/media/10UHehEC098kAE/giphy.gif" alt="GIF">';
    gifContainer.style.display = 'flex';
  });