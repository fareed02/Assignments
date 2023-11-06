let left = 0;

function action(event) {
    console.log(event.keyCode)
    let character = document.getElementById("character");

    if (event.keyCode === 39 && left < 1000) {
        console.log(left);
        left = left + 20;
        character.style.left = left + 'px';
        character.style.width = '350px';
        character.style.height = '350px';
        character.src = 'gifs/iori-xi-walk.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 3000)

    }

    if (event.keyCode === 37 && left > 10) {
        console.log(left);

        left = left - 20;
        character.style.left = left + 'px';
        character.style.width = '500px';
        character.style.height = '500px';
        character.src = 'gifs/iori-xi-dashback.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 1500)

    }

    if (event.keyCode === 75) {
        character.style.width = '450px';
        character.style.height = '400px';
        character.src = 'gifs/iori-cv-hk.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 3000)
    }

    if (event.keyCode === 80) {
        character.style.width = '1000px';
        character.style.height = '550px';
        character.src = 'gifs/iori-xi-super2.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 6500)
    }

    if (event.keyCode === 82) {
        left = left + 20;
        character.style.left = left + 'px';
        character.style.width = '450px';
        character.style.height = '300px';
        character.src = 'gifs/iori-xi-running.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 3000)
    }

    if (event.keyCode === 69) {
        character.style.width = '950px';
        character.style.height = '350px';
        character.src = 'gifs/iori-xi-projectile.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 1500)
    }

    if (event.keyCode === 32) {
        character.style.width = '1000px';
        character.style.height = '600px';
        character.src = 'gifs/iori-xi-jump.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 1000)
    }

    if (event.keyCode === 68) {
        character.src = 'gifs/iori-xi-doublestrike.gif'
        character.style.width = '450px';
        character.style.height = '450px';

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 1000)
    }

    if (event.keyCode === 66) {
        character.src = 'gifs/iori-xi-axekick.gif'
        character.style.width = '450px';
        character.style.height = '450px';

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 1000)
    }

    if (event.keyCode === 65) {
        character.style.width = '950px';
        character.style.height = '450px';
        character.src = 'gifs/iori-xi-attacks.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 2000)
    }

    if (event.keyCode === 67) {
        character.style.width = '1000px';
        character.style.height = '800px';
        character.src = 'gifs/iori-cv-super.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 3000)
    }


    if (event.keyCode === 70) {
        character.src = 'gifs/iori-cv-hk.gif'
        character.style.width = '450px';
        character.style.height = '450px';

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 1000)
    }

    if (event.keyCode === 88) {
        character.style.width = '450px';
        character.style.height = '450px';
        character.src = 'gifs/io-snap.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 3000)
    }

    if (event.keyCode === 83) {
        character.style.width = '850px';
        character.style.height = '850px';
        character.src = 'gifs/iori-xi-special3.gif'

        setTimeout(function () {
            character.src = 'gifs/iori-96stance.gif'
            character.style.width = '350px';
            character.style.height = '350px';
        }, 1500)
    }
}

window.onkeydown = action;

let right = 0;

function play(event) {
    console.log(event.keyCode)
    let character1 = document.getElementById("character-1");

    if (event.keyCode === 71 && right < 1000) {
    
        right = right + 20;
        character1.style.right = right + 'px';
        character1.style.width = '350px';
        character1.style.height = '350px';

        setTimeout(function () {
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 3000)

    }

    if (event.keyCode === 72 && right > 10) {
    
        right = right - 20;
        character1.style.right = right + 'px';
        character1.style.width = '350px';
        character1.style.height = '350px';

        setTimeout(function () {
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 3000)

    }

    if (event.keyCode === 74) {
    
        character1.src = 'gifs/kyo98-3hit2.gif'
        character1.style.width = '1000px';
        character1.style.height = '400px';

        setTimeout(function () {
            character1.src = 'gifs/kyo-cvs2-stance.gif'
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 2000)

    }

    if (event.keyCode === 73) {
        character1.src = 'gifs/kyo98-max.gif'
        character1.style.width = '950px';
        character1.style.height = '650px';

        setTimeout(function () {
            character1.src = 'gifs/kyo-cvs2-stance.gif'
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 3000)

    }

    if (event.keyCode === 76) {
        character1.src = 'gifs/kyo98-max2.gif'
        character1.style.width = '1000px';
        character1.style.height = '700px';

        setTimeout(function () {
            character1.src = 'gifs/kyo-cvs2-stance.gif'
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 6500)

    }

    if (event.keyCode === 77) {
        character1.src = 'gifs/kyo98closeattacks.gif'
        character1.style.width = '400px';
        character1.style.height = '400px';

        setTimeout(function () {
            character1.src = 'gifs/kyo-cvs2-stance.gif'
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 2000)

    }

    if (event.keyCode === 78) {
        character1.src = 'gifs/kyo98special.gif'
        character1.style.width = '700px';
        character1.style.height = '600px';

        setTimeout(function () {
            character1.src = 'gifs/kyo-cvs2-stance.gif'
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 1500)
    }

    if (event.keyCode === 79) {
        character1.src = 'gifs/kyo-snap.gif'
        character1.style.width = '500px';
        character1.style.height = '500px';

        setTimeout(function () {
            character1.src = 'gifs/kyo-cvs2-stance.gif'
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 1500)
    }

    if (event.keyCode === 89) {
        character1.src = 'gifs/kyo98-standingattacks.gif'
        character1.style.width = '500px';
        character1.style.height = '400px';
    
        setTimeout(function(){
        character1.src = 'gifs/kyo-cvs2-stance.gif'
            character1.style.width = '350px';
            character1.style.height = '350px';
        }, 1500)
    }

}

window.onkeyup= play;
