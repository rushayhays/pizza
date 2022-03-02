import { getPizza } from "./pizzaData.js";
import { pizzaWriter } from "./pizza.js";

export const pizzaLister = () => {
    const pizzaList = getPizza();
    let contentElement = document.querySelector(".pizzaDisplayCase");
    let pizzaHTML= "";
    pizzaHTML += pizzaWriter(pizzaList[1]);
    contentElement.innerHTML += `${pizzaHTML}`;

}