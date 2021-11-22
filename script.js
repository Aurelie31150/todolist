/*Noé*/
/*Variables*/
/*Fonctions*/
/*Executions*/

/*Mel*/
/*Variables*/
/*Fonctions*/
/*Executions*/

/*Benoit*/
/*Variables*/
/*Fonctions*/
/*Executions*/

/*Aurélie*/
// Commutation tâche
const toggleTask = (complete, target) => {
    const parent = target.parentNode
    const sibling = parent.previousSibling
    const text = sibling.textContent
    // Mise à jour du dictionnaire
    tasks.set(text, complete)
    // Changement du bouton
    parent.innerHTML = complete ? buttonsComplete : buttonsNoComplete
    // Barrage du texte
    sibling.innerHTML = complete ? `<del>${text}</del>` : text
  }
/*Variables*/
/*Fonctions*/
/*Executions*/

/*Kevin*/
/*Variables*/

/*Fonctions*/
/*Executions*/
=======
const date = $("#datepicker").get(0);  //selecteur pour le date picker
const ajouterTache = $("#ajouterTache").get(0); //selecteur pour le bouton d'ajou de tâche
/*Fonctions*/

/*Date picker*/
$("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    dayNames: [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
    dayNamesShort: [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ],
    dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
})

//fonction pour rafraichir et activer le datepicker 
$( function() {   
    $( "#datepicker" ).datepicker();
  } );

/*Executions*/
$("#ajouterTache").click(function(){  //click sur bouton ajouter à la liste
    const nouvelleTache = new Task(12, "test", date.value, "haute");   //créer une nouvelle instance de l'objet Task 
    localStorage.setItem(nouvelleTache.nom, JSON.stringify(nouvelleTache)); //ajoute la tache à la mémoire local pour garder les informations utilise JSON.stringify pour socker lobjet en tant que string
})
const lireObjet = function(key){    //fonction pour récupérer la tache enregistré comme string sous forme d'objet
    var value = this.localStorage.getItem(key);
    return value && JSON.parse(value);
}

