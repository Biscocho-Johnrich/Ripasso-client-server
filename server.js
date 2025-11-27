console.log("Buongiorno, il server si sta avviando....");

const express = require("express");
const app = express();
cost porta = 3000;


//configurazione del server
app.get("/",(richiesta,risposta)=>{
    risposta.send("Ciao bellu...., sei su https//localhost:" + porta);
})

//configurazione del server
app.get("/utenti",(richiesta,risposta)=>{
    risposta.send("Ciao bellu...., sei su https//localhost:/" + porta + "/utenti");
})

app.listen (porta,()=> console.log("Server avviato in ascolto su porta " + porta));
