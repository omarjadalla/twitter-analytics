//'04-23-2018'
function analytics(initDate,endDate){
	
	var initDate = Date.parse(initDate);
	var endDate = Date.parse(endDate);

	var meses = document.querySelectorAll('.home-page');

	var totalImpressoes = 0;
	var totalSeguidores = 0;
	var totalTwittes = 0;
	var totaVisitas = 0;


	function addMes(item, index){
		
		let mes = item.querySelector('h4').innerText	

		let metricas = item.querySelectorAll('.home-summary-metric');

		let initTime = item.getAttribute('data-start');
		let endTime = item.getAttribute('data-end');


		if(initTime > initDate && endTime < endDate){

			console.log('%c \n '+mes,'color: blue');
			metricas.forEach(addMetrica);

		}

	}


	function addMetrica(item,index){
		
		let classe = item.querySelector('.DataPoint-info').classList[1];
		let valor = parseInt(item.querySelector('.DataPoint-info').innerText.replace('.',''));
		
		//console.log(item.querySelector('h3').innerText +': '+valor);

		if(classe == 'metric-tweets' && Number.isInteger(valor)){

			console.log('%cTweets: '+ valor, 'color:#4285f4');
			totalTwittes += valor;

		}
		if(classe == 'metric-tweetviews' && Number.isInteger(valor)){
			
			console.log('%cImpressões: '+ valor, 'color: #28a745');
			totalImpressoes += valor;

		}

		if(classe == 'metric-profile-views' && Number.isInteger(valor)){

			console.log('%cVisitas ao perfil: '+ valor,'color:#dc3545');
			totaVisitas += valor;

		}

		if(classe == 'metric-followers' && Number.isInteger(valor)){
			
			console.log('%cSeguidores: '+valor, 'color:#8e24aa');
			totalSeguidores = totalSeguidores + valor;

		}


	}


	meses.forEach(addMes);

	console.log('%c \n Total','color: blue');
	console.log('%cTweetes: '+totalTwittes, 'color:#4285f4');
	console.log('%cImpressões: '+totalImpressoes, 'color: #28a745');
	console.log('%cVisitas ao perfil: '+totaVisitas,'color:#dc3545');
	console.log('%cSeguidores: '+totalSeguidores, 'color:#8e24aa');
	
	
}