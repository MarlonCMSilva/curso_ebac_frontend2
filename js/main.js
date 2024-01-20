$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    
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
        },
        messages:{
            nome: 'Por favor insira seu nome',
            telefone: 'Por favor insira seu telefone',
            email: 'Por favor insira seu email',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(e, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    
})