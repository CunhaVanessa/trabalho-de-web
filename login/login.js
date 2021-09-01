const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const cadastroButton = document.getElementById('cadastro');
let nomeVazio = '';
let enderecoVazio = '';

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
 
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

cadastroButton.addEventListener('click', () => {
	const nomeCompleto = document.getElementById('nomeCompleto').value;
	const enderecoEmail = document.getElementById('enderecoEmail').value;
	nomeVazio = nomeCompleto.length == 0 ? true : false;
	enderecoVazio = enderecoEmail.length == 0 ? true: false;
	console.log(nomeVazio);
	if ((nomeVazio == true) || (enderecoVazio == true)) {
		window.alert('Por favor, digite um campo válido.')
	} else {
		window.alert(`Bem vindo, ${nomeCompleto}! Seu endereço de e-mail foi confirmado como ${enderecoEmail}.`);
	}
})