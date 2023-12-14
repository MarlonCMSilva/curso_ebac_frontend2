$(document).ready(function(){


    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },

        },
        messages:{
            nome: 'Por favor insira seu nome',
            telefone: 'Por favor insira seu telefone',
            email: 'Por favor insira seu email',
            cpf: 'Por favor insira seu cpf',
            cep: 'Por favor insira o cep',
            endereco:'Por favor insira o endereço completo',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    
})