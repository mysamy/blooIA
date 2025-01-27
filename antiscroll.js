window.addEventListener("load", () => {
  const savedPosition = localStorage.getItem("scrollPosition");
  if (savedPosition) {
    // Vérifier si la page a été complètement rendue
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (documentHeight > viewportHeight) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }
});