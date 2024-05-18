
axios.get('http://localhost:9000/api/moto', {
    responseType: 'json'
})

    .then(function (res) {
        if (res.status == 200) {
            console.log('Respuesta de la API: ', res.data)
            dibuja(res.data)
        }
    })

    .catch(function (err) {
        console.error('Error de API: ', err)
    })

function dibuja(motos) {

    const contenedorMotos = document.getElementById('motos');

    motos.forEach(motoData => {

        let motoDiv = document.createElement('div')
        motoDiv.classList.add('moto');

        const datosMoto = `
        <h1>${motoData.model}</h1>
        <h2>${motoData.brand}</h2>
        <p onclick="ver_detalles('${motoData._id}')" id="fakeLink">Ver Detalles</p>
        <div id="${motoData._id}" class="moreData ">
            <h1>Model: ${motoData.model}</h1>
            <h2>Brand: ${motoData.brand}</h2>
            <h3>Year: ${motoData.year}</h3><br>
            <h3>Engine: ${motoData.engineType}</h3><br>
            <h3>Horse Power: ${motoData.horsepower}</h3><br>
            <h3>Torque: ${motoData.torque}</h3><br>
            <h3>Weight: ${motoData.weight}</h3><br>
            <h3>Top Speed: ${motoData.topSpeed}</h3><br>
            <h3>Color: ${motoData.color}</h3><br>
            <h3>Price: ${motoData.price}</h3><br>
            <span id="close" onclick="ver_detalles('${motoData._id}')"><i class="fa-solid fa-xmark" style="color: #ffffff;"></i></span>
        </div>
    
        `
        let fotoDiv = document.createElement('div')
        fotoDiv.classList.add('fotoMoto');

        fotoDiv.style.backgroundImage = "url('../" + Element.picture + "')"


        motoDiv.innerHTML = datosMoto;
        motoDiv.appendChild(fotoDiv);
        contenedorMotos.appendChild(motoDiv);
    })
}

function ver_detalles(moto) {
    if (moto !== null) {
        let idMoto = moto;
        console.log(idMoto);

        let detallesMoto = document.getElementById(idMoto);

        if (detallesMoto) {
            detallesMoto.style.display = detallesMoto.style.display === 'flex' ? 'none' : 'flex';
        } else {
            console.error(`Element with id ${idMoto} not found.`);
        }
    } else {
        let detallesMotoCollection = document.getElementsByClassName("moreData");

        for (let i = 0; i < detallesMotoCollection.length; i++) {
            let detallesMoto = detallesMotoCollection[i];
            detallesMoto.style.display = detallesMoto.style.display === 'flex' ? 'none' : 'flex';
        }
    }
}

// Función para manejar el evento de clic en el botón de navegación
document.querySelector('.navTrigger').addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('Clicked menu');

    var mainListDiv = document.getElementById('mainListDiv');
    mainListDiv.classList.toggle('show_list');

    if (mainListDiv.classList.contains('show_list')) {
        mainListDiv.style.display = 'block';
    } else {
        mainListDiv.style.display = 'none';
    }
});

// Función para cambiar el color de la barra de navegación al hacer scroll
const myNav = document.getElementById('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        myNav.classList.add("scrolled");
    } else {
        // Scrolling up
        myNav.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

//fondo de los contenedores