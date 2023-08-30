export default class GrldView {
  constructor(controller) {
    this.controller = controller;
    this.requestView("./views/grld.view.html", this.renderView);
    this.form = document.querySelector("#grld_grli");
    this.form.addEventListener("click", controller);
  }

  //peticion ajax
  requestView(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState != 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = xhr.responseText;
        console.log(data);
        callback(data);
      } else {
        console.error("Error grld");
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
