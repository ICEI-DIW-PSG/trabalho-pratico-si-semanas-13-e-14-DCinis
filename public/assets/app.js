// Estrutura de dados dos álbuns do Nirvana
const albunsData = {
    "destaques": [1, 2, 3],
    "albuns": [
        {
            "id": 1,
            "nome": "Bleach",
            "tipo": "Estúdio",
            "ano": 1989,
            "gravadora": "Sub Pop",
            "descricao": "Primeiro álbum de estúdio do Nirvana, com um som mais cru e pesado característico do grunge inicial. Gravado com orçamento limitado mas com energia raw.",
            "faixas": 11,
            "duracao": "42:14",
            "capa": "assets/img/Nirvana-Bleach.jpeg",
            "fotos": [
                {
                    "url": "assets/img/BleachYour_Works.png",
                    "titulo": "Campanha de higienização"
                },
                {
                    "url": "assets/img/nirvana-bleach-king-diamond.jpg",
                    "titulo": "Versão original 1989"
                }
            ]
        },
        {
            "id": 2,
            "nome": "Nevermind",
            "tipo": "Estúdio",
            "ano": 1991,
            "gravadora": "DGC Records",
            "descricao": "Álbum que revolucionou a música popular e levou o grunge para o mainstream mundial. Smells Like Teen Spirit se tornou um hino geracional.",
            "faixas": 13,
            "duracao": "49:07",
            "capa": "assets/img/Nevermind.jpeg",
            "fotos": [
                {
                    "url": "assets/img/bebeoriginal.avif",
                    "titulo": "Foto original do bebê"
                },
                {
                    "url": "assets/img/Nirvananevermind-logo.svg",
                    "titulo": "Branding de Nevermind"
                }
            ]
        },
        {
            "id": 3,
            "nome": "In Utero",
            "tipo": "Estúdio",
            "ano": 1993,
            "gravadora": "DGC Records",
            "descricao": "Terceiro e último álbum de estúdio, com um som mais agressivo e experimental. Produzido por Steve Albini.",
            "faixas": 12,
            "duracao": "41:42",
            "capa": "assets/img/InUtero.jpeg",
            "fotos": [
                {
                    "url": "assets/img/Transparent_Anatomical_Manikin_(TAM).jpeg",
                    "titulo": "Manequim da capa"
                },
                {
                    "url": "assets/img/remasterinutero.jpg",
                    "titulo": "Versão remasterizada"
                }
            ]
        },
        {
            "id": 4,
            "nome": "MTV Unplugged in New York",
            "tipo": "Ao Vivo",
            "ano": 1994,
            "gravadora": "DGC Records",
            "descricao": "Performances acústicas memoráveis gravadas para o MTV Unplugged. Inclui covers de bandas como Meat Puppets e David Bowie.",
            "faixas": 14,
            "duracao": "53:50",
            "capa": "assets/img/Unplugged_new_york.jpeg",
            "fotos": [
                {
                    "url": "assets/img/unplugged kurt.webp",
                    "titulo": "Performance histórica"
                },
                {
                    "url": "assets/img/unplugged performance.jpg",
                    "titulo": "Show acústico"
                }
            ]
        },
        {
            "id": 5,
            "nome": "From the Muddy Banks of the Wishkah",
            "tipo": "Ao Vivo",
            "ano": 1996,
            "gravadora": "Geffen Records",
            "descricao": "Compilação de performances ao vivo com energia crua e intensa. Mostra a força das apresentações ao vivo da banda.",
            "faixas": 16,
            "duracao": "58:24",
            "capa": "assets/img/Nirvana-FromTheMuddyBanksOfTheWishkah.jpeg",
            "fotos": [
                {
                    "url": "assets/img/muddyvinil.jpg",
                    "titulo": "Capa do disco de vinil"
                },
                {
                    "url": "assets/img/muddyperformance.webp",
                    "titulo": "Ao vivo"
                }
            ]
        },
        {
            "id": 6,
            "nome": "Live at Reading",
            "tipo": "Ao Vivo",
            "ano": 2009,
            "gravadora": "Geffen Records",
            "descricao": "Registro do lendário show no Reading Festival em 1992. Considerado um dos melhores shows da banda.",
            "faixas": 25,
            "duracao": "1:23:48",
            "capa": "assets/img/Nirvanaliveatreading.jpeg",
            "fotos": [
                {
                    "url": "assets/img/readingprogramacao.webp",
                    "titulo": "Programação Reading Festival 1992"
                },
                {
                    "url": "assets/img/kurtreadinglive.jpg",
                    "titulo": "Show lendário"
                }
            ]
        }
    ]
};

