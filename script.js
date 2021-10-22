function playSound (e){
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`); 
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    
    //key.classList.remove('playing');
    //key.classList.toggle('playing');
    setTimeout(function(){
        key.classList.add('playing');
    }, 0.3)
    }
    //console.log(key);
    function removeTransition(e) {
        //console.log(e);
        if (e.propertyName !== 'transform') return; // skip it if it`s not a transform
        //console.log(e.propertyName);
        this.classList.remove('playing')

    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('transitionend', removeTransition);
    })

window.addEventListener('keydown', playSound);