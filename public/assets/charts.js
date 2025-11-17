document.addEventListener("DOMContentLoaded", () => {

    if (!window.albuns || !Array.isArray(window.albuns)) {
        console.error("Dados dos álbuns não encontrados.");
        return;
    }

    const albuns = window.albuns;

    
    function gerarCores(qtd) {
        return Array.from({ length: qtd }, (_, i) =>
            `hsl(${(i * 360) / qtd}, 70%, 55%)`
        );
    }

    
    const anos = {};
    albuns.forEach(a => {
        anos[a.ano] = (anos[a.ano] || 0) + 1;
    });

    new Chart(document.getElementById("chartAlbumsByYear"), {
        type: "bar",
        data: {
            labels: Object.keys(anos),
            datasets: [{
                label: "Álbuns lançados",
                data: Object.values(anos),
                backgroundColor: gerarCores(Object.keys(anos).length)
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    
    new Chart(document.getElementById("chartPhotos"), {
        type: "bar",
        data: {
            labels: albuns.map(a => a.nome),
            datasets: [{
                label: "Quantidade de fotos",
                data: albuns.map(a => a.fotos.length),
                backgroundColor: gerarCores(albuns.length)
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    const tipos = {};
    albuns.forEach(a => {
        tipos[a.tipo] = (tipos[a.tipo] || 0) + 1;
    });

    new Chart(document.getElementById("chartPopularity"), {
        type: "pie",
        data: {
            labels: Object.keys(tipos),
            datasets: [{
                data: Object.values(tipos),
                backgroundColor: gerarCores(Object.keys(tipos).length)
            }]
        },
        options: {
            responsive: true
        }
    });

});
