export default class GrliView {
  constructor(controller) {
    this.controller = controller;
    this.requesView("./views/grli.view.html", this.renderView);
    this.form = document.querySelector("#grli_grld");
    this.form.addEventListener("click", controller);
  }

  //peticion ajax

  requesView(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState != 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = xhr.responseText;
        callback(data);
      } else {
        console.error("Error al cargar vista GRLI");
      }
    });

    xhr.open("GET", url, false);
    xhr.send();
  }

  renderView(data) {
    const $main = document.querySelector("main");
    $main.innerHTML = data;
    console.log($main);
  }
}
