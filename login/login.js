const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const cadastroButton = document.getElementById('cadastro');
const usuarioButton = document.getElementById('usuario');
let nomeVazio = '';
let enderecoVazio = '';
let senhaVazio = '';
let emailUsuarioVazio = '';
let senhaUsuarioVazio = '';



signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
 
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

usuarioButton.addEventListener('click', () => {
	const usuarioEmail = document.getElementById('emailUsuario').value;
	const senhaUsuario = document.getElementById('senhaUsuario').value;
	emailUsuarioVazio = usuarioEmail.length == 0 ? true : false;
	senhaUsuarioVazio = senhaUsuario.length < 8 ? true : false;
	console.log(emailUsuarioVazio);
	console.log(senhaUsuarioVazio);
	if (emailUsuarioVazio == true) {
		window.alert('Digite um endereço de e-mail válido.');
	} else if (senhaUsuarioVazio == true) {
		window.alert('Digite sua senha. Ela tem pelo menos 8 caracteres.');
	} else {
		window.alert(`Bem-vindo, usuário ${usuarioEmail}. Vamos entrar na sua conta!`);
	}
})

cadastroButton.addEventListener('click', () => {
	const nomeCompleto = document.getElementById('nomeCompleto').value;
	const enderecoEmail = document.getElementById('enderecoEmail').value;
	const senhaUsuario = document.getElementById('senhaCadastro').value;
	nomeVazio = nomeCompleto.length == 0 ? true : false;
	enderecoVazio = enderecoEmail.length == 0 ? true : false;
	senhaVazio = senhaUsuario.length < 8 ? true : false;
	console.log(nomeVazio);
	console.log(enderecoVazio);
	console.log(senhaVazio);
	if ((nomeVazio == true) || (enderecoVazio == true)) {
		window.alert('Por favor, digite um campo válido.')
	} else if (senhaVazio == true) {
		window.alert('A senha deve ter no mínimo 8 caracteres.');
	}	else {
		window.alert(`Bem vindo, ${nomeCompleto}! Seu endereço de e-mail foi confirmado como ${enderecoEmail}.`);
	}
})