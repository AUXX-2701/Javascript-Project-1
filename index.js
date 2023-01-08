// const main = document.querySelector('body');
function createH2(colour, text){
    const heading2 = "hello";
}

function weekday(){
    let inputText = document.getElementById("searchBar").value;
    const joursDeLaSemaine = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI"];
    for(let i = 0; i < (joursDeLaSemaine.length); i++) {
        if (inputText.toUpperCase() == joursDeLaSemaine[i]){
            console.log(inputText);
            document.getElementById("searchBar").value ='';
            return;
        }
    }
    document.getElementById("searchBar").value ='';
    alert("Veuillez entrer un jour de la semaine")
}