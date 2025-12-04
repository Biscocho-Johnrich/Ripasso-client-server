console.log("Buongiorno, il server si sta avviando....");

const express = require("express");
const app = express();
const porta = 3000;







//oggetto javascript


const STEELSERIES  Diablo = {
    EAN : "EAN0813810014507",
    Puntamento: "Ottico",
    Connessione: "USB",
    Serie: "Diablo",
    Risoluzione: "100 - 5.700 CPI/DPI"
}


console.log(STEELSERIES Diablo.Serie);







const studenti = {
     1: "Amantea",
     2: "Biscocho",
     3: "De Santis",
     4: "Eltanaihj"
}

const RTX4090 = {
    core: 16384
    Boostclock: 
    memoria: 24,
    tipoMemoria:GDDR6X


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
app.get("/studenti de Santis",(richiesta,risposta)=>{
    risposta.send(De Santis[richiesta,risposta]=>{

    }; 
app.listen (porta,()=> console.log("Server avviato in ascolto su porta " + porta));
