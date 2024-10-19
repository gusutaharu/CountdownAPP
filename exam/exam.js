'use strict';

{
  function check() {

  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', ()=>{
    const endTime = new Date().getTime() + 3 * 1000;
    setInterval(check, 100);
  });
}