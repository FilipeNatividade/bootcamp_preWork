import "./style.css";

const url = "http://localhost:3333/cars";
const main = document.querySelector('[data-js="main"]');
const form = document.querySelector('[data-js="formCars"]');
const tableHead = document.querySelector('[data-js="tableHead"]');

const messages = (text) => {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerText = text;
  modal.style.position = "absolute";
  modal.style.zIndex = "1";
  main.appendChild(modal);
  setInterval(() => {
    main.removeChild(modal);
  }, 3000);
};

const noCars = () => {
  const tableRow = document.createElement("tr");
  const tableData = document.createElement("td");
  tableData.setAttribute("colspan", 6);
  tableData.innerText = "Não possui nenhum carro";
  tableRow.appendChild(tableData);
  tableHead.appendChild(tableRow);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputsValue = {
    image: e.target.elements.image.value,
    brandModel: e.target.elements.brand.value,
    year: e.target.elements.year.value,
    plate: e.target.elements.plate.value,
    color: e.target.elements.color.value,
  };

  post(inputsValue);

  e.target.reset();
  image.focus();
});

const request = async () => {
  const result = await fetch(url)
    .then((response) => response.json())
    .catch((err) => ({
      error: true,
      message: err.message,
    }));

  if (result.error) {
    messages(result.message);
  }

  result.length === 0
    ? noCars()
    : result.forEach((item) => {
        crateTR(item);
      });
};

const crateTR = (data) => {
  const inputs = [
    data.image,
    data.brandModel,
    data.year,
    data.plate,
    data.color,
  ];

  const handleDelete = (e) => {

    const plate = e.target.dataset.plate

    const tr = document.querySelector(
      `tr[data-plate='${plate}']`
    );

    removeItem({plate})
    tableHead.removeChild(tr);
    button.removeEventListener('click', handleDelete)
  };

  const tableRow = document.createElement("tr");
  tableRow.dataset.plate = inputs[3];

  const button = document.createElement("button");
  button.dataset.plate = inputs[3];
  button.innerText = "Excluir";
  button.addEventListener("click", handleDelete)

  inputs.forEach((item) => {
    const tableData = document.createElement("td");
    tableData.innerText = item;
    tableRow.appendChild(tableData);
    tableHead.appendChild(tableRow);
  });

  tableRow.appendChild(button);
};

const post = async (data) => {
  let result = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => ({
      error: true,
      message: error.message,
    }));

  if (result.error === true) {
    messages(result.message);
  }
};

const removeItem = async (data) => {
  let result = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => ({
      error: true,
      message: error.message,
    }));

  if (result.error === true) {
    messages(result.message);
  }
};

request();
