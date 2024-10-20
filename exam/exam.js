'use strict';

{
  function check() {
    let countdown = endTime - new Date().getTime();

    if (countdown < 0){
      clearInterval(intervalId);
      countdown = 3 * 1000;
    }

    const totalSeconds  = Math.floor(countdown / 1000);

    const minutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds % 60;

    timer.textContent = `${minutes}:${seconds}`;
  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;
  let intervalId;

  btn.addEventListener('click', ()=>{
    endTime = new Date().getTime() + 3 * 1000;
    intervalId = setInterval(check, 100);
  });
}