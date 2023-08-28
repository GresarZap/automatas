import { MenuModel } from "../models/menu.model.js";
import { MenuController } from "../controllers/menu.controller.js";
import { MenuView } from "../views/menu.view.js";

function main() {
  const items = ["GRLD a GRLI", "GRLI a GRLD"];
  let model = new MenuModel(items);
  let controller = new MenuController(model);
  let view = new MenuView(controller);
}

main();
