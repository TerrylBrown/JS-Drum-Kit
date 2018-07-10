(() => {

  'use strict';

  const keys = document.querySelectorAll('.key');

  function playSound(event, keyNum) {
    const keyCodeNumber = keyNum ? keyNum : event.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCodeNumber}"]`);
    const key = document.querySelector(`.key[data-key="${keyCodeNumber}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();  
    key.classList.add('playing');  
  }

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');    
  }
  
  keys.forEach(key => {
    
    // Remove Transition
    key.addEventListener('transitionend', removeTransition)

    // On click event
    key.addEventListener('click', function(event) {
      playSound(event, this.getAttribute('data-key'));
    });

  });  

  // On keydown event listener
  window.addEventListener('keydown', playSound);

})();