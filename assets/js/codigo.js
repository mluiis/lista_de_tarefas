// Elementos - Identificar as variavéis
const formulario = document.querySelector('#forms')
const tarefa = document.querySelector('#tarefa')
const editarForm = document.querySelector('#form-editar')
const listaTarefa = document.querySelector('lista-tarefas')
const editar = document.querySelector('#editarTarefa')
const cancelar = document.querySelector('#cancelar-btn')

let valorAntigo;




// Função


const salvarValor = (text, done = 0, save = 1)=> {

// Criar elementos das tarefas 
const tarefas = document.createElement('div') //criando a DIV(TAREFAS) no HTML
tarefas.classList.add('tarefas') //string da Class

const tituloTarefa = document.createElement('h4') // Cria H4 (TAREFAS) no HTML
tituloTarefa.innerText = text //insere o texto da entrada do valor
tarefas.appendChild(tituloTarefa) //isere o H4 (CONST )

const botao = document.createElement('button') //Adcionar função ao botão de Finalizar
botao.classList.add('final-check')
botao.innerHTML = '<i class="fa-solid fa-square-check icon"></i>' //innerHTML insere a TAG do botão
tarefas.appendChild(botao)


const editarBotao = document.createElement('button') //Adcionar função ao botão de Editar
editarBotao.classList.add('final-editar')
editarBotao.innerHTML = '<i class="fa-solid fa-user-pen"></i>'
tarefas.appendChild(editarBotao)


const removerBotao = document.createElement('button') // adcionar função ao botão de remover
removerBotao.classList.add('final-remove')
removerBotao.innerHTML = '<i class="fa-solid fa-trash"></i>'
tarefas.appendChild(removerBotao)

listatarefas.appendChild(tarefas) // Adcionar a DIV -lista de tarefas a lista geral (em Tarefas)

tarefa.value = ""; // para após adcionar o valor, limpar o campo de texto
tarefa.focus();  // após adcionar, volta a focar no campo
};


//Criar evento de trocar as DIVS de Add, EDITAR E LISTA DE TAREFAS - Puxar a classe HIDE
const toggleForms = () =>{

	editarForm.classList.toggle('hide')
	forms.classList.toggle('hide')
	listatarefas.classList.toggle('hide')
}

const updateTarefa = (text) => {
	const tarefas = document.querySelectorAll ('.tarefas')
	tarefas.forEach((tarefa) => {

		let tarefaTitulo = tarefa.querySelector('h4')
		if (tarefaTitulo.innerText === valorAntigo){

			tarefaTitulo.innerText = text
		}

	})
}


//Eventos
//EventListener Submit - Para quando enviar o formulário (e)= 
//Função anônima - epreventDefault impede que seja enviado para o Backend

forms.addEventListener('submit',(e) => {
e.preventDefault()

// Valor da Entrada - INPUT
const entradaValor = tarefa.value

//validar entrada - Para não adcionar tarefa sem textos
if(entradaValor){
salvarValor(entradaValor)
}

});

//Criar evento para o Click do botão 
document.addEventListener('click',(e) => {

	const btn1 = e.target //selecionando o elemento a ser clicado
	const btn2 = btn1.closest('div'); //elemento pai - Selecionar a DIV mais próxima.
	let tarefaTitulo;

	if(btn2 && btn2.querySelector('h4')){
		tarefaTitulo = btn2.querySelector('h4').innerText
	}

	//verificar se a constBTN1 contém a classe do botão de finalizar
	if(btn1.classList.contains('final-check')){
		btn2.classList.toggle('finalizado') //toogle- Faz a troca das classes
	}

if(btn1.classList.contains('final-remove')){
btn2.remove(); //remove o elemento pai - Botão de Delete

}
if(btn1.classList.contains('final-editar')){
	toggleForms() //mapeia o click do editar

	editar.value = tarefaTitulo
	valorAntigo = tarefaTitulo
}

})

cancelar.addEventListener('click', (e) => {
e.preventDefault()

toggleForms();

})

editarForm.addEventListener('submit', (e) => {

	e.preventDefault()

	const editarEntradaValue = editar.value

	if (editarEntradaValue){
	updateTarefa(editarEntradaValue) //Função para mandar o valor da função. 
	}

	toggleForms()


})