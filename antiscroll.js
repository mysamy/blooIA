// Sauvegarder la position de défilement avant que la page ne soit fermée ou actualisée
window.onbeforeunload = function () {
  sessionStorage.setItem('scrollPosition', window.scrollY);
};

// Restaurer la position de défilement lors du chargement de la page
window.onload = function () {
  const scrollPosition = sessionStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
  }
};