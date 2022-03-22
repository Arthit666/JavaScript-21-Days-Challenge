(() => {
  const carBrands = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai'
  ];

  const searchElem = document.querySelector('.search');

  function clearResults(){
    const ulElem = document.querySelector('.results')
    if(ulElem){
      document.body.removeChild(ulElem);
    }
  }

  function selectCarBrand(event){
    // console.log(event.target.innerHTML)
    searchElem.value = event.target.innerHTML;
    clearResults();
  }
  
  function onInput(event){

    clearResults();
    const inputText = event.target.value.toLowerCase();
    const matchedCarBrands = carBrands.filter(carBrand =>carBrand.toLowerCase().startsWith(inputText));
    // console.log(matchedCarBrands);

    const ulElem = document.createElement('ul');
    ulElem.classList.add('results');

    matchedCarBrands.forEach(carBrand=>{
      const liElem = document.createElement('li');
      liElem.innerHTML = carBrand;
      liElem.onclick = selectCarBrand;
      ulElem.appendChild(liElem);
    });
    document.body.appendChild(ulElem);
  }

  function run() {
    searchElem.addEventListener('input', onInput);
    document.addEventListener('click',clearResults)
  }

  run();
})();
