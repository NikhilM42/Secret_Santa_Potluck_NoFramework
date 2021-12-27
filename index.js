import { DishMenu } from "./Components/DishMenu/DishMenu.js";
import { DishMenuItem } from "./Components/DishMenu/DishMenuItem/DishMenuItem.js";
import { PopUp } from "./Components/PopUp/PopUp.js";

const appHead = document.getElementsByTagName('head')[0];
const mainApp = document.getElementsByTagName('body')[0];

const allComponents = [
  new DishMenu({})
]

function drawComponents() {
  allComponents.forEach(
    (component) => {
      let targetTag = mainApp.getElementsByTagName(component.selector)[0];
      let output = component.render();
      targetTag.outerHTML = output.outerHTML;
    }
  );
}

function addStyling() {
  allComponents.forEach(
    (component) => {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = component.styles;
      appHead.appendChild(link);
    }
  );
}

drawComponents();
addStyling();
