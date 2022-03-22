(() => {

  const konamiCode = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'a',
    'b'
  ]
  let index = 0;
  function onKeyDown (event){
    console.log(event.key)
    event.key === konamiCode[index] ? index++ : index = 0
    console.log(index)
    if (index == konamiCode.length){
      startSnowing();
    }
  }

  function run() {
    document.addEventListener('keydown', onKeyDown);
  }
  run();

})();
