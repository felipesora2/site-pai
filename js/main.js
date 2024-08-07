const btnFotos = document.getElementById('botao_fotos');
const divFotos = document.querySelector('#fotos');
const btnAcdc = document.getElementById('botao_acdc');
const btnLedZep = document.getElementById('botao_led');
const btnQueen = document.getElementById('botao_queen');
const btnIconeAcdc = document.querySelector('.icone_acdc');
const btnIconeLed = document.querySelector('.icone_led');
const btnIconeQueen = document.querySelector('.icone_queen');

const audioAcdc = new Audio('./musicas/BackInBlack.mp3');
const audioLedZep = new Audio('./musicas/StairwayToHeaven.mp3');
const audioQueen = new Audio('./musicas/Bohemian Rhapsody.mp3');

let tocarMusica = false;
let fotosVisiveis = false;

btnFotos.addEventListener('click', () => {
    if (fotosVisiveis) {
        divFotos.innerHTML = '';
    } else {
        divFotos.innerHTML = `
        <div class="linha_fotos_horizontal">
                <img src="./img/fotos/foto01.jpeg" alt="" class="imagem_horizontal">
                <img src="./img/fotos/foto02.jpeg" alt="" class="imagem_horizontal">
            </div>

            <div class="linha_fotos_horizontal">
                <img src="./img/fotos/foto03.jpeg" alt="" class="imagem_horizontal">
                <img src="./img/fotos/foto04.jpeg" alt="" class="imagem_horizontal">
            </div>

            <div class="linha_fotos_vertical">
                <img src="./img/fotos/foto05.jpeg" alt="" class="imagem_vertical">
                <img src="./img/fotos/foto06.jpeg" alt="" class="imagem_vertical">
            </div>

            <div class="linha_fotos_vertical">
                <img src="./img/fotos/foto07.jpeg" alt="" class="imagem_vertical">
                <img src="./img/fotos/foto08.jpeg" alt="" class="imagem_vertical">
            </div>

            <div class="linha_fotos_horizontal linha_foto9">
                <img src="./img/fotos/foto09.jpeg" alt="" class="imagem_horizontal foto9">
        </div>
            `

        // Scroll suave até as imagens
        divFotos.scrollIntoView({ behavior: 'smooth' });
    }
    fotosVisiveis = !fotosVisiveis;
});


btnAcdc.addEventListener('click', () => {
    if (tocarMusica) {
        audioAcdc.pause();
        btnIconeAcdc.setAttribute('src', './img/play.png');
    } else {
        audioAcdc.play()
        audioAcdc.volume = 0.5;
        btnIconeAcdc.setAttribute('src', './img/icone-pausa.png');
        
        audioAcdc.addEventListener('ended', () => {
            btnIconeAcdc.setAttribute('src', './img/play.png');
        });
    }
    tocarMusica = !tocarMusica;
});

btnLedZep.addEventListener('click', () => {
    if (tocarMusica) {
        audioLedZep.pause();
        btnIconeLed.setAttribute('src', './img/play.png');
    } else {
        audioLedZep.play();
        audioLedZep.volume = 0.5;
        btnIconeLed.setAttribute('src', './img/icone-pausa.png');

        audioLedZep.addEventListener('ended', () => {
            btnIconeLed.setAttribute('src', './img/play.png');
        })
    }
    tocarMusica = !tocarMusica;
});

btnQueen.addEventListener('click', () => {
    if (tocarMusica) {
        audioQueen.pause();
        btnIconeQueen.setAttribute('src', './img/play.png');
    } else {
        audioQueen.play();
        audioQueen.volume = 0.5;
        btnIconeQueen.setAttribute('src', './img/icone-pausa.png');

        audioQueen.addEventListener('ended', () => {
            btnIconeQueen.setAttribute('src', './img/play.png');
        })
    }
    tocarMusica = !tocarMusica;
});
