(() => {

  function onScroll() {
     const sectionElems = Array.from(document.querySelectorAll('section'));
    sectionElems.forEach((sectionElem)=>{
      const imageElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');

      const scrollPosition = window.pageYOffset;
      // console.log(scrollPosition);
      const reviewPosition = imageElem.offsetTop + imageElem.offsetHeight / 10; //แหน่งของรูปในwindow + (ความสูงของรูป / 10)
        if (scrollPosition >= reviewPosition){
          textElem.classList.add('reveal');
        }
    });
  }


  function run(){
    document.addEventListener('scroll',onScroll);

  }

  run();
})();
