// Banco de dados dos consoles
const consoleData = {
    ps5: {
        title: "PlayStation®5",
        tagline: "Jogar Não Tem Limites",
        desc: "Experimente o carregamento Relâmpago com um SSD de altíssima velocidade, imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation®.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-disc-drive-front-product-shot-01-en-23jul24?$IMAGE_SRC$"
    },
    ps5pro: {
        title: "PlayStation®5 Pro",
        tagline: "O ápice do desempenho gamer",
        desc: "Com o PS5 Pro, você pode jogar com gráficos incrivelmente nítidos a taxas de quadros altas e constantes. Graças ao poder do Ray Tracing avançado e à upscaling baseada em IA (PSSR), seus jogos favoritos atingem um novo patamar de realismo.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-product-shot-01-en-29aug24?$IMAGE_SRC$"
    },
    psvr2: {
        title: "PlayStation®VR2",
        tagline: "Vá além da realidade",
        desc: "Escape para mundos que parecem, parecem e soam completamente reais enquanto a tecnologia de realidade virtual dá um salto geracional massivo com visuais em 4K HDR e controles Sense revolucionários.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/ps-vr2-product-shot-01-en-22feb22?$IMAGE_SRC$"
    },
    ps4: {
        title: "PlayStation®4",
        tagline: "Jogos incríveis e entretenimento sem fim",
        desc: "O console PS4 oferece poder de jogo incrível, entretenimento espetacular e tecnologia HDR vibrante para acompanhar uma biblioteca lendária de jogos clássicos que definiram a história recente do mundo gamer.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$IMAGE_SRC$"
    }
};

// Seleção dos elementos do DOM
const buttons = document.querySelectorAll('.console-btn');
const imgEl = document.getElementById('display-img');
const titleEl = document.getElementById('display-title');
const taglineEl = document.getElementById('display-tagline');
const descEl = document.getElementById('display-desc');

// Adiciona o evento de clique para cada botão do menu
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Remove a classe active de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe active no botão clicado
        event.currentTarget.classList.add('active');
        
        // Pega a chave do console (ps5, ps4, etc) definida no HTML
        const consoleKey = event.currentTarget.getAttribute('data-console');
        
        // Efeito suave de transição (fade out)
        imgEl.style.opacity = 0;
        titleEl.style.opacity = 0;
        
        setTimeout(() => {
            // Altera o conteúdo baseado no objeto consoleData
            imgEl.src = consoleData[consoleKey].img;
            imgEl.alt = consoleData[consoleKey].title;
            titleEl.innerText = consoleData[consoleKey].title;
            taglineEl.innerText = consoleData[consoleKey].tagline;
            descEl.innerText = consoleData[consoleKey].desc;
            
            // Retorna a opacidade (fade in)
            imgEl.style.opacity = 1;
            titleEl.style.opacity = 1;
        }, 150);
    });
});
