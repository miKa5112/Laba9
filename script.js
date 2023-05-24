const form = document.getElementById('forma');

function retrieveFormValue(event) {
    event.preventDefault();
  
    const pib = form.querySelector('[name="pib"]').value;
    const home = form.querySelector('[name="home"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const email = form.querySelector('[name="email"]').value;
    const type = form.querySelector('[name="type"]').value;
    const number = form.querySelector('[name="number"]').value;

    var tbody = document.getElementById('table').getElementsByTagName("tbody")[0];
    var row = document.createElement("tr")
    var table_pib = document.createElement("td")
    table_pib.appendChild(document.createTextNode(pib))
    var table_home = document.createElement("td")
    table_home.appendChild (document.createTextNode(home))
    var table_phone = document.createElement("td")
    table_phone.appendChild(document.createTextNode(phone))
    var table_email = document.createElement("td")
    table_email.appendChild(document.createTextNode(email))
    var table_type = document.createElement("td")
    table_type.appendChild(document.createTextNode(type))
    var table_number = document.createElement("td")
    table_number.appendChild(document.createTextNode(number))
    row.appendChild(table_pib);
    row.appendChild(table_home);
    row.appendChild(table_phone);
    row.appendChild(table_email);
    row.appendChild(table_type);
    row.appendChild(table_number);
    tbody.appendChild(row);
}

form.addEventListener('submit', retrieveFormValue);