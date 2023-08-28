class MenuView {
  constructor(controller) {
    this.controller = controller;
    this.requestView("./views/menu.html", this.renderView);
    this.list = document.querySelector("menu>ul");
    console.log(this.list);
    this.renderList();
    this.menu = document.querySelector("menu");
    this.menu.addEventListener("click", controller);
  }

  renderList() {
    const $fragment = document.createDocumentFragment();

    const items = this.controller.getModelItem;

    items.forEach((item) => {
      let $item = document.createElement("li");
      $item.innerText = item;
      $fragment.appendChild($item);
    });

    this.list.appendChild($fragment);
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
        console.error("error menu");
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

export { MenuView };
