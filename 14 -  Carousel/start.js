(() => {

  let currentIndex = 0;

  function displayImage(imageElems,newIndex){
    if(newIndex < 0){
      newIndex = imageElems.length - 1;
    }else if (newIndex == imageElems.length){
      newIndex = 0;
    }
    const newImage = imageElems[newIndex];
    newImage.scrollIntoView({ behavior: 'smooth' });  // changeImage .scrollIntoView({ behavior: 'smooth' })

    currentIndex = newIndex;

  }

  function run(){
    const imageElems = document.querySelectorAll('img');
    const previousBtnElem = document.querySelector('.previous');
    const nextBtnElem = document.querySelector('.next');

    previousBtnElem.addEventListener('click',()=>displayImage(imageElems,currentIndex - 1))
    nextBtnElem.addEventListener('click',()=>displayImage(imageElems,currentIndex + 1))
  }
  run();

})();
