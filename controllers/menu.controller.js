import GRLDModel from "../models/grld.model.js";
import GRLDControler from "../controllers/grld.controller.js";
import GRLDView from "../views/grld.view.js";

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
    if (e.target.matches("menu ul li")) {
      e.preventDefault();
      console.log("click item");
      this.clickHandlerItem(e.target.innerText);
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

  clickHandlerItem(selection) {
    this.clickHandleButton();
    switch (selection) {
      case "GRLD a GRLI":
        const model = new GRLDModel();
        const controller = new GRLDControler(model);
        const view = new GRLDView(controller);
        break;

      default:
        break;
    }
  }
}

export { MenuController };
