import "./style.css";

const url = "http://localhost:3333/cars";

const form = document.querySelector('[data-js="formCars"]');
const tableHead = document.querySelector('[data-js="tableHead"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();


  const image = e.target.elements.image;
  const brand = e.target.elements.brand;
  const year = e.target.elements.year;
  const plate = e.target.elements.plate;
  const color = e.target.elements.color;

  const inputs = [image, brand, year, plate, color];

  const tableRow = document.createElement("tr");
  inputs.forEach((item) => {
    const tableData = document.createElement("td");
    tableData.innerText = item.value;
    tableRow.appendChild(tableData);
  });

  tableHead.appendChild(tableRow);
  e.target.reset();
  image.focus();
});
