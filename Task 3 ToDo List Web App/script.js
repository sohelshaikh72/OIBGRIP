let counter = document.querySelector('img');
let count = 1;

setInterval(()=>{
	counter.innerText = count;
	count++
	if (count>2) location.replace('./index.html');
},1000)