document.getElementById('botaoClique').addEventListener('click', () => {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';

    iniciarContador();
    iniciarGaleria();
});

function iniciarContador() {
    const dataInicial = new Date('2022-09-16T00:00:00'); // Data inicial
    const contadorValor = document.getElementById('contadorValor');

    function atualizarContador() {
        const agora = new Date();
        let diferenca = agora - dataInicial;

        const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
        diferenca %= 1000 * 60 * 60 * 24 * 365;

        const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
        diferenca %= 1000 * 60 * 60 * 24 * 30;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        diferenca %= 1000 * 60 * 60 * 24;

        const horas = Math.floor(diferenca / (1000 * 60 * 60));
        diferenca %= 1000 * 60 * 60;

        const minutos = Math.floor(diferenca / (1000 * 60));
        diferenca %= 1000 * 60;

        const segundos = Math.floor(diferenca / 1000);

        contadorValor.textContent = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    }

    atualizarContador(); // Atualiza imediatamente
    setInterval(atualizarContador, 1000); // Atualiza a cada segundo
}

function iniciarGaleria() {
    const imagens = document.querySelectorAll('#galeria img');
    let index = 0;

    setInterval(() => {
        imagens.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % imagens.length;
    }, 4000); // Troca a cada 4 segundos
}

document.getElementById('botaoClique').addEventListener('click', () => {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';

    iniciarContador();
    iniciarGaleria();
    iniciarChuvaDeCoracoes();
});

function iniciarChuvaDeCoracoes() {
    const fundo = document.getElementById('fundo');

    setInterval(() => {
        const coracao = document.createElement('div');
        coracao.classList.add('coraçao');

        // Posição aleatória no eixo X
        coracao.style.left = Math.random() * 100 + 'vw';

        // Tamanho aleatório
        const tamanho = Math.random() * 10 + 10 + 'px';
        coracao.style.width = tamanho;
        coracao.style.height = tamanho;

        // Adiciona o coração ao fundo
        fundo.appendChild(coracao);

        // Remove o coração após a animação
        setTimeout(() => {
            coracao.remove();
        }, 5000); // Tempo da animação (5s)
    }, 300); // Intervalo entre os corações (300ms)
}