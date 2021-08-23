const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const button = document.getElementById("color-flipper-btn");
const color = document.getElementById("hex-color-code");

button.addEventListener("click", () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += hex[getRandomNumber()];
    }
    color.innerText = hexCode;
    document.body.style.backgroundColor = hexCode;
});
const getRandomNumber = () => (Math.floor(Math.random() * hex.length));