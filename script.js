let seuVotoPara = document.querySelector('.d-1-1 span'); 
let cargo = document.querySelector('.d-1-2 span');

let numeros = document.querySelector('.d-1-3');

let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-direita');

let etapaAtual = 0;
let numero = '';

function iniciarEtapa (){
	let etapa = etapas[etapaAtual];

	let numeroHTML = '';

/*loop dos campos para digitar o numero*/
	for (let i=0; i<etapa.numeros; i++) {
		if (i === 0) {
			numeroHTML += '<div class="numero pisca"></div>';
		}else{
		numeroHTML += '<div class="numero"></div>';
		}
	}


	seuVotoPara.style.display = 'none'; /*pesquisar*/
	cargo.innerHTML = etapa.titulo;/* o innerHTML substituirá a variavel cargo pela variavel titulo que está no etapa.js*/
	descricao.innerHTML = ''; /*substitui por vazio*/
	aviso.style.display = 'none';
	lateral.innerHTML = '';
	numeros.innerHTML = numeroHTML;
}

function atualizaInterface(){
	let etapa = etapas[etapaAtual];

	/*busca pelo candidato*/

	let candidato = etapa.candidatos.filter((item)=>{
		if (item.numero === numero) {
			return true;
		}else{
			return false;
		}
	});
	
	console.log("candidato",candidato);
}


function clicou(n){
	let elNumero = document.querySelector('.numero.pisca');/*ele vai procurar o campos que estiver piscando*/
	if (elNumero !== null) {
		elNumero.innerHTML = n; /*preenche com o numero selecionado*/
		numero = "${numero}${n}";

		elNumero.classList.remove('pisca'); /*remove o pica*/
		if (elNumero.nextElementSibling !== null) {
		elNumero.nextElementSibling.classList.add('pisca');/*pula pro próximo adicionando pisca*/
	} else{
		atualizaInterface();
	}
}
}

function branco(){
	alert("Clicou em Branco");
}

function corrige(){
	alert("Clicou em Corrige");
}

function confirma(){
	alert("Clicou em Confirma");
}
 iniciarEtapa();