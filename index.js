var keyboardString = document.querySelectorAll('button');
var tizitaSounds = document.querySelectorAll('Option')[0].setAttribute('src', 'sounds/Tizita');
var batiSounds = document.querySelectorAll('Option')[1].setAttribute('src', 'sounds/Bati');


// function tizitaSound() {
//     var audio = new Audio('sounds/Tizita/Tizita' + [i] + '.mp3');
//     audio.play();
// }

function makeBati() {
    switch (key) {
        case "a":
            var audio = new Audio('sounds/Bati/Bati1.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/Bati/Bati2.mp3');
            audio.play();

            break;
        case "d":
            var audio = new Audio('sounds/Bati/Bati3.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/Bati/Bati4.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/Bati/Bati5.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/Bati/Bati6.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function makeTizita(key) {
    switch (key) {
        case "a":
            var audio = new Audio('sounds/Tizita/Tizita1.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/Tizita/Tizita2.mp3');
            audio.play();

            break;
        case "d":
            var audio = new Audio('sounds/Tizita/Tizita3.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/Tizita/Tizita4.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/Tizita/Tizita5.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/Tizita/Tizita6.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

for (var i = 0; i < keyboardString.length; i++) {
    document.querySelectorAll('.kirarNote')[i].addEventListener('click', function(){
        makeTizita();
    });

    //detecting keyboard press! 

document.addEventListener('keypress', function(e){
    makeTizita(e.key);
    // buttonAnimation(event.key);
});

}
