// import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

const CHAT_ID = "-1002101747684";
const URL_API = `https://api.telegram.org/bot6591959002:AAGkb-b8JEmXI8xlIww82O1DPhJl34Ngmic/sendMessage`;
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = ` Заявка \n`;
  message += `Отправитель: ${this.name.value} \n`;
  message += ` Почта: ${this.email.value} \n`;
  console.log(message);
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
});
