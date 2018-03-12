var meses = document.querySelectorAll('.home-page');





meses.forEach(addMes);

function addMes(item, index){
	
	let mes = item.querySelector('h4').innerText	

	let metricas = item.querySelectorAll('.home-summary-metric');

	console.log(mes);
	
	metricas.forEach(addMetrica);
}

function addMetrica(item,index){
	console.log(item.querySelector('h3').innerText)
	console.log(item.querySelector('.DataPoint-info').classList[1])
	console.log(item.querySelector('.DataPoint-info').innerText.replace('.',''))
}