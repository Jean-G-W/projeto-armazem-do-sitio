function filtrarProdutos() {

    const termoBusca = document.getElementById('campoBusca').value.toLowerCase();
    

    const produtos = document.querySelectorAll('.produto');
    

    let encontrouResultados = false;
    

    produtos.forEach(produto => {

        const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        

        if (nomeProduto.includes(termoBusca)) {
            produto.style.display = 'block'; 
            encontrouResultados = true;
        } else {
            produto.style.display = 'none'; 
        }
    });
    

    if (!encontrouResultados && termoBusca !== '') {
        alert('Nenhum produto encontrado para: ' + termoBusca);
    }
}

document.getElementById('campoBusca').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filtrarProdutos();
    }
});