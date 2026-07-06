const distros = [

    {
        nombre: "Debian",
        familia: "Debian",
        logo: "https://cdn.simpleicons.org/debian/A81D33",
        descripcion: "La base de gran parte del ecosistema Linux. Estable, como una roca inmóvil en medio del río.",
        dificultad: "Media"
    },

    {
        nombre: "Ubuntu",
        familia: "Debian",
        logo: "https://cdn.simpleicons.org/ubuntu/E95420",
        descripcion: "La distro más conocida para empezar. Mucha comunidad y soporte.",
        dificultad: "Fácil"
    },

    {
        nombre: "Linux Mint",
        familia: "Debian",
        logo: "https://cdn.simpleicons.org/linuxmint/87CF3E",
        descripcion: "Pensada para quienes vienen de Windows. Simple, sin complicarte demasiado",
        dificultad: "Fácil"
    },

    {
        nombre: "Pop!_OS",
        familia: "Debian",
        logo: "https://cdn.simpleicons.org/popos/48B9C7",
        descripcion: "Hecha por System76, apunta a gamers y devs sin complicarla.",
        dificultad: "Fácil"
    },

    {
        nombre: "Kali Linux",
        familia: "Debian",
        logo: "https://cdn.simpleicons.org/kalilinux/557C94",
        descripcion: "Orientada a pentesting y seguridad ofensiva. Viene cargada de herramientas de Cyberseguridad.",
        dificultad: "Media"
    },

    {
        nombre: "Arch Linux",
        familia: "Arch",
        logo: "https://cdn.simpleicons.org/archlinux/1793D1",
        descripcion: "Vos armás todo desde cero. Rolling release y documentación excelente (el Wiki).",
        dificultad: "Difícil"
    },

    {
        nombre: "Manjaro",
        familia: "Arch",
        logo: "https://cdn.simpleicons.org/manjaro/35BF5C",
        descripcion: "Todo lo de Arch pero con instalador gráfico y menos dolor de cabeza.",
        dificultad: "Media"
    },

    {
        nombre: "EndeavourOS",
        familia: "Arch",
        logo: "https://cdn.simpleicons.org/endeavouros/7239B3",
        descripcion: "Arch casi puro, con un instalador cómodo y poco preconfigurado.",
        dificultad: "Media"
    },

    {
        nombre: "CachyOS",
        familia: "Arch",
        logo: "https://cdn.simpleicons.org/cachyos/17BFA4",
        descripcion: "Basado en Arch, optimizada para rendimiento (kernel y paquetes con optimizaciones).",
        dificultad: "Media"
    },

    {
        nombre: "Garuda Linux",
        familia: "Arch",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Garuda-logo-wikipedia.svg",
        descripcion: "Basado en Arch, pensada para gaming, con Btrfs + snapshots automáticos de fábrica.",
        dificultad: "Media"
    },

    {
        nombre: "Fedora",
        familia: "Fedora",
        logo: "https://cdn.simpleicons.org/fedora/51A2DA",
        descripcion: "Software siempre actualizado, cerca de lo que después usa Red Hat.",
        dificultad: "Media"
    },

    {
        nombre: "openSUSE",
        familia: "Independiente",
        logo: "https://cdn.simpleicons.org/opensuse/73BA25",
        descripcion: "Conocida por YaST, su herramienta de configuración todo en uno.",
        dificultad: "Media"
    },

    {
        nombre: "Gentoo",
        familia: "Independiente",
        logo: "https://cdn.simpleicons.org/gentoo/54487A",
        descripcion: "Compilás casi todo desde el código fuente. Tenes el control total pero los dolores de cabeza son asegurados.",
        dificultad: "Difícil"
    },

    {
        nombre: "NixOS",
        familia: "Independiente",
        logo: "https://cdn.simpleicons.org/nixos/5277C3",
        descripcion: "Configuración declarativa del sistema entero en un solo archivo.",
        dificultad: "Difícil"
    },

    {
        nombre: "elementary OS",
        familia: "Independiente",
        logo: "https://cdn.simpleicons.org/elementary/64BAFF",
        descripcion: "Enfocada en diseño prolijo, intenta que se sienta pulida como macOS.",
        dificultad: "Fácil"
    }

];


// =======================
// Referencias del HTML
// =======================

const grilla = document.querySelector("#grilla");
const contador = document.querySelector("#contador");


// =======================
// Crea una card
// =======================

function crearCard(distro){

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img src="${distro.logo}" alt="${distro.nombre}">

        <div class="card-contenido">

            <p class="familia">${distro.familia}</p>

            <h2>${distro.nombre}</h2>

            <p class="descripcion">
                ${distro.descripcion}
            </p>

            <p class="dificultad">
                Dificultad: ${distro.dificultad}
            </p>

        </div>
    `;

    return card;

}


// =======================
// Muestra todas las cards
// =======================

function renderGrilla(lista){

    grilla.innerHTML = "";

    lista.forEach(distro => {

        const card = crearCard(distro);

        grilla.appendChild(card);

    });

    contador.textContent = lista.length + " distros encontradas";

}


// Muestra todas las distros al iniciar

renderGrilla(distros);


// =======================
// Buscar por nombre
// =======================

function buscar(lista, termino){

    return lista.filter(distro =>
        distro.nombre.toLowerCase().includes(termino.toLowerCase())
    );

}


// =======================
// Filtrar por familia
// =======================

function filtrarPorFamilia(lista, familia){

    if(familia === ""){
        return lista;
    }

    return lista.filter(distro => distro.familia === familia);

}


// =======================
// Buscar y filtrar
// =======================

function buscarYFiltrar(){

    const texto = document.querySelector("#busqueda").value;

    const familia = document.querySelector("#familia").value;

    let resultado = buscar(distros, texto);

    resultado = filtrarPorFamilia(resultado, familia);

    renderGrilla(resultado);

}


// =======================
// Eventos
// =======================

document
    .querySelector("#busqueda")
    .addEventListener("input", buscarYFiltrar);

document
    .querySelector("#familia")
    .addEventListener("change", buscarYFiltrar);
