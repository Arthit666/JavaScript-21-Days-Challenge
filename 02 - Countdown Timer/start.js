(() => {
  const SECOND = 1000;
  const MINUTE = SECOND*60;
  const HOUR = MINUTE*60;
  const DAY = HOUR*24;

  function setElemantText(id,text){
    const elem = document.getElementById(id);
    elem.innerHTML = text;
  }

  function countDown(){
    const now = new Date().getTime();
    console.log(now);
    const newYear = new Date('December 31,2022 23:59:59').getTime();
    console.log(newYear);
    const timeLeft = newYear-now;
    console.log(timeLeft);

    setElemantText("days",Math.floor(timeLeft / DAY));
    setElemantText("hours",Math.floor(timeLeft % DAY / HOUR));
    setElemantText("minutes",Math.floor(timeLeft % HOUR / MINUTE));
    setElemantText("seconds",Math.floor(timeLeft % MINUTE / SECOND));
  }
  function run(){
    setInterval(() => {
      countDown();
    }, 1000);

  }
  run()
})();
