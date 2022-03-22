(() => {
  let draggingElem;

  function onDragStart(e){
    draggingElem= e.target;
    console.log(e.target);
  }

  function onDragOver(e){
    console.log('over');
    e.preventDefault();
  }

  function onDragEnter(e){
    console.log('enter');
    e.preventDefault();
  }
  function onDrop(e){
    console.log(e.target);
    e.target.append(draggingElem);  //dropZoneElem.append(draggingElem)
    draggingElem = null;
  }
  function run() {
    const taskElem = Array.from(document.querySelectorAll('.task'));
    const dropZoneElem = Array.from(document.querySelectorAll('.drop-zone'));
    // console.log(taskElem);

    taskElem.forEach((taskElem)=>{
      taskElem.addEventListener('dragstart',onDragStart)
    })

    dropZoneElem.forEach((dropZoneElem)=>{
      dropZoneElem.addEventListener('dragover',onDragOver)
      // dropZoneElem.addEventListener('dragenter',onDragEnter)
      dropZoneElem.addEventListener('drop',onDrop)
    })
    
  }
  run();

})();
