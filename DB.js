const dati = {
    lista_utenti: [],
    lista_serie: [],
    seguite: []
};

const lista_utenti = {
    insert (utente){
        dati.lista_utenti.push(utente);
        return;
    },
    cercaPerMail(mail){
        return dati.lista_utenti.find(x => x.mail == mail);
    },
    tutti(){
        return dati.lista_utenti;
    }
};

const lista_serie = {
    insert(serie){
        dati.lista_serie.push(serie);
        return;
    },
    cercaPerNome(nome){
        return dati.lista_serie.find(x => x.nome = nome);
    },
    tutti(){
        return dati.lista_serie;
    }
};

const seguite = {
    insert(seg){
        dati.seguite.push(seg);
        return;
    },
    ricercaUtente(persona){
        return dati.seguite.filter( x => x.utente.mail == persona.mail);
    }
}
/*
copiare schema seguite per guardate
*/

/*
2 UTENTI:
utente1 usr:Prova passw:prova mail:standard@gmail.com
utente2 usr:Beppe passw: canto mail: beppe@gmail.com

2 SERIE
Firefly nome: Firefly   genere :SCI_FI, Avventura    attori: Nathan Fillion     Stagioni : 1
Brek  nome : Breaking Bad   genere: Drammatico Thriller     attori: Bryan Cranston, Aaron Paul    Stagioni: 5

utente1 segue firefly
utente2 segue firefly e brek
*/

var utente1 = {
    "username": "Prova",
    "password": "prova",
    "mail" : "standard@mail.com"
}

var utente2 = {
    username: "Beppe",
    password: "canto",
    mail : "beppe@mail.com"
}

var Firefly = {
    nome: "Firefly",
    genere : ["SCI_FI", "Avventura"],
    attori : ["Nathan Fillion"],
    Stagioni : 1
}

var Brek = {
    nome : "Breaking Bad",
    genere: ["Drammatico", "Thriller"],
    attori: ["Bryan Cranston", "Aaron Paul"],
    Stagioni: 5
}

lista_utenti.insert(utente1);
lista_utenti.insert(utente2);
lista_serie.insert(Firefly);
lista_serie.insert(Brek);
seguite.insert(
    {
        utente: utente1,
        serie: Firefly
    });

seguite.insert(
    {
         utente: utente2,
        serie: Firefly
    });


seguite.insert(
    {
        utente: utente2,
        serie: Brek
    });



module.exports = {
    lista_serie,
    lista_utenti,
    guardate
}