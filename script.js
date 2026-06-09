const consoleData = {
    ps1: {
        title: "PlayStation 1",
        tagline: "Onde tudo começou.",
        description: "O console que revolucionou a indústria com o uso de CDs e gráficos em 3D, definindo o padrão para os jogos modernos.",
        buyLink: "https://www.playstation.com/",
        versions: [
            {
                name: "Modelo Original (Fat)",
                image: "fotos consoles/PS1.png",
                specs: [
                    "CPU: MIPS R3000A de 32-bit @ 33.8 MHz",
                    "Memória RAM: 2 MB RAM Principal + 1 MB VRAM de Vídeo",
                    "Gráficos: Resolução de 256x224 a 640x480 pixels",
                    "Armazenamento: Cartão de Memória (Memory Card de 1MB)",
                    "Mídia Física: Unidade de CD-ROM 2x (Leitura de 300 KB/s)"
                ]
            },
            {
                name: "PS One (Slim)",
                image: "fotos consoles/PS1-slim.webp",
                specs: [
                    "CPU: LSI R3000A customizado @ 33.8 MHz",
                    "Memória RAM: 2 MB RAM Principal + 1 MB VRAM",
                    "Gráficos: Coprocessador geométrico integrado na placa",
                    "Armazenamento: Totalmente compatível com Memory Cards originais",
                    "Diferencial: Redesign 30% menor e fonte de alimentação externa"
                ]
            }
        ],
        games: [
            { name: "Tomb Raider", image: "Fotos jogos/tomb-raider-playstation-capa-1.jpeg" },
            { name: "Final Fantasy VII", image: "Fotos jogos/final-fantasy-VII-capa-1.jpeg" },
            { name: "Crash Bandicoot", image: "Fotos jogos/Crash_Bandicoot_1_capa.png" }
        ]
    },
    ps2: {
        title: "PlayStation 2",
        tagline: "O console mais vendido da história.",
        description: "Com um leitor de DVD embutido e uma biblioteca de jogos colossal, o PS2 mudou os parâmetros da indústria global de entretenimento doméstico.",
        buyLink: "https://www.playstation.com/",
        versions: [
            {
                name: "Modelo Original (Fat)",
                image: "fotos consoles/PS2-Fat.png",
                specs: [
                    "CPU: Emotion Engine de 64-bit @ 294.9 MHz",
                    "Memória RAM: 32 MB RDRAM de Sistema + 4 MB VRAM",
                    "GPU: Graphics Synthesizer @ 147.4 MHz",
                    "Armazenamento: Memory Card de 8 MB (Expansível)",
                    "Expansão: Suporte a Disco Rígido (HDD) interno e leitor de DVD"
                ]
            },
            {
                name: "Modelo Slim",
                image: "fotos consoles/PS2-Slim-Console-Set.png",
                specs: [
                    "CPU: Emotion Engine @ 299 MHz (litografia mais eficiente)",
                    "Memória RAM: 32 MB RDRAM unificada",
                    "GPU: Graphics Synthesizer integrado com melhor dissipação",
                    "Armazenamento: Slots de Memory Card integrados de 8 MB",
                    "Rede: Porta Ethernet RJ-45 integrada diretamente na placa"
                ]
            }
        ],
        games: [
            { name: "GTA: San Andreas", image: "Fotos jogos/Grand_Theft_Auto_San_Andreas_capa.png" },
            { name: "God of War", image: "Fotos jogos/God_of_War_capa.png" },
            { name: "Resident Evil 4", image: "Fotos jogos/RE_4_capa.jpeg" }
        ]
    },
    psp: {
        title: "PSP",
        tagline: "O poder do PlayStation no seu bolso.",
        description: "O primeiro portátil da Sony trouxe gráficos que rivalizavam com os consoles de mesa e funcionalidades multimídia incríveis para a época.",
        buyLink: "https://www.playstation.com/",
        versions: [
            {
                name: "PSP-1000 (Fat)",
                image: "fotos consoles/PSP-1000.png",
                specs: [
                    "CPU: MIPS R4000 Core Customizado (32-bit) @ 1 a 333 MHz",
                    "Memória RAM: 32 MB de RAM Principal + 4 MB eDRAM incorporada",
                    "Armazenamento: Leitor de cartões Memory Stick Duo / PRO Duo",
                    "Mídia Física: Drive ótico para discos UMD (Universal Media Disc)",
                    "Hardware Físico: Peso de 280g, tela LCD TFT de 4.3\" (480x272)"
                ]
            },
            {
                name: "PSP-2000 (Slim & Lite)",
                image: "fotos consoles/psp-2000.webp",
                specs: [
                    "CPU: MIPS R4000 Customizado de 32-bit @ 333 MHz",
                    "Memória RAM: 64 MB de RAM (O dobro da capacidade do Fat)",
                    "Armazenamento: Slot Memory Stick Duo com leitura acelerada",
                    "Mídia Física: Leitor UMD com carregamento mecânico otimizado",
                    "Conectividade Pro: Adicionada saída de vídeo para TV e recarga via USB"
                ]
            },
            {
                name: "PSP-3000 (Brite)",
                image: "fotos consoles/PSP-3000.png",
                specs: [
                    "CPU: MIPS R4000 de 32-bit @ 333 MHz",
                    "Memória RAM: 64 MB de RAM Principal",
                    "Tela (Hardware): LCD aprimorado com maior gama de cores, antirreflexo e contraste 5x maior",
                    "Áudio/Componentes: Microfone embutido de fábrica para Skype e jogos",
                    "Mídia: Mantém o leitor de UMD físico e slot de Memory Stick"
                ]
            },
            {
                name: "PSP Go (N1000)",
                image: "fotos consoles/PSP-go.png",
                specs: [
                    "CPU: MIPS R4000 de 32-bit @ 333 MHz",
                    "Memória RAM: 64 MB de RAM Principal",
                    "Armazenamento Nativo: 16 GB de memória Flash interna incorporada",
                    "Mídia Física: REMOVIDO o leitor UMD (Console focado 100% em downloads digitais)",
                    "Conectividade: Slot para cartões Micro Memory Stick (M2) e Bluetooth 2.0 integrado"
                ]
            },
            {
                name: "PSP-E1000 (Street)",
                image: "fotos consoles/PSP-E1000.png",
                specs: [
                    "CPU: MIPS R4000 de 32-bit @ 333 MHz",
                    "Memória RAM: 64 MB de RAM Principal",
                    "Corte de Hardware: REMOVIDA a placa de rede Wi-Fi (Jogos transferidos via PC/USB)",
                    "Áudio (Hardware): Som alterado para coluna monofónica (Apenas 1 saída de som)",
                    "Mídia Física: Possui leitor de discos UMD e slot para Memory Stick PRO Duo"
                ]
            }
        ],
        games: [
            { name: "God of War: Ghost of Sparta", image: "Fotos jogos/God_of_War_Ghost_of_Sparta_capa.png" },
            { name: "Metal Gear Solid: Peace Walker", image: "Fotos jogos/Metal-Gear-Solid-Peace-Walker.jpeg" },
            { name: "GTA: Liberty City Stories", image: "Fotos jogos/GTALibertyCityStories-Capa.png" }
        ]
    },
    ps3: {
        title: "PlayStation 3",
        tagline: "Jogue além.",
        description: "A introdução da alta definição (HD), do formato Blu-ray e da PlayStation Network, marcando uma era de narrativas complexas e jogos online.",
        buyLink: "https://www.playstation.com/",
        versions: [
            {
                name: "Modelo Original (Fat)",
                image: "fotos consoles/PS3-fat.png",
                specs: [
                    "CPU: Cell Broadband Engine @ 3.2 GHz (1 PPE + 7 SPEs)",
                    "Memória RAM: 256 MB XDR Main RAM + 256 MB GDDR3 VRAM",
                    "GPU: RSX 'Reality Synthesizer' baseada na NVIDIA @ 550 MHz",
                    "Armazenamento: HDD SATA de 20GB, 40GB, 60GB ou 80GB",
                    "Mídia Física: Leitor de Blu-ray Disc pioneiro (2x velocidade)"
                ]
            },
            {
                name: "Modelo Slim",
                image: "fotos consoles/PS3-slim.webp",
                specs: [
                    "CPU: Cell Engine redesenhado em litografia de 45nm",
                    "Memória RAM: 256 MB XDR + 256 MB GDDR3 VRAM",
                    "GPU: RSX otimizada para menor emissão de calor",
                    "Armazenamento: HDD SATA interno de 120GB, 160GB ou 320GB",
                    "Consumo: Redução de 34% no gasto de energia elétrica"
                ]
            },
            {
                name: "Modelo Super Slim",
                image: "fotos consoles/PS3-super-slim.webp",
                specs: [
                    "CPU: Cell Engine em 45nm otimizado para baixo ruído",
                    "Memória RAM: 256 MB XDR RAM + 256 MB GDDR3 VRAM",
                    "GPU: RSX de alta eficiência energética",
                    "Armazenamento: Memória Flash de 12GB ou HDDs de 250GB/500GB",
                    "Construção: Mecanismo de tampa mecânica corrediça superior"
                ]
            }
        ],
        games: [
            { name: "The Last of Us", image: "Fotos jogos/The_Last_of_Us_capa.png" },
            { name: "Uncharted 2", image: "Fotos jogos/uncharted-capa.jpeg" },
            { name: "Metal Gear Solid 4", image: "Fotos jogos/Metal-Gear-Solid-4.jpeg" }
        ]
    },
    psvita: {
        title: "PS Vita",
        tagline: "A vida em jogo.",
        description: "Um portátil com hardware poderoso, tela OLED impressionante e dois controles analógicos, oferecendo experiências de console na palma da mão.",
        buyLink: "https://www.playstation.com/",
        versions: [
            {
                name: "Modelo PCH-1000 (OLED)",
                image: "fotos consoles/PS-VITA-1000.wepb.webp",
                specs: [
                    "CPU: ARM Cortex-A9 de 4 núcleos @ até 444 MHz",
                    "Memória RAM: 512 MB de RAM Principal + 128 MB VRAM de Vídeo",
                    "GPU: PowerVR SGX543MP4+ de 4 núcleos",
                    "Tela: Painel OLED multitoque capacitivo de 5 polegadas",
                    "Armazenamento: Slot para cartões de memória PS Vita proprietários"
                ]
            },
            {
                name: "Modelo PCH-2000 (Slim)",
                image: "fotos consoles/PS-vita-2000.png",
                specs: [
                    "CPU: ARM Cortex-A9 de 4 núcleos",
                    "Memória RAM: 512 MB RAM + 128 MB VRAM",
                    "Tela: Alterada para painel LCD IPS (Cores mais realistas)",
                    "Armazenamento: 1 GB de armazenamento interno integrado",
                    "Diferencial: Conector Micro-USB padrão e bateria de maior duração"
                ]
            }
        ],
        games: [
            { name: "Persona 4 Golden", image: "Fotos jogos/persona-4-golden.jpeg" },
            { name: "Gravity Rush", image: "Fotos jogos/gravity-rush-capa.jpeg" },
            { name: "Uncharted: Golden Abyss", image: "Fotos jogos/uncharted-golden-abyss-capa.jpeg" }
        ]
    },
    ps4: {
        title: "PlayStation 4",
        tagline: "Para os jogadores.",
        description: "A consola que definiu a oitava geração, focada em facilidade de desenvolvimento, partilha social e uma biblioteca de jogos exclusivos aclamados.",
        buyLink: "https://www.playstation.com/pt-pt/ps4/",
        versions: [
            {
                name: "PS4 Fat",
                image: "fotos consoles/PS4-fat.webp",
                specs: [
                    "Design: Formato em paralelogramo angular com uma barra de luz LED central.",
                    "Acabamento: Mistura de plástico fosco com tampa do HDD em plástico brilhante (black piano).",
                    "CPU: AMD 'Jaguar' x86-64 Custom de 8 núcleos @ 1.6 GHz",
                    "GPU: AMD Radeon Customizada de 1.84 TFLOPS",
                    "Memória RAM: 8 GB GDDR5 Unificada"
                ]
            },
            {
                name: "PS4 Slim",
                image: "fotos consoles/PS4-slim.webp",
                specs: [
                    "Design: Muito menor, mais leve e com bordas arredondadas (substituiu o modelo Fat).",
                    "Acabamento: Totalmente fosco, abandonando a secção 'black piano'.",
                    "Eficiência: Consome menos energia elétrica que o modelo original.",
                    "Conectividade: Sofreu a remoção da saída de áudio ótico digital.",
                    "Hardware: Mantém a mesma potência gráfica e de processamento do modelo Fat."
                ]
            },
            {
                name: "PS4 Pro",
                image: "fotos consoles/PS4-pro.webp",
                specs: [
                    "Design: Visual em três 'camadas' (parecendo três placas empilhadas), sendo maior que o modelo Fat.",
                    "CPU: AMD 'Jaguar' de 8 núcleos com overclock para 2.1 GHz",
                    "GPU: Arquitetura melhorada com o dobro da potência (4.20 TFLOPS)",
                    "Desempenho: Projetada para rodar jogos com resolução até 4K e melhor taxa de fotogramas (FPS).",
                    "Extra: Desempenho e suporte aprimorado para o PlayStation VR."
                ]
            }
        ],
        games: [
            { name: "Red Dead Redemption 2", image: "Fotos jogos/Red_Dead_Redemption_2.png" },
            { name: "The Witcher 3: Wild Hunt", image: "Fotos jogos/the_wicher_3.jpeg" },
            { name: "Elden Ring", image: "Fotos jogos/elden-ring-capa.jpeg" }
        ]
    },
    ps5: {
        title: "PlayStation 5",
        tagline: "Jogar não tem limites.",
        description: "Tempos de carregamento ultrarrápidos, imersão tátil com o DualSense e gráficos de tirar o fôlego graças ao Ray Tracing.",
        buyLink: "https://www.playstation.com/pt-br/ps5/",
        versions: [
            {
                name: "Modelo Original (Com Disco)",
                image: "fotos consoles/PS5-com-leitor.webp",
                specs: [
                    "CPU: AMD Zen 2 Custom de 8 núcleos e 16 threads @ 3.5 GHz",
                    "Memória RAM: 16 GB GDDR6 Customizada (Banda de 448 GB/s)",
                    "GPU: Arquitetura AMD RDNA 2 com 10.28 TFLOPS e Ray Tracing",
                    "Armazenamento: SSD NVMe Customizado ultrarrápido de 825 GB",
                    "Mídia Física: Drive Ultra HD Blu-ray de até 100 GB por disco"
                ]
            },
            {
                name: "Edição Digital",
                image: "fotos consoles/PS5-sem-leitor.png",
                specs: [
                    "CPU: AMD Zen 2 Customizado de 8 núcleos @ 3.5 GHz",
                    "Memória RAM: 16 GB GDDR6 Unificada de alta velocidade",
                    "GPU: Processamento gráfico AMD RDNA 2 de 10.28 TFLOPS",
                    "Armazenamento: SSD NVMe de Alto Desempenho com 825 GB",
                    "Mídia Física: Sem leitor. Downloads digitais via PS Store"
                ]
            },
            {
                name: "PS5 Pro",
                image: "fotos consoles/PS5-pro.webp",
                specs: [
                    "CPU: AMD Zen 2 Otimizado com modo de alta frequência",
                    "Memória RAM: 16 GB GDDR6 + 2 GB DDR5 dedicados ao SO",
                    "GPU: Atualizada com 67% mais unidades de processamento (Renderização 45% mais rápida)",
                    "Armazenamento: SSD NVMe Expandido nativamente para 2 TB",
                    "Tecnologia Pro: PSSR (Upscaling por IA) e Ray Tracing Avançado"
                ]
            }
        ],
        games: [
            { name: "Ghost of Yōtei", image: "Fotos jogos/ghost-of-yotei.jpeg" },
            { name: "Demon's Souls", image: "Fotos jogos/Demons_Souls_remake_capa.png" },
            { name: "Death Stranding 2: On the Beach", image: "Fotos jogos/death-stranding-2.jpeg" }
        ]
    },
    psvr: {
        title: "PlayStation VR",
        tagline: "Sinta uma nova realidade.",
        description: "A entrada da PlayStation no mundo da realidade virtual, colocando você dentro do jogo com um campo de visão imersivo.",
        buyLink: "https://www.playstation.com/pt-br/ps-vr2/",
        versions: [
            {
                name: "PS VR (Para PS4)",
                image: "fotos consoles/PS-VR-01.webp",
                specs: [
                    "Painel: Tela OLED de 5.7 polegadas",
                    "Resolução: 1920x1080 Full HD (960x1080 por cada olho)",
                    "Taxa de Atualização: Suporta 90Hz e 120Hz com baixa latência",
                    "Campo de Visão: Aproximadamente 100 graus",
                    "Sensores: Sistema de rastreamento de 360 graus por LEDs"
                ]
            },
            {
                name: "PS VR2 (Para PS5)",
                image: "fotos consoles/PS-VR-02.webp",
                specs: [
                    "Painel: Telas OLED HDR de última geração",
                    "Resolução: Alta definição de 2000x2040 pixels por olho",
                    "Campo de Visão: Expandido para 110 graus",
                    "Recursos Avançados: Rastreamento ocular por IA e vibração no headset",
                    "Controles: Controles Sense com Feedback Tátil e Gatilhos Adaptáveis"
                ]
            }
        ],
        games: [
            { name: "Horizon Call of the Mountain", image: "Fotos jogos/horizon-call-of-the-mountain-vr.jpeg" },
            { name: "Astro Bot Rescue Mission", image: "Fotos jogos/astro-bot-rescue-mission-vr.jpeg" },
            { name: "Beat Saber", image: "Fotos jogos/beat-saber-vr.jpeg" }
        ]
    }
};

