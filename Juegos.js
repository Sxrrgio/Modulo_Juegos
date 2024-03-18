var traducciones={
    "es":{
        "juego_sheldon": "Piedra, Papel, Tijeras, Lagarto, Spock: Vence al doctor Cooper en este divertido minijuego",
        "buscaminas":"Buscaminas: Sortea las bombas",
        "simonDice":"Simon dice:  Pon a prueba tu habilidad",
        "historia":"Storytelling: Sé el protagonista de tu propia historia"
    },
    "en":{
        "juego_sheldon": "Rock, Paper, Scissors, Lizard, Spock: Defeat Dr. Cooper in this fun minigame",
        "buscaminas":"Minesweeper: Avoid the bombs",
        "simonDice":"Simon says: Test your skill",
        "historia":"Storytelling: Be the protagonist of your own story"
    },
    "fr":{
        "juego_sheldon": "Pierre, papier, ciseaux, lézard, Spock: Battez le Dr Cooper dans ce mini-jeu amusant",
        "buscaminas":"Dragueur de mines: Évitez les bombes",
        "simonDice":"Simon dit: Testez vos compétences",
        "historia":"Raconter des histoires: Soyez le protagoniste de votre propre histoire"
    },
    "de":{
        "juego_sheldon": "Schere, Stein, Papier, Echse, Spock: Besiege Dr. Cooper in diesem lustigen Minispiel",
        "buscaminas":"Minensuchboot: Vermeiden Sie die Bomben",
        "simonDice":"Simon sagt: Testen Sie Ihr Können",
        "historia":"Geschichtenerzählen: Seien Sie der Protagonist Ihrer eigenen Geschichte"
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('selectorIdioma').addEventListener('change', function(){
        var idiomaSeleccionado=this.value;

        document.getElementById('juego_sheldon').innerHTML = traducciones[idiomaSeleccionado].juego_sheldon;
        document.getElementById('buscaminas').innerHTML = traducciones[idiomaSeleccionado].buscaminas;
        document.getElementById('simonDice').innerHTML = traducciones[idiomaSeleccionado].simonDice;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado].historia;

    })
})