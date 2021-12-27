import { DishMenuItem } from "./DishMenuItem/DishMenuItem.js";

export class DishMenu {

  selector = 'dish-menu';
  classes = 'dish-menu';
  styles = ['DishMenu/DishMenu.css'];

  availableDishes;

  template = document.createElement('table');

  constructor(parameters) {
    this.template.innerHTML = `<tr>
                                <th>Dishes</th>
                              </tr>
                              <tabledata></tabledata>`;
  }

  getData() {
    return ['snacks', 'drinks', 'dessert', 'random'];
  }

  generateRows() {
    let data = this.getData();
    let tableRows = '';
    data.forEach(
      (item) => {
        let button = new DishMenuItem({ item });
        tableRows += `<tr>
          <td>` + button.render().outerHTML + `</td>
        </tr>`;
      }
    );

    let tabledata = this.template.getElementsByTagName('tabledata')[0]
    tabledata.outerHTML = tableRows;
  }

  render() {
    this.generateRows();
    let root = document.createElement('div');
    root.className = this.classes;
    root.innerHTML = this.template.outerHTML;
    return root;
  }
};
