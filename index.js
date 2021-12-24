import { DishMenu } from "./Components/DishMenu/DishMenu.js";
import { PopUp } from "./Components/PopUp/PopUp.js";

function drawComponents() {
  const dishMenu = new DishMenu({});
  const parent = document.getElementsByTagName('body')[0];
  let dishMenuTag = parent.getElementsByTagName(dishMenu.selector)[0];
  console.log(dishMenu.drawMe());
  dishMenuTag.outerHTML = dishMenu.drawMe().outerHTML;
}

drawComponents();
