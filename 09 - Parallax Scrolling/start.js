(() => {


  function onScroll(){
    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');
    // console.log(window.scrollY);
    moonElem.style.transform = `translate(${window.scrollY * 0.5}%,${window.scrollY * -0.5}%)`
    wishElem.style.transform = `translateY(${window.scrollY * -1.25}%)`
  }
  function run() {
    document.addEventListener('scroll', onScroll);
  }
  run();
})();
