import "./style.css";

let show = true;

const app = document.querySelector('[data-js="app"]');
app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

const anchor = document.querySelector('[data-js="anchor"]');
anchor.innerHTML = 'Não mostrar APP';

anchor.addEventListener(
  "click",
  (event) => {
    event.preventDefault();

    if (show === true) {
      show = false;
      app.style.visibility = "hidden";
      anchor.innerHTML = 'Mostrar APP';
    } else {
      show = true;
      app.style.visibility = "visible";
      anchor.innerHTML = 'Não mostrar APP';
    }

  },
  false
);




