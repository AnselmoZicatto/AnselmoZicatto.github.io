import { Router } from "./route.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("está rodando");

  const router = new Router();
  router.add("/pesqueiros/delevatti", "delevatti.html");
  router.add("/pesqueiros/geraldino", "geraldino.html");
  router.add("/pesqueiros/kielbowicz", "kielbowicz.html");
  // router.add("/pesqueiros/404", "404.html");

  router.handle();

  window.onpopstate = () => router.handle();
  window.route = () => router.route();
});

console.log("está rodando");
let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