const buttons = document.querySelectorAll('.console-btn');
const displayImg = document.getElementById('display-img');
const displayTitle = document.getElementById('display-title');
const displayTagline = document.getElementById('display-tagline');
const displayDesc = document.getElementById('display-desc');
const buyLink = document.getElementById('buy-link');
const displaySpecs = document.getElementById('display-specs');
const displayGames = document.getElementById('display-games');

const versionList = document.getElementById('version-list');
const currentVersionBtn = document.getElementById('current-version-btn');

// Função para atualizar os dados gerais do Console
function updateConsole(consoleKey) {
    const data = consoleData[consoleKey];
    if (!data) return;

    // Efeito de transição de opacidade
    document.getElementById('console-display').style.opacity = 0;
    document.getElementById('console-extra').style.opacity = 0;

    setTimeout(() => {
        // Atualiza textos e link principais
        displayTitle.textContent = data.title;
        displayTagline.textContent = data.tagline;
        displayDesc.textContent = data.description;
        buyLink.href = data.buyLink;

        // Atualiza as seções extras (Modelos/Versões e Jogos)
        renderVersionDropdown(data.versions);
        renderGames(data.games);

        // Seleciona o primeiro modelo por padrão
        selectVersion(data.versions[0]);

        // Retorna a opacidade
        document.getElementById('console-display').style.opacity = 1;
        document.getElementById('console-extra').style.opacity = 1;
    }, 200);
}

