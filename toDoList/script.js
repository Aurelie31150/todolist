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
/*Variables*/
/*Fonctions*/
/*Executions*/

/*Kevin*/
/*Variables*/
const date = $("#datepicker").get(0);  //selecteur pour le date picker
const ajouterTache = $("#ajouterTache").get(0); //selecteur pour le bouton d'ajou de tâche
/*Fonctions*/
$( function() {   //fonction pour rafraichir et activer le datepicker 
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
