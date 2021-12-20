import './DishMenu.css';

export class DishMenu {

  private availableDishes: Array<string>;

  constructor(parameters: object) {

  }

  getData() {

  }

  drawMe(): HTMLDivElement {
    this.getData();

    let root = document.createElement('div');
    root.setAttribute('class', 'DishMenu');
    root.innerText = 'DishMenu';
    return root;
  }
};
