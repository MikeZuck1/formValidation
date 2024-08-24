// TARGET ALL CLASSES AND ID
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementById(classes);

// STOCK ALL CLASSES AND ID IN THE VARIABLES !!!!! ENLEVER LES PARENTHESES À LA FIN.
let username = id("username");
(email = id("email")),
  (password = id("password")),
  (form = id("form")),
  (erroMsg = classes("error")),
  (sucessIcon = classes("success-icon")),
  (failureIcon = classes("failure-icon"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// fonction nommée engine qui effectuera toutes sortes de tâches de validation de formulaire pour nous
// id ciblera notre identifiant
// serial ciblera nos classes [classe d'erreur, icônes de réussite et d'échec]
// message imprimera un message dans notre classe .error
let engine = (id, serial, message) => {};
