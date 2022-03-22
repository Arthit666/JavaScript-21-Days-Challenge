(() => {
  function run (){
    const bodyElem = document.querySelector('body')
    const eyeElems = document.querySelectorAll('.eye')
    function onMouseMove({pageX, pageY}){
        // console.log(pageX,pageY)
      eyeElems.forEach(eleElem => {
        const {left,top} = eleElem.getBoundingClientRect();

        const eyeCenterX = left + eleElem.offsetWidth / 2;
        const eyeCenterY = top + eleElem.offsetHeight / 2;
        const radian = Math.atan2(pageX-eyeCenterX,pageY-eyeCenterY);  //เมาส์ อยู่ตำแหน่งกี่ rad
        const angle = radian * 180 / Math.PI * -1;
        // console.log( 'radian ',radian)
        // console.log( 'angle ',angle)
        eleElem.style.transform = `rotate(${angle}deg)`
      });
    }

    bodyElem.addEventListener('mousemove',onMouseMove)
  }
run(); 
})();
