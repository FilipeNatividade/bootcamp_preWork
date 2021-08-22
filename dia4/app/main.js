import "./style.css";

const url = "http://localhost:3333/cars";

const form = document.querySelector('[data-js="formCars"]');
const tableHead = document.querySelector('[data-js="tableHead"]');

form.addEventListener("submit", async (e) => {
  const inputsValue = {
    image: e.target.elements.image.value,
    brandModel: e.target.elements.brand.value,
    year: e.target.elements.year.value,
    plate: e.target.elements.plate.value,
    color: e.target.elements.color.value,
  };


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
    alert(result.message);
  }

  result.forEach((item) => {
    crateTR(item);
  });
};

const crateTR = (data) => {
  const tableRow = document.createElement("tr");

  const inputs = [
    data.image,
    data.brandModel,
    data.year,
    data.plate,
    data.color,
  ];

  inputs.forEach((item) => {
    const tableData = document.createElement("td");
    tableData.innerText = item;
    tableRow.appendChild(tableData);
    tableHead.appendChild(tableRow);
  });
};

request();
