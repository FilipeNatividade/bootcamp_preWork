const inputName = document.querySelector('[data-js="inputName"]');
const paragraph = document.querySelector('[data-js="paragraph"]');

const noCapitals = ["da", "das", "de", "do", "dos"];
const colors = [
  { name: "red", value: "#f00" },
  { name: "green", value: " #008000" },
  { name: "azul", value: " #87ceeb" },
  { name: "laranja", value: "#ffa500" },
  { name: "rosa", value: "#ff007f" },
];

paragraph.innerText = `Resultado: `;

inputName.addEventListener("input", (e) => {
  const name = e.target.value
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return noCapitals.includes(word)
        ? word.toLowerCase()
        : `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(" ");

  paragraph.innerText = `Resultado: ${name}`;
});

const containerFormSel = document.createElement("div");
containerFormSel.className = "container";

const titleForm2 = document.createElement("h2");
titleForm2.innerText = "Exercício 2";
containerFormSel.appendChild(titleForm2);

const form = document.createElement("form");
containerFormSel.appendChild(form);

const select = document.createElement("select");
select.setAttribute("multiple", "");
form.appendChild(select);

colors.forEach((color) => {
  const optionColor = document.createElement("option");
  optionColor.style.color = color.value
  optionColor.textContent = color.name;
  optionColor.value = color.value;
  select.appendChild(optionColor);
});

const subContainer = document.createElement("div");
subContainer.className = "subContainerColor";
containerFormSel.appendChild(subContainer);

select.addEventListener("change", (e) => {
  subContainer.innerHTML = ''
  Array.from(e.target.selectedOptions).forEach((option) => {
    const showColor = document.createElement("div");
    showColor.className = 'showColor'
    showColor.style.backgroundColor = option.value
    subContainer.appendChild(showColor)
  });

});

document.body.appendChild(containerFormSel);
