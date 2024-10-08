
function sortear(){//Função de sorteio
    let quantidade = parseInt(document.getElementById('quantidade').value);//Quantida a ser sorteada
    let de = parseInt(document.getElementById('de').value);//Primeiro parametro (a onde começa)
    let ate = parseInt(document.getElementById('ate').value);//Segundo parametro (a onde termina)
  
	let sorteados = [];
	let numero;

	for (let i = 0; i < quantidade; i++){
		numero = obterNumeroAleatorio(de, ate);
		
		while (sorteados.includes(numero)){
			numero = obterNumeroAleatorio(de, ate);
		}
		sorteados.push(numero);
	}

	let resultado = document.getElementById('resultado')
	resultado.innerHTML = `<label class="texto_paragrafo">Números sorteados: ${sorteados}</label>`
	alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
		let botao = document.getElementById('btn-reiniciar');
		if(botao.classList.contains('container__botao-desabilitado')){
						botao.classList.remove('container__botao-desabilitado');
						botao.classList.add('container__botao');
		}else{
						botao.classList.remove('container__botao');
						botao.classList.add('container__botao-desabilitado');
		}
}

function reiniciar(){
			document.getElementById('quantidade').value = '';
			document.getElementById('de').value = '';
			document.getElementById('ate').value = '';
			document.getElementById('resultado').innerHTML = '<label class="texto_paragrafo">Números sorteados: Nenhum até agora </label>';
			alterarStatusBotao();
}
