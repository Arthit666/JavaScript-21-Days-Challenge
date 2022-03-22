(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }

  // 2. How to know what is "this"?
  //// 2.1 Invoker object
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }

  // const arthit = { name: 'arthit', printName };;
  // const jane = { name: 'Jane', printName };

  // arthit.printName();
  // jane.printName();

  //// 2.2 Global object (window, global)
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }

  // name = 'Global';
  // printName();

  //// 2.3 Constructor function
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }
  // function Person (name) {
  //   this.name = name
  //   this.printName = printName;
  // }

  // const arthit = new Person('arthit');
  // arthit.printName();


  // 3. call(), apply(), and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(
      `My name is ${this.name}, I'm ${nationality} and am living in ${city}`
    );
  }

  function Person (name, nationality, city) {
    this.name = name
    this.nationality = nationality
    this.city = city;
///////////////////
    printName(this.nationality, this.city);   ///this is globle
//////////////////
    printName.call(this, this.nationality, this.city); // this is obj
    printName.apply(this, [this.nationality, this.city]);// this is obj
    const printVarayutName = printName.bind(this);// this is obj
    printVarayutName('Thai', 'Bangkok');// this is obj
  }

  const varayut = new Person('Varayut', 'Thai', 'City');
})();
