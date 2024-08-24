// TARGET ALL CLASSES AND ID
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementById(classes);

// STOCK ALL CLASSES AND ID IN THE VARIABLES !!!!! ENLEVER LES PARENTHESES À LA FIN.
let username = id("username");
email = id("email"),
  password = id("password"),
  form = id("form"),
  erroMsg = classes("error"),
  sucessIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ici, nous transmettons les noms d'identifiant,
  // les numéros de série de nos noms de classe
  // et transmettons le message qui doit être imprimé
  // lorsque nous trouvons une erreur lorsque l'utilisateur soumet le formulaire.
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

// fonction nommée engine qui effectuera toutes sortes de tâches de validation de formulaire pour nous
// id ciblera notre identifiant
// serial ciblera nos classes [classe d'erreur, icônes de réussite et d'échec]
// message imprimera un message dans notre classe .error
let engine = (id, serial, message) => {
  // trim() supprime les espaces blancs supplémentaire saisie par l'utilisateur.
  if (id.value.trim() === "") {
    erroMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    sucessIcon[serial].style.opacity = "0";
  } else {
    erroMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    sucessIcon[serial].style.opacity = "1";
  }
};

// Nous voulons que JavaScript imprime un message dans la classe d'erreur chaque fois que l'utilisateur soumet un formulaire vierge.
// En même temps, nous voulons que les icônes d'échec soient également mises en évidence.
// Mais si l'utilisateur remplit toutes les entrées et les soumet, nous voulons que l' icône de réussite soit visible.
