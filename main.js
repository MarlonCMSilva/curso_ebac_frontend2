$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novoitemdalista = $('#atividade').val();
            const novoItem = $(`<li>${novoitemdalista}</li>`);
            $(novoItem).appendTo(`ul`);
            $('#atividade').val('');
    })

    const tabelaraiz = document.querySelector('ul')
    tabelaraiz.addEventListener('click', function(e){
            if(e.target.classList.contains('item')){
                e.target.classList.remove('item');
            }else{
                e.target.classList.add('item');
            }
        })
})
