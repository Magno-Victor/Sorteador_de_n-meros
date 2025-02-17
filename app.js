// Função principal que realiza o sorteio
function sortear(){
    if(!validarCampos()){
        return;
    }
    
    // Obtém a quantidade de números a serem sorteados dos inputs HTML e converte para inteiro
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Obtém o elemento HTML onde o resultado será exibido
    let campo = document.getElementById('resultado');

    // Array para armazenar os números sorteados
    let sorteados = [];
    let numero;
    
   // Loop para gerar a quantidade de números sorteados
    for (let i = 0; i < quantidade; i++){
        // Chama a função aleatorio para gerar um número dentro do intervalo definido
        numero = aleatorio(de,ate);

        // Verifica se o número já foi sorteado
        if(!sorteados.includes(numero)){
            // Se não foi sorteado, adiciona ao array
            sorteados.push(numero);
        }
        // Se o número já foi sorteado, decrementa o contador para gerar outro número
        else(i--);
    }

    // Exibe os números sorteados no elemento HTML
    campo.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    // Habilita o botão "Reiniciar"
    habilitarReiniciar();
    
}

// Função para validar os campos
function validarCampos() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    if (quantidade === "" || de === "" || ate === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Retorna falso se algum campo estiver vazio
    }

    // Nova verificação: campo "de" maior que "até"
    if (parseInt(de) >= parseInt(ate)) {
        alert("O número inicial deve ser menor que o número final.");
        return false; // Retorna falso se a condição não for satisfeita
    }

    return true; // Retorna verdadeiro se todos os campos estiverem preenchidos
}

// Função para gerar um número aleatório dentro de um intervalo
function aleatorio(min,max){
    // Utiliza Math.random para gerar um número aleatório entre 0 e 1, 
    // multiplica pela amplitude do intervalo e soma o valor mínimo para ajustar o intervalo.
    // Math.floor arredonda o número para o inteiro mais próximo.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para habilitar o botão "Reiniciar"
function habilitarReiniciar(){
    let reiniciar = document.getElementById('btn-reiniciar');
    // Verifica se o botão tem a classe 'container__botao-desabilitado'
    if(reiniciar.classList.contains('container__botao-desabilitado')){
        // Se tem, remove a classe 'container__botao-desabilitado' e adiciona a classe 'container__botao'
        reiniciar.classList.remove('container__botao-desabilitado');
        reiniciar.classList.add('container__botao');
    }
    return;
}

// Função para reiniciar o jogo
function reiniciar(){
    // Limpa os campos de input
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
       // Exibe a mensagem "Nenhum número sorteado" no elemento HTML
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
      
    let reiniciar = document.getElementById('btn-reiniciar');
    // verifica se o botão reiniciar está habilitado.
    if(reiniciar.classList.contains('container__botao')){
        // Desabilita o botão reiniciar.
        reiniciar.classList.remove('container__botao');
        reiniciar.classList.add('container__botao-desabilitado');
    }

}
