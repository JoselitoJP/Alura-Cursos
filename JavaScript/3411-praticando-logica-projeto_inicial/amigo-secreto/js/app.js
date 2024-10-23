alert('Vocês estão felizes! ');

let amigos = [];

function adicionar(){

	let amigo = document.getElementById('nome-amigo');
	if (amigo.value == '') {
		alert('Informe o nome do amigo!');
		return;
	}
	let lista = document.getElementById('lista-amigos');

	amigos.push(amigo.value);

	if (lista.textContent == '') {
		lista.textContent = amigo.value;
	} else {
		lista.textContent = lista.textContent + ', ' + amigo.value;
	}

	amigo.value = '';
}

function sortear() {
	if (amigos.length < 4) {
		alert('Adicione pelo menos 4 amigos!');
		return;
	}

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa a lista antes de sortear

    for (let i = 0; i < amigos.length; i++) {
        if (i === amigos.length - 1) { // Último amigo
            sorteio.innerHTML += amigos[i] + '-->' + amigos[0] + '<br>'; // Volta ao primeiro
        } else {
            sorteio.innerHTML += amigos[i] + '-->' + amigos[i + 1] + '<br>'; // Próximo amigo
        }
    }
}


function embaralha(lista){
	for (let indice = lista.length; indice; indice--) {
		const indiceAleatorio = Math.floor(Math.random() * indice);

		//atribuição via destructuring
		[lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
	}
}

function reiniciar(){
	amigos = [];
	document.getElementById('lista-amigos').innerHTML = '';
	document.getElementById('lista-sorteio').innerHTML = '';
}