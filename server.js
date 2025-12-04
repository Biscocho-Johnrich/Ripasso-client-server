console.log("Buongiorno, il server si sta avviando....");

const express = require("express");
const app = express();
const porta = 3000;


//oggetto javascript


const STEELSERIESDiablo = {
    EAN : "EAN0813810014507",
    Puntamento: "Ottico",
    Connessione: "USB",
    Serie: "Diablo",
    Risoluzione: "100 - 5.700 CPI/DPI"
}

console.log(STEELSERIESDiablo.Serie);

const votiStudenti = {
    Amantea: 7,
    Biscocho: 6,
    DeSantis: 10,
    Eltanaihy: 4.9,
    Fedorenko: 6,
    Natalino:4,
    Finini: 6,
    Zingariello: 4.000009
}

console.log(votiStudenti.Finini);





const studenti = {
     1: "Amantea",
     2: "Biscocho",
     3: "De Santis",
     4: "Eltanaihy"
}

const RTX4090 = {
    core: 16384,
    Boostclock: 777,
    memoria: 24,
    tipoMemoria:"GDDR6X"

}




//configurazione del server
app.get("/",(richiesta,risposta)=>{
    risposta.send("Ciao bellu...., sei su https//localhost:" + porta);
})

//configurazione del server
app.get("/utenti",(richiesta,risposta)=>{
    risposta.send("Ciao bellu...., sei su https//localhost:/" + porta + "/utenti");
})
app.get("/studenti",(richiesta,risposta)=>{
    risposta.send(studenti); 
})
// app.get("/studenti de Santis",(richiesta,risposta)=>{
//     risposta.send(DeSantis[richiesta,risposta]=>{

//     }; 
app.listen (porta,()=> console.log("Server avviato in ascolto su porta " + porta));
