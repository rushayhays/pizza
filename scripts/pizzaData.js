const pizzaObjArray = [
	{
		name: "Meat Lovers",
		cost: 15,
		crust: "pan",
		toppings: ["hamburger", "pepperoni", "sausage", "bacon", "cheese"]
	},
	{
		name: "Bacon Artichoke",
		cost: 18,
		crust: "thin",
		toppings: ["bacon", "artichoke", "feta cheese"]
	},
	{
		name: "Veggie Delight",
		cost: 12,
		crust: "original",
		toppings: ["black olives", "peppers", "onions", "tomato"]
	}
]

export const getPizza = () => {
    return pizzaObjArray;
}