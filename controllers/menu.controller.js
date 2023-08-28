class MenuController {
  constructor(model) {
    this.model = model;
  }

  get getModelItem() {
    return this.model.getItems;
  }

  handleEvent(e) {
    // console.log("target:", e.target);
    if (e.target.matches('[class^="hamburger"]')) {
      e.preventDefault();
      console.log("click");
      this.clickHandleButton();
    }
  }

  clickHandleButton() {
    const $button = document.querySelector(".hamburger");
    const $menu = document.querySelector("menu");
    $button.classList.toggle("is-active");
    if ($button.classList.contains("is-active")) {
      this.model.setStatus = true;
      $menu.classList.add("is-active");
    } else {
      $menu.classList.remove("is-active");
      this.model.setActive = false;
    }
  }

  clickHandlerItem() {
    const $menu = document.querySelector("menu");
    $menu;
  }
}

export { MenuController };
