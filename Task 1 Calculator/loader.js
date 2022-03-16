
let counter = document.querySelector('img');
let count = 1;

setInterval(()=>{
  counter.innerText = count;
  count++
  if (count>3) location.replace('./Calculator2.html');
},1000)