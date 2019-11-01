/* 
To get selected option & then update the selected option.
Once select one of the option, you may play the related tune/Sound.
*/
function getSelectedValue(){
    var selectedValue = document.getElementById('tuneList').value;
     
    if(selectedValue == "Tizita"){ 
        allTizita(); 
    } else if (selectedValue == "Bati") {
        allBati();
    } else{
        console.log("please choose again from the option listed");
    }
    
}

var kirarNoteLength = document.querySelectorAll('.kirarNote').length;

/* 

1. Here i will start with Tizita Tune. 

       A. Detecting button press. 
       B. Detecting keyboard Press. 

*/

function allTizita (){
    // A: Detecting button press.

for (var i = 0; i < kirarNoteLength; i++) {

    document.querySelectorAll('.kirarNote')[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case 'a':
                var tizita1 = new Audio('sounds/Tizita1.mp3');
                tizita1.play();

                break;
            case 's':
                var tizita2 = new Audio('sounds/Tizita2.mp3');
                tizita2.play();

                break;
            case 'd':
                var tizita3 = new Audio('sounds/Tizita3.mp3');
                tizita3.play();

                break;
            case 'j':
                var tizita4 = new Audio('sounds/Tizita4.mp3');
                tizita4.play();

                break;
            case 'k':
                var tizita5 = new Audio('sounds/Tizita5.mp3');
                tizita5.play();

                break;
            case 'l':
                var tizita6 = new Audio('sounds/Tizita6.mp3');
                tizita6.play();

                break;

            default:console.log(buttonInnerHTML)
        }

    });
}

    // B: Detecting keyboard press.

document.addEventListener('keypress', function (event) {
    tizitaPlayer(event.key);
});

function tizitaPlayer(key) {
    switch (key) {
        case 'a':
            var audio = new Audio('sounds/Tizita1.mp3');
            audio.play();

            break;
        case 's':
            var audio = new Audio('sounds/Tizita2.mp3');
            audio.play();

            break;
        case 'd':
            var audio = new Audio('sounds/Tizita3.mp3');
            audio.play();

            break;
        case 'j':
            var audio = new Audio('sounds/Tizita4.mp3');
            audio.play();

            break;
        case 'k':
            var audio = new Audio('sounds/Tizita5.mp3');
            audio.play();

            break;
        case 'l':
            var audio = new Audio('sounds/Tizita6.mp3');
            audio.play();

            break;

        default:
            break;
    }
}
}

/* 

2. Next, Bati Tune. 

       A. Detecting button press. 
       B. Detecting keyboard Press. 

*/

function allBati () {
    for (var i = 0; i < kirarNoteLength; i++) {

        // A: Detecting button press.
    
        document.querySelectorAll('.kirarNote')[i].addEventListener('click', function () {
            var buttonInnerHTML = this.innerHTML;
    
            switch (buttonInnerHTML) {
                case 'a':
                    var bati1 = new Audio('sounds/Bati1.mp3');
                    bati1.play();
    
                    break;
                case 's':
                        var bati2 = new Audio('sounds/Bati2.mp3');
                        bati2.play();
    
                    break;
                case 'd':
                        var bati3 = new Audio('sounds/Bati3.mp3');
                        bati3.play();
    
                    break;
                case 'j':
                        var bati4 = new Audio('sounds/Bati4.mp3');
                        bati4.play();
    
                    break;
                case 'k':
                        var bati5 = new Audio('sounds/Bati5.mp3');
                        bati5.play();
    
                    break;
                case 'l':
                        var bati6 = new Audio('sounds/Bati6.mp3');
                        bati6.play();
    
                    break;
    
                default:console.log(buttonInnerHTML)
            }
    
        });
    }
    
    
    // B: Detecting keyboard press.
    
    document.addEventListener('keypress', function (event) {
        batiPlayer(event.key);
    });
    
    function batiPlayer(key) {
        switch (key) {
            case 'a':
                var audio = new Audio('sounds/Bati1.mp3');
                audio.play();
    
                break;
            case 's':
                    var audio = new Audio('sounds/Bati2.mp3');
                    audio.play();
    
                break;
            case 'd':
                var audio = new Audio('sounds/Bati3.mp3');
                audio.play();
    
                break;
            case 'j':
                var audio = new Audio('sounds/Bati4.mp3');
                audio.play();
    
                break;
            case 'k':
                var audio = new Audio('sounds/Bati5.mp3');
                audio.play();
    
                break;
            case 'l':
                var audio = new Audio('sounds/Bati6.mp3');
                audio.play();
    
                break;
    
            default:
                break;
        }
    }
    }