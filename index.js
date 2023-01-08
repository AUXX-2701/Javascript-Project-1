// const main = document.querySelector('body');

function weekday(){
    let inputText = document.getElementById("searchBar").value;
    const joursDeLaSemaine = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI"];
    for(let i = 0; i < (joursDeLaSemaine.length); i++) {
        if (inputText.toUpperCase() == joursDeLaSemaine[i]){
            console.log(inputText);
            break;
        }
    }
}