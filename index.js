import { DishMenu } from "./components/DishMenu/DishMenu";
import { PopUp } from "./components/PopUp/PopUp";

function drawComponents() {
  const dishMenu = new DishMenu({});
  const target = document.getElementsByTagName('body')[0];
  target.innerHTML = dishMenu.drawMe().outerHTML;
}

drawComponents();
