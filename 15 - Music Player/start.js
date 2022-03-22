(() => {
  const audioElem = document.querySelector('audio');
  const playBtnElem = document.querySelector('.play');
  const progressBarElem = document.querySelector('.progress-bar');
  const startTimeELem = document.querySelector('.start-time');
  const endTimeElem = document.querySelector('.end-time');


  function onClick(){

    if(audioElem.paused){
      audioElem.play();
      playBtnElem.className = 'pause';
    }else {
      audioElem.pause();
      playBtnElem.className = 'play';
    }

  }

  function getDuration(time){
    const minutes = Math.floor(time/60 % 60).toString();
    const second = Math.floor(time % 60).toString().padStart(2,'0'); //2 decimal if 1 decimal add 0 in font

    return `${minutes}:${second}`
  }

  function onTimeUpdate() {
    startTimeELem.innerHTML = getDuration(audioElem.currentTime); //audioElem.currentTime in second on play
    progressBarElem.value = audioElem.currentTime;
  }
  function onLoadedData(){
      endTimeElem.innerHTML =  getDuration(audioElem.duration); // audioElem.duration in second on end
      progressBarElem.max = audioElem.duration;
  }
  function onInput() {
       audioElem.currentTime = progressBarElem.value;
  }

  function onEnded() {
    playBtnElem.className = 'play';
    audioElem.currentTime = 0;
  }
  
  function run() {
    playBtnElem.addEventListener('click',onClick);

    audioElem.addEventListener('timeupdate', onTimeUpdate);
    audioElem.addEventListener('loadeddata',onLoadedData);
    audioElem.addEventListener('ended',onEnded);

    progressBarElem.addEventListener('input', onInput);
  }
  run();
})();
