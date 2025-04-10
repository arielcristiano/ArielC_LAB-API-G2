const userList = document.getElementById('user-list');

 async function obtenerUsuarios() {

     const response = await fetch('https://reqres.in/api/users?page=1');

     const data = await response.json();

     renderizarUsuarios(data.data);
 }

function renderizarUsuarios(usuarios) {

    userList.innerHTML = ''; // Limpiar la lista antes de renderizar

    usuarios.forEach(usuario => {

        const listItem = document.createElement('li');

        listItem.innerHTML = `

            <img src="${usuario.avatar}" alt="${usuario.first_name} ${usuario.last_name}">

            <strong>${usuario.first_name} ${usuario.last_name}</strong> - ${usuario.email}

        `;

        userList.appendChild(listItem);

    });

}
function filtrarUsuarios() {

    const input = document.getElementById('search').value.toLowerCase();

    const items = userList.getElementsByTagName('li');


    Array.from(items).forEach(item => {

        const nombreCompleto = item.textContent.toLowerCase();

        item.style.display = nombreCompleto.includes(input) ? '' : 'none';

    });

}


function filtrarMails() {

    const input = document.getElementById('search1').value.toLowerCase();

    const items = userList.getElementsByTagName('li');


     // Convertir HTMLCollection a un array y usar map

     Array.from(items).map(item => {

        const nombreCompleto = item.textContent.toLowerCase();

        item.style.display = nombreCompleto.includes(input) ? '' : 'none';

        return item; // Retornar el item, aunque no es necesario en este caso

    });

}
// Llamar a la función para obtener usuarios al cargar la página
// Vincular el evento de clic al botón

document.getElementById('button').addEventListener('click', obtenerUsuarios);
