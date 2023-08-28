class MenuModel {
  constructor(items) {
    this.items = [...items];
  }

  get getItems() {
    return this.items;
  }
}
