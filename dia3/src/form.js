const inputName = document.querySelector('[data-js="inputName"]');
const paragraph = document.querySelector('[data-js="paragraph"]');

const noCapitals = ["da", "das", "de", "do", "dos"];

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
