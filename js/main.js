'use strict'
{
  const btn = document.getElementById('btn');
  const countDown = document.getElementById('count-down');

  btn.addEventListener('click',()=>{
    btn.disabled = true;
    btn.classList.add('active');
    let count = 3;
    const intervalId = setInterval(()=>{
      count--;
      countDown.textContent = `00:0${count}`;
      if(count < 0){
        clearInterval(intervalId);
        count = 3;
        countDown.textContent = `00:0${count}`;
        btn.classList.remove('active');
        btn.disabled = false;
      }
    },1000);
  })
}