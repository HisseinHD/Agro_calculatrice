
// On attend que l'utilisateur envoie le formulaire
document
  .getElementById("calculatorForm")
  .addEventListener("submit", function (event) {
    // Empêche le rechargement de la page
    event.preventDefault();

    // Récupération des valeurs saisies
    let couts = parseFloat(document.getElementById("couts").value);
    let prixVente = parseFloat(document.getElementById("prixVente").value);

    // Vérification basique (sécurité)
    if (isNaN(couts) || isNaN(prixVente)) {
      document.getElementById("message").textContent =
        "Veuillez entrer des valeurs valides.";
      return;
    }

    // Appel de la fonction de calcul
    let marge = calculerMarge(prixVente, couts);

    // Affichage du résultat avec condition
    afficherResultat(marge);
  });


function calculerMarge(prix, couts) {
  return prix - couts;
}


function afficherResultat(marge) {
  let message = "";

  if (marge > 0) {
    message = `Votre marge est positive : +${marge} (Rentable)`;
  } else if (marge === 0) {
    message = " Votre marge est nulle : Vous êtes à l'équilibre.";
  } else {
    message = ` Votre marge est négative : ${marge} (Perte)`;
  }

  // On injecte le message dans le HTML
  document.getElementById("message").textContent = message;
}
