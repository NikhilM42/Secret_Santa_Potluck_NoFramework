export class DishMenu {

  selector = 'dish-menu';
  styles = './DishMenu.css';

  availableDishes;

  template = document.createElement('table');

  constructor(parameters) {
    this.template.innerHTML = `<tr>
                                <th>Dishes</th>
                              </tr>
                              <tabledata></tabledata>`;
  }

  getData() {
    return ['snacks', 'drinks', 'dessert'];
  }

  generateRows() {
    let data = this.getData();
    let tableRows = '';
    data.forEach(
      (item) => {
        tableRows += `<tr>
          <td>${item}</td>
        </tr>`;
      }
    );

    let tabledata = this.template.getElementsByTagName('tabledata')[0]
    tabledata.outerHTML = tableRows;
  }

  drawMe() {
    this.generateRows();
    let root = document.createElement(this.selector);
    console.log(this.template);
    root.innerHTML = this.template;
    return root;
  }
};