// Função para preencher o Menu Dropdown de Modelos
function renderVersionDropdown(versions) {
    versionList.innerHTML = ''; // Limpa os botões anteriores

    versions.forEach(version => {
        const btn = document.createElement('button');
        btn.textContent = version.name;
        btn.onclick = () => selectVersion(version);
        versionList.appendChild(btn);
    });
}

// Função para atualizar a Imagem e Especificações baseadas no Modelo selecionado
function selectVersion(version) {
    // Atualiza a imagem com fade
    displayImg.style.opacity = 0;
    setTimeout(() => {
        displayImg.src = version.image;
        displayImg.style.opacity = 1;
    }, 150);

    // Atualiza o botão do dropdown para mostrar o nome do modelo atual
    currentVersionBtn.innerHTML = `${version.name} &#9662;`;

    // Renderiza as especificações em lista <ul>
    displaySpecs.innerHTML = '';
    version.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        displaySpecs.appendChild(li);
    });
}

// Função para renderizar o grid de Jogos de Sucesso
function renderGames(games) {
    displayGames.innerHTML = ''; // Limpa o grid

    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';

        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.name;

        const title = document.createElement('span');
        title.textContent = game.name;

        card.appendChild(img);
        card.appendChild(title);
        displayGames.appendChild(card);
    });
}

// Event listeners para os botões do menu superior (PS1, PS2, etc.)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos e adiciona no clicado
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Pega a chave do console pelo data-attribute e atualiza a tela
        const consoleKey = button.getAttribute('data-console');
        updateConsole(consoleKey);
    });
});

// Inicializa a página com o console ativo (que no seu HTML tem a classe 'active' no PS5)
window.addEventListener('DOMContentLoaded', () => {
    const activeBtn = document.querySelector('.console-btn.active');
    const startConsole = activeBtn ? activeBtn.getAttribute('data-console') : 'ps5';
    updateConsole(startConsole);
});
