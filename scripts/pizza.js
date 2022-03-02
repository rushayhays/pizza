export const pizzaWriter = (pizzaObj) => {
    return `<div class="aPizza">
                <div>
                    <h3 class="yourPizza">Your Pizza<h3>

                    <div class="pizzaNameDisplay"><p>${pizzaObj.name}</p></div>
                </div>
                <div class="pizzaCost">
                    <h3 class="yourPizzaPrice">Price<h3>

                    <div class="pizzaPriceDisplay"><p>${pizzaObj.cost}</p></div>
                </div>
                <div class="pizzaCrust">
                    <h3 class="yourPizzaCrust">Price<h3>

                    <div class="pizzaCrustDisplay"><p>${pizzaObj.crust}</p></div>
                </div>
                <div>
                    <h3>Number of Toppings<h3>
                    <div class="pizzaToppingNumDisplay"><p>${pizzaObj.toppings.length}</p></div>
                </div>
                <div>
                    <h3>Your Toppings<h3>
                    <div class ="pizzaToppingList"><p>${pizzaObj.toppings.join(', ')}</p></div>
                </div>
             </div>`
}