const timer = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const clear = document.getElementById('clear');

let elapsed = 0;

function timeDisplay(){
	ms = elapsed % 1000;
	s = Math.floor(elapsed / 1000) % 60;
	m = Math.floor(elapsed / (1000*60)) % 60;
	h = Math.floor(elapsed / (1000*60*60));

	ms = ('0' + ms).slice(-3,-1);
	s = ('0' + s).slice(-2);
	m = ('0' + m).slice(-2);
	h = ('0' + h).slice(-2);

	timer.textContent = h + ':' + m + ':' + s + '.' + ms;
}

start.addEventListener('click',function(){
	start.disabled = true;
	stop.disabled = false;
	clear.disabled = false;

	let pre = new Date();

	intervalId = setInterval(function(){
		const now = new Date();
		elapsed += now - pre;
		pre = now;
		timeDisplay();
	},10);

},false);

stop.addEventListener('click',function(){
	start.disabled = false;
	stop.disabled = true;

	clearInterval(intervalId);  
},false);

clear.addEventListener('click',function(){
	start.disabled = false;
	stop.disabled = true;
	clear.disabled = true;

	clearInterval(intervalId);
	elapsed = 0;
	timer.textContent = "00:00:00.00";
},false);