function loadHomePage() {
    if (document.getElementById('carousel-inner')) {
        loadCarousel();
        loadAlbuns();
    }
}

function loadCarousel() {
    const carouselInner = document.getElementById('carousel-inner');
    const destaques = albunsData.destaques;
    
    carouselInner.innerHTML = '';
    
    destaques.forEach((albumId, index) => {
        const album = albunsData.albuns.find(a => a.id === albumId);
        if (album) {
            const isActive = index === 0 ? 'active' : '';
            const carouselItem = `
                <div class="carousel-item ${isActive}">
                    <img src="${album.capa}" class="d-block w-100" alt="${album.nome}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${album.nome}</h5>
                        <p>${album.descricao.substring(0, 100)}...</p>
                        <a href="detalhe.html?id=${album.id}" class="btn btn-outline-warning">Ver Detalhes</a>
                    </div>
                </div>
            `;
            carouselInner.innerHTML += carouselItem;
        }
    });
}

function loadAlbuns() {
    const albunsContainer = document.getElementById('albuns-container');
    
    albunsContainer.innerHTML = '';
    
    albunsData.albuns.forEach(album => {
        const albumCard = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card card-album text-goldenrod">
                    <img src="${album.capa}" class="card-img-top" alt="${album.nome}" style="height: 250px; object-fit: contain; background: #000;">
                    <div class="card-body">
                        <h5 class="card-title">${album.nome}</h5>
                        <p class="card-text">${album.tipo} • ${album.ano}</p>
                        <p class="card-text">${album.descricao.substring(0, 80)}...</p>
                        <a href="detalhe.html?id=${album.id}" class="btn btn-outline-warning">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        `;
        albunsContainer.innerHTML += albumCard;
    });
}

function loadAlbumDetails() {
    if (document.getElementById('album-details')) {
        const urlParams = new URLSearchParams(window.location.search);
        const albumId = parseInt(urlParams.get('id'));
        
        const album = albunsData.albuns.find(a => a.id === albumId);
        
        if (album) {
            document.getElementById('album-title').textContent = `Informações Geral - ${album.nome}`;
            
            const albumDetails = document.getElementById('album-details');
            albumDetails.innerHTML = `
                <div class="col-md-4 mb-4">
                    <img src="${album.capa}" class="album-cover w-100" alt="${album.nome}">
                </div>
                <div class="col-md-8">
                    <div class="card bg-dark text-goldenrod h-100">
                        <div class="card-body">
                            <h3 class="card-title">${album.nome}</h3>
                            <p class="card-text"><strong>Tipo:</strong> ${album.tipo}</p>
                            <p class="card-text"><strong>Ano de Lançamento:</strong> ${album.ano}</p>
                            <p class="card-text"><strong>Gravadora:</strong> ${album.gravadora}</p>
                            <p class="card-text"><strong>Número de Faixas:</strong> ${album.faixas}</p>
                            <p class="card-text"><strong>Duração:</strong> ${album.duracao}</p>
                            <p class="card-text"><strong>Descrição:</strong> ${album.descricao}</p>
                            <a href="index.html" class="btn btn-outline-warning mt-3">← Voltar para Home</a>
                        </div>
                    </div>
                </div>
            `;
            
            const albumPhotos = document.getElementById('album-photos');
            albumPhotos.innerHTML = '';
            
            album.fotos.forEach(foto => {
                const photoCol = `
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="text-center">
                            <img src="${foto.url}" class="photo-thumb w-100" alt="${foto.titulo}">
                            <p class="text-goldenrod mt-2"><strong>${foto.titulo}</strong></p>
                        </div>
                    </div>
                `;
                albumPhotos.innerHTML += photoCol;
            });
        } else {
            document.getElementById('album-details').innerHTML = `
                <div class="col-12">
                    <div class="alert alert-warning text-center">
                        <h4>Álbum não encontrado!</h4>
                        <a href="index.html" class="btn btn-outline-warning">Voltar para Home</a>
                    </div>
                </div>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadHomePage();
    loadAlbumDetails();
});