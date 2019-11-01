var kirarNoteLength = document.querySelectorAll('.kirarNote').length;

/* detecting button press! 
i want to create a for loop to go through each kirarNote*/
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


/*
    detecting keyboard press! 
*/

document.addEventListener('keypress', function (event) {
    clickTest(event.key);
});

function clickTest(key) {
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