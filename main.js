const form = document.getElementById("form-compara");
const primeiroValor = document.getElementById("primeiro");
const segundoValor = document.getElementById("segundo");

function validaNumero(a,b){
    a = parseInt(a);
    b = parseInt(b);
    if( a <= b){
        return true;
    }else { 
        return  false;
}}

form.addEventListener('submit', function(e){
    let formEValido;
    e.preventDefault();
    const mensagemDeSucesso = `Valor: ${segundoValor.value} é o maior numero, tudo certo!!`;

    
    formEValido = validaNumero(primeiroValor.value,segundoValor.value);
    
    if(formEValido){
        const containerMensagemDeSucesso = document.querySelector('.sucess-message');
        containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemDeSucesso.style.display = 'block';

    
        primeiroValor.value = '';
        segundoValor.value = '';
    }else { 
        document.querySelector('.error-message').style.display = 'block';
    }
})

form.addEventListener('keyup', function(e){

    formEValido = validaNumero(primeiroValor.value,segundoValor.value);
    if(!formEValido){
        primeiroValor.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.sucess-message').style.display = 'none';
    }else{
        primeiroValor.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})

