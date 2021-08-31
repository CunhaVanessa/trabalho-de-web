const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const cadastroButton = document.getElementById('cadastro');
const nomeCompleto = document.querySelector('input#nomeCompleto').value;
const enderecoEmail = document.querySelector('input#enderecoEmail').value;

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
 
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

cadastroButton.addEventListener('click', () => {
	window.alert(`Bem vindo, ${nomeCompleto}! Seu endereço de e-mail foi confirmado como ${enderecoEmail}. O mentorama agradece seu cadastro!`)
})