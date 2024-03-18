let capituloActual = 1;
let idioma = 'es';
const historia = {
    1: {
        es: {
            mensaje: 'Había un pueblo que estaba rodeado por montañas. Era conocido por su tranquilidad y hospitalidad, hasta que llegaron unos extraños forasteros, los cuales se iban a ir al día siguiente. Intrigado, te debates entre seguirles o quedarte en casa.',
            opciones: {
                SeguirALosForasteros: 2,
                QuedarteEnElPueblo: 3,
            }
        },
        en: {
            mensaje: 'There was a town that was surrounded by mountains. It was known for its tranquility and hospitality, until some strange strangers arrived, who were going to leave the next day. Intrigued, you debate whether to follow them or stay home.',
            opciones: {
                FollowTheOutsiders: 2,
                StayInTheTown: 3,
            }
        },
        fr: {
            mensaje : ' Il y avait une ville entourée de montagnes. Elle était connue pour sa tranquillité et son hospitalité, jusquà larrivée détranges étrangers qui allaient repartir le lendemain. Intrigué, vous vous demandez sil faut les suivre ou rester chez soi.',
            opciones : {
                SuivezLesÉtrangers : 2,
                ResterEnVille : 3,
            }
        },
        de: {
            mensaje: 'Es gab eine Stadt, die von Bergen umgeben war.“ Es war für seine Ruhe und Gastfreundschaft bekannt, bis einige seltsame Fremde eintrafen, die am nächsten Tag abreisen wollten. Neugierig überlegen Sie, ob Sie ihnen folgen oder zu Hause bleiben sollen.',
            opciones: {
                FolgenSieDenAußenseitern: 2,
                BleibInDerStadt: 3,
            }
        },
        
    },
    2: {
        es:{
            mensaje:' Decides seguir a los forasteros. Ves que se adentran en una especie de guarida en lo más profundo del bosque. La guarida así a bote pronto da muy mal rollo, así que caes presa del pánico pero con unas ganas tremendas de descubrir qué hay dentro.',
            opciones: {
		        TeMetesEnLaGuarida: 4,
		        VuelvesAsustadoAlPueblo: 5,       
            },
        },
        en: {
            mensaje: 'You decide to follow the outsiders. You see that they go into a kind of lair deep in the forest. The lair like this quickly becomes very bad, so you fall prey to panic but with a tremendous desire to discover whats inside.',
            opciones: {
                YouGoIntoTheDen: 4,
                YouReturnScaredToTheTown: 5,
            },
        },
        fr: {
            mensaje : 'Vous décidez de suivre les étrangers. Vous voyez quils entrent dans une sorte de repaire au fond de la forêt. Un repaire comme celui-ci devient vite très mauvais, alors vous êtes en proie à la panique mais avec un immense désir de découvrir ce quil y a à lintérieur.',
            opciones : {
                TuVasDansLaTanière: 4,
                VousRevenezEffrayéEnVille : 5,
            },
        },
        de: {
            mensaje: 'Sie beschließen, den Außenseitern zu folgen.“ Sie sehen, dass sie tief im Wald in eine Art Versteck gehen. Ein solches Versteck wird schnell sehr schlecht, so dass man in Panik gerät, aber auch ein enormes Verlangen verspürt, herauszufinden, was sich darin befindet.',
            opciones: {
                AngstimVersteck: 4,
                DukehrstverängstigtindieStadtzurück: 5,
            },
        },
    },
    3: {
        es:{
            mensaje: 'Decides quedarte en casa y te echas una siesta. De repente, un estruendo te despierta de un salto. Abres la puerta de tu casa  y ves a los extraños forasteros atacando al pueblo y a todos los lugareños. Sabes que si no haces algo pronto morirás. ¿Qué haces?',
            opciones:{
                TeArmasDeValorYSalesADefenderATuPueblo: 6,
                TeEscondesDebajoDeTuCama: 7,
            },
        },
        en: {
            mensaje: 'You decide to stay home and take a nap. Suddenly, a roar jolts you awake. You open the door of your house and see the strange strangers attacking the town and all the locals. You know that if you dont do something you will soon die. What are you doing?',
            opciones:{
                YouArmYourselfWithCourageAndGoOutToDefendYourPeople: 6,
                YouHideUnderYourBed: 7.
            },
        },
        fr: {
           "mensaje" : 'Vous décidez de rester à la maison et de faire une sieste. Soudain, un rugissement vous réveille en sursaut. Vous ouvrez la porte de votre maison et voyez détranges étrangers attaquer la ville et tous les habitants. Vous savez que si vous ne faites rien, vous mourrez bientôt. Que fais tu?',
            "opciones" :{
                VousVousArmezDeCourageEtSortezPourDéfendreVotrePeuple : 6,
                TeEssousVotreLit : 7.
            },
        },
        de: {
            mensaje: 'Sie beschließen, zu Hause zu bleiben und ein Nickerchen zu machen.“ Plötzlich reißt dich ein Brüllen aus dem Schlaf. Sie öffnen die Tür Ihres Hauses und sehen, wie die seltsamen Fremden die Stadt und alle Einheimischen angreifen. Du weißt, dass du bald sterben wirst, wenn du nichts tust. Was machst du?',
            opciones:{
                SierüstensichmitMutundgehenlosumIhrVolkzuverteidigen: 6,
                TeesunterIhremBett: 7.
            },
        },
    },
    4: {
        es: {
            mensaje: 'Te adentras en la guarida con miedo. Ves todo tipo de armas, mapas marcados con futuros ataques de los forasteros y dinero. Te fijas en el mapa y ves tu pueblo rodeado de un círculo rojo. De repente, escuchas a dos personas acercarse.',
            opciones:{
                LesCortasElPasoYTeEnfrentasAEllos: 8,
                TeEscondesEnOtraSala: 9,
            },
        
        },
        en: {
            mensaje: 'You enter the den with fear. You see all kinds of weapons, maps marked with future attacks from the outsiders, and money. You look at the map and see your town surrounded by a red circle. Suddenly, you hear two people approaching.',
            opciones:{
                TheyCutThemOffAndConfrontThem: 8,
                YouHideInTheBackroom: 9,
            },
        },
        fr: {
           mensaje : 'Vous entrez dans la tanière avec peur. Vous voyez toutes sortes d’armes, des cartes marquées d’attaques futures de la part d’étrangers et de l’argent. Vous regardez la carte et voyez votre ville entourée dun cercle rouge. Soudain, vous entendez deux personnes approcher.',
            opciones :{
                IlsLesCoupentEtLesConfrontent : 8,
                TuTeCachesDansLaRièreBoutique : 9,
            },
        },
       de: {
           mensaje: 'Du betrittst die Höhle voller Angst.“ Sie sehen alle Arten von Waffen, Karten, die mit zukünftigen Angriffen von Außenstehenden markiert sind, und Geld. Sie schauen auf die Karte und sehen Ihre Stadt von einem roten Kreis umgeben. Plötzlich hört man, wie sich zwei Menschen nähern.',
            opciones:{
                SieunterbrechensieundstellensiezurRede: 8,
                AbschlägeimHinterzimmer: 9,
            },

        },
    },
    5: {
        es: {
            mensaje:'Volviendo a casa por el bosque, te encuentras con un anciano. Sorprendentemente, sabe todo sobre los forasteros y te advierte  que atacarán el pueblo en dos días. Antes de volver al pueblo para prepararlo para el ataque, el anciano te detiene y te entrega  una semilla, la cual otorga un poder enorme al que la consume.',
            opciones:{
                IgnorasAlAncianoYVuelvesAlPueblo: 10,
                TomasLaSemilla: 11,
            },
        },
        en: {
            mensaje: 'Coming home through the forest, you meet an old man. Surprisingly, he knows everything about the outsiders and warns you that they will attack the town in two days. Before returning to the town to prepare it for the attack, the old man stops you and gives you a seed, which grants enormous power to the one who consumes it.',
            opciones:{
                IgnoreTheOldManAndReturnToTheTown: 10,
                TakeTheSeed: 11,
            },
        },
        fr: {
            mensaje : 'En rentrant chez vous à travers la forêt, vous rencontrez un vieil homme. Étonnamment, il sait tout sur les étrangers et vous prévient quils attaqueront la ville dans deux jours. Avant de retourner au village pour le préparer à lattaque, le vieil homme vous arrête et vous donne une graine, qui confère un pouvoir énorme à celui qui la consomme.',
            opciones :{
                IgnorezLeVieilHommeEtRetournezEnVille : 10,
                PrenezLaGraine : 11,
            },
        },
        de: {
            mensaje: 'Wenn du durch den Wald nach Hause kommst, triffst du einen alten Mann.“ Überraschenderweise weiß er alles über die Außenseiter und warnt Sie, dass sie die Stadt in zwei Tagen angreifen werden. Bevor du in die Stadt zurückkehrst, um sie auf den Angriff vorzubereiten, hält dich der alte Mann auf und gibt dir einen Samen, der demjenigen, der ihn verzehrt, enorme Macht verleiht.',
            opciones:{
                IgnorieredenaltenMannundkehreindieStadtzurück: 10,
                NimmdenSamen: 11,
            },

        },
    },
    6: {
        es: {
            mensaje:'Con un palo y una sartén como escudo, sales a combatir. Consigues derrotar a un par de ellos, pero el más fuerte de ellos te golpea y te deja tirado en el suelo. Has caído, pero como un héroe',
            opciones: {
                fin: 1
            },
        },
        en: {
            mensaje:'With a stick and a frying pan as a shield, you go out to fight. You manage to defeat a couple of them, but the strongest of them hits you and leaves you lying on the ground. You have fallen, but like a hero',
            opciones: {
                end: 1
            },
        },
        fr: {
            mensaje : 'Avec un bâton et une poêle à frire comme bouclier, vous partez au combat. Vous parvenez à en vaincre quelques-uns, mais le plus fort dentre eux vous frappe et vous laisse allongé au sol. Tu es tombé, mais comme un héros',
            opciones : {
                fin : 1
            },
        },
        de: {
            mensaje: 'Mit einem Stock und einer Bratpfanne als Schutzschild gehst du in den Kampf.“ Du schaffst es, ein paar von ihnen zu besiegen, aber der stärkste von ihnen trifft dich und lässt dich am Boden liegen. Du bist gefallen, aber wie ein Held',
            opciones: {
                Ende: 1
            },

        },
    },
    7: {
        es: {
            mensaje: 'Estás escondido debajo de tu cama, mientras escuchas a los forasteros atacando tu pueblo. De repente, uno de los forasteros entra y te descubre. En vez de matarte, decide capturarte como prisionero. Pasas el resto de tus días en una celda.',
            opciones: {
                fin: 1
            },
        },
        en: {
            mensaje: 'You are hiding under your bed, while you hear the strangers attacking your town. Suddenly, one of the strangers walks in and discovers you. Instead of killing you, he decides to capture you as a prisoner. You spend the rest of your days in a cell.',
            opciones: {
                end: 1
            },
        },
        fr: {
            mensaje : 'Vous vous cachez sous votre lit, tandis que vous entendez les étrangers attaquer votre ville. Soudain, un inconnu entre et vous découvre. Au lieu de vous tuer, il décide de vous faire prisonnier. Vous passez le reste de vos jours dans une cellule.',
            opciones : {
                fin : 1
            },
        },
        de: {
            mensaje: 'Du versteckst dich unter deinem Bett, während du hörst, wie die Fremden deine Stadt angreifen.“ Plötzlich kommt einer der Fremden herein und entdeckt Sie. Anstatt dich zu töten, beschließt er, dich gefangen zu nehmen. Den Rest deiner Tage verbringst du in einer Zelle.',
            opciones: {
                Ende: 1
            },
        },
    },
    8: {
        es: {
            mensaje: 'Te encuentras ante los líderes de los forasteros. Armado, les amenazas con destruir su guarida y robarles su dinero si siguen adelante con el plan. Asustados, los forasteros comunican su rendición y abandonan la guarida. Llegas al pueblo  con arsenal y dinero, convirtiendo al pueblo en la potencia de la región.',
            opciones:{
                fin: 1
            },
        },
        en: {
            mensaje: 'You stand before the leaders of the outsiders. Armed, you threaten to destroy their hideout and steal their money if they go ahead with the plan. Frightened, the strangers announce their surrender and leave the lair. You arrive at the town with arsenal and money, turning the town into the power of the region.',
            opciones: {
                end: 1
            },
        },
        fr: {
           mensaje : 'Vous vous tenez devant les dirigeants des étrangers. Armé, vous menacez de détruire leur cachette et de voler leur argent sils mettent leur plan à exécution. Effrayés, les étrangers annoncent leur reddition et quittent le repaire. Vous arrivez en ville avec un arsenal et de largent, faisant de la ville le pouvoir de la région.',
            opciones : {
                fin : 1
            },
        },
        de: {
            mensaje: 'Du stehst vor den Anführern der Außenseiter.“ Bewaffnet drohen Sie, ihr Versteck zu zerstören und ihr Geld zu stehlen, wenn sie den Plan in die Tat umsetzen. Erschrocken verkünden die Fremden ihre Kapitulation und verlassen das Versteck. Du kommst mit Arsenal und Geld in die Stadt und machst sie zur Macht der Region.',
            opciones: {
                Ende: 1
            },
        },
    },
    9: {
        es: {
            mensaje: 'Te escondes en una sala cercana en la que hay un mapa, no sólo con objetivos en tu región, sino en el mundo entero. Asustado, sales corriendo y te preparas para vivir en otro pueblo',
            opciones: {
                fin: 1
            },
        },
        en: {
            mensaje: 'You hide in a nearby room where there is a map, not only with objectives in your region, but in the entire world. Scared, you run away and prepare to live in another town.',
            opciones: {
                end: 1
            },
        },
        fr: {
            mensaje : 'Vous vous cachez dans une pièce voisine où se trouve une carte, non seulement avec des objectifs dans votre région, mais dans le monde entier. Effrayé, vous vous enfuyez et vous vous préparez à vivre dans une autre ville',
            opciones : {
                fin : 1
            },
        },
        de: {
            mensaje: 'Du versteckst dich in einem nahegelegenen Raum, wo es eine Karte gibt, nicht nur mit Zielen in deiner Region, sondern auf der ganzen Welt.“ Aus Angst rennst du weg und bereitest dich darauf vor, in einer anderen Stadt zu leben.',
            opciones: {
                Ende: 1
            },

        },
    },
    10: {
        es: {  
            mensaje:' Dejando al anciano atrás, te diriges al pueblo, olvidándote de todo y preparado para vivir en paz el resto de tus días',
            opciones: {
                fin: 1
            },
        },
        en: {
            mensaje: 'Leaving the old man behind, you head to the town, forgetting everything and prepared to live in peace the rest of your days',
            opciones: {
                end: 1
            },
        },
        fr: {
            mensaje : "Laissant le vieil homme derrière vous, vous vous dirigez vers la ville, oubliant tout et prêt à vivre en paix le reste de vos jours",
            opciones : {
                fin : 1
            },
        },
        de: {
            mensaje: 'Du lässt den alten Mann zurück, gehst in die Stadt, vergisst alles und bist bereit, den Rest deiner Tage in Frieden zu leben.',
            opciones: {
                Ende: 1
            },
        }
    },
    11: {
        es: {
            mensaje: 'Al tomar la semilla, notas un poder enorme recorriendo todo tu cuerpo. Aprovechas la situación y te diriges a la guarida de los forasteros. Antes de darte cuenta, ya te has plantado allí. La semilla te ha dado supervelocidad. Con el resto de habilidades destruyes la guarida y vuelves a tu pueblo. Al verte totalmente diferente, te coronan como líder y protector.',
            opciones: {
                fin: 1
            },
        },
        en: {
            mensaje: 'When you take the seed, you notice enormous power running through your entire body. You take advantage of the situation and head to the strangers lair. Before you know it, youre already there. The seed has given you super speed. With the rest of the skills you destroy the lair and return to your town. Seeing you totally different, they crown you as leader and protector.',
            opciones: {
                end: 1
            },
        },
        fr: {
            mensaje : 'Lorsque vous prenez la graine, vous remarquez quune énorme puissance traverse tout votre corps. Vous profitez de la situation et vous dirigez vers le repaire des inconnus. Avant de vous en rendre compte, vous y êtes déjà. La graine vous a donné une super vitesse. Avec le reste des compétences, vous détruisez le repaire et retournez dans votre ville. En te voyant totalement différent, ils te couronnent comme leader et protecteur.',
            opciones : {
                fin : 1
            },
        },
        de: {
            mensaje: 'Wenn Sie den Samen einnehmen, spüren Sie, wie eine enorme Kraft durch Ihren gesamten Körper fließt.“ Sie nutzen die Situation aus und begeben sich zum Versteck der Fremden. Bevor Sie es wissen, sind Sie bereits da. Der Samen hat dir Supergeschwindigkeit verliehen. Mit den restlichen Fertigkeiten zerstörst du das Versteck und kehrst in deine Stadt zurück. Da sie dich ganz anders sehen, krönen sie dich zum Anführer und Beschützer.',
            opciones: {
                Ende: 1
            },
        },
    },
    
};

function ElegirCamino(opcion) {
    const capituloActualData = historia[capituloActual][idioma];
    if (capituloActualData && capituloActualData.opciones[opcion]) {
        capituloActual = capituloActualData.opciones[opcion];
        actualizarHistoria();
    } else {
        console.error('Opción no válida');
    }
}

function actualizarHistoria() {
    const chapterData = historia[capituloActual][idioma];
    document.getElementById('chapter').innerText = `Capítulo ${capituloActual}`;
    document.getElementById('mensaje').innerText = chapterData.mensaje;

    const botonesDiv = document.getElementById('botones');
    botonesDiv.innerHTML = '';

    for (const opcion in chapterData.opciones) {
        const boton = document.createElement('button');
        boton.innerText = opcion.replace(/([A-Z])/g, ' $1').trim(); 
        boton.onclick = () => ElegirCamino(opcion);
        botonesDiv.appendChild(boton);
    }
}
actualizarHistoria();

function cambiarIdioma() {
    const nuevoIdioma = document.getElementById('selectorIdioma').value;
    idioma = nuevoIdioma;
    console.log(idioma);
    actualizarHistoria();
}
document.getElementById('selectorIdioma').onchange = cambiarIdioma;
