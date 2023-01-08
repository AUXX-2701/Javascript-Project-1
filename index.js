const main = document.querySelector('center');
const joursDeLaSemaine = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI"];

function createH2(text){
    const heading2 = document.createElement('h1');
    heading2.setAttribute('style', 'color: red');
    heading2.textContent = text;
    return heading2;
}

function weekday(){
    let inputText = document.getElementById("searchBar").value.toUpperCase();
    for(let i = 0; i < (joursDeLaSemaine.length); i++) {
        if (inputText == joursDeLaSemaine[i]){
            // console.log(inputText);
            document.getElementById("searchBar").value ='';
            const edt = createH2('hello');
            main.appendChild(edt);
            return;
        }
    }
    document.getElementById("searchBar").value ='';
    alert("Veuillez entrer un jour de la semaine")
}