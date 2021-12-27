
export class DishMenuItem {

  classes = 'Dish-Menu-Item';
  template = document.createElement('button');
  styles = 'DishMenuItem/DishMenuItem.css';

  constructor(parameters) {
    this.template.innerHTML = parameters.item;
    this.template.className = this.classes
  }

  render() {
    return this.template;
  }
}