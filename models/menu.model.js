class MenuModel {
  constructor(items) {
    this.items = [...items];
    this.active = true;
  }

  get getItems() {
    return this.items;
  }

  get getActive() {
    return this.status;
  }

  set setActive(estado) {
    this.status = estado;
  }
}
export { MenuModel };
