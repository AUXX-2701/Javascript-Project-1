const main = document.querySelector('center');
const joursDeLaSemaine = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI"];

let emploiDuTemps = '';

function createH2(text){
    const heading2 = document.createElement('h1');
    heading2.setAttribute('style', 'color: black');
    heading2.textContent = text;
    return heading2;
}

function weekday(){
    let inputText = document.getElementById("searchBar").value.toUpperCase();
    for(let i = 0; i < (joursDeLaSemaine.length); i++) {
        if (inputText == joursDeLaSemaine[i]){
            // console.log(inputText);
            document.getElementById("searchBar").value ='';
            emploiDuTemps = "hello";
            return true;
        }
    }
    document.getElementById("searchBar").value ='';
    alert("Veuillez entrer un jour de la semaine");
    return false;
}

if(weekday == true){
    const edt = createH2(emploiDuTemps);
    main.appendChild(edt);
}
