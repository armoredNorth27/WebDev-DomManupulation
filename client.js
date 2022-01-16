//Author: Alexander Nedev
//Student Number: 101195595

let restaurant_A = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			9: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			10: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			11: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			12: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			13: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

let restaurant_B = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let restaurant_C = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

const webpageTabTitle = document.getElementById('webpageTabTitle');

const outsideContainer = document.getElementById('outside');

const leftColumn = document.getElementById('leftCol');

const centerColumn = document.getElementById('centerCol');

const rightColumn = document.getElementById('rightCol');

const orderInformation = document.getElementById('orderInformation');

const selectedMeals = document.getElementById('selectedMeal');

const restaurantSelect = document.getElementById('chooseRestaurant');

const dishTypeLinks = document.getElementById('dishTypeLinks');

//=====STATE=====//
let restaurants = [restaurant_A, restaurant_B, restaurant_C];

let subtotalCounter = 0;

let TAX = 0.10;

let totalCounter = 0;

let amountToMinCounter = 0;

let mealsOrdered = [];

let chosenRestaurant;

//=====FUNCTIONS & EVENTS=====//

/**
 * Adds a meal to the array that keeps track
 * of the amount of meals that have been
 * ordered before calling the necessary functions
 * to render the change onto the webpage
 * @param itemName: Name of the meal the user wants to buy
 * @param itemPrice: Price of the meal the user wants to buy
 */
function addItem(itemName, itemPrice){
	subtotalCounter += itemPrice;
	totalCounter = (subtotalCounter * (TAX+1));
	let mealAdded = false;

	//* Adds the selected meal to an array
	//If the array has no meals added, then add the selected meal
	if(mealsOrdered.length == 0){
		itemName = {
			name: itemName,
			price: itemPrice,
			totalAmountOrdered: 1
		}

		mealsOrdered.push(itemName);
	}

	/*
	If the array already has meals inside of it, check if any of
	those meals are the same as the one we want to add. If they
	are, then increase their order count by 1. If not, then add
	in the new meal
	*/
	else{
		//Looks through all meals already added inside the mealsOrdered array
		for(let i=0; i<mealsOrdered.length; i++){
			if(mealsOrdered[i].name == itemName){
				mealsOrdered[i].totalAmountOrdered += 1;
				mealAdded = true;
				break;
			}
		}

		//Adds in the new meal if it's not found in the mealsOrdered array
		if(mealAdded == false){
			itemName = {
				name: itemName,
				price: itemPrice,
				totalAmountOrdered: 1
			}
			
			mealsOrdered.push(itemName);
		}
	}

	render();
	displayOrderedMeals(mealsOrdered);
}

/**
 * Removes an item from the array that keeps
 * track of the amount of meals that have been
 * ordered before calling the necessary functions
 * to render the change onto the webpage
 * @param itemPrice: Price of the item that the user want to remove
 * @param index: Holds the meal that the user wants to remove
 */
function removeItem(itemPrice, index){
	let tempMealsOrdered = [];
	let tempMealsOrderedSize = 0;

	//Adjust the subtotal and total price
	subtotalCounter -= itemPrice;
	totalCounter = (subtotalCounter * (TAX+1));

	//Decrease the order number of the selected meal
	mealsOrdered[index].totalAmountOrdered -= 1;

	/*
	Checks to see if any of the selected meals have an
	order amount of 0. If they do, then remove them
	from the array that holds all ordered meals
	*/
	for(let i=0; i<mealsOrdered.length; i++){
		if(mealsOrdered[i].totalAmountOrdered != 0){
			tempMealsOrdered[tempMealsOrderedSize] = mealsOrdered[i];
			tempMealsOrderedSize++;
		}
	}
	mealsOrdered = tempMealsOrdered;

	render();
	displayOrderedMeals(mealsOrdered);
}

/**
 * Adjusts the minimum amount of money the user
 * needs to be paying before they can submit their
 * order
 * @param fixedMinAmount: Represents the minimum 
 * 							  order amount of the selected restaurant
 * @param subtotalCounter: Keeps track of the user's subtotal
 */
function adjustMinAmount(fixedMinAmount, subtotalCounter){

	//Adjusts the amount of money that's left until an
	//order can be places
	amountToMinCounter = fixedMinAmount - subtotalCounter;

	//Doesn't allow the minimum order amount to get smaller than 0
	if(amountToMinCounter < 0){
		amountToMinCounter = 0;
	}
}

/**
 * Resets any counters that are used to calculate
 * values such as subtotal and total
 */
function resetCounters(){

	for(rest of restaurantSelect){
		if(rest.selected){
			restaurantMinOrder = restaurants[rest.id].min_order;
		}
	}

	subtotalCounter = 0;
	totalCounter = 0;
	amountToMinCounter = restaurantMinOrder;
	mealsOrdered = [];
}

//=====RENDER=====//

//Draws the restaurant elements onto the webpage
function render(){
	cleanHTML();

	//Load up the menu of the currently selected restaurant
	for(rest of restaurantSelect){
		//If the restaurant the for loop is looking at is selected,
		//the load up its contents
		if(rest.selected){
			chosenRestaurant = rest;
			createMiscElements(restaurants[rest.id]);
			adjustMinAmount(restaurants[rest.id].min_order, subtotalCounter);

			//* Get the keys of the menu object for headers
			let arrayKeys = Object.keys(restaurants[rest.id].menu);
			
			//* Get the values of the menu object for menu contents
			let arrayValues = Object.values(restaurants[rest.id].menu);

			//* keeps track of the meal object that we're trying to display
			let mealCounter = 0;

			//* This for loop creates the menu in the center of the screen
			for(let i=0; i<arrayKeys.length; i++){

				// Creates the dish type header
				const dishTypeHeader = document.createElement('h2');
				dishTypeHeader.innerText = arrayKeys[i];
				dishTypeHeader.id = arrayKeys[i];
				dishTypeHeader.className = 'dishTypeHeader';
				centerColumn.appendChild(dishTypeHeader);

				// Create link to the dish type headers
				const headerLink = document.createElement('a');
				headerLink.className = 'link';
				headerLink.innerText = arrayKeys[i];
				headerLink.href = `#${arrayKeys[i]}`;
				dishTypeLinks.append(headerLink);

				// Serves the function of a line break node(br)
				const newLine = document.createElement('br');
				dishTypeLinks.append(newLine);

				// array that stores the index of the meal objects as elements
				let arrayValuesLength = Object.keys(arrayValues[i]);

				// Inner loop creates the meals for the dish type
				for(let j=0; j<arrayValuesLength.length; j++){
					
					//* Creates the add button for each meal
					const addButton = document.createElement('img');
					addButton.className = "addButton";
					addButton.src = './add.png';
					addButton.oName = `${arrayValues[i][mealCounter].name}`;
					addButton.price = arrayValues[i][mealCounter].price;
					addButton.addEventListener('click', function(event){
						addItem(addButton.oName, addButton.price);
					});
					
					//* Creates and adds the meal
					const mealName = document.createElement('label');
					mealName.className = 'meal';
					mealName.innerText = `${arrayValues[i][mealCounter].name} ($${arrayValues[i][mealCounter].price.toFixed(2)})
										  ${arrayValues[i][mealCounter].description}`;

					const secondNewLine = document.createElement('br');
					
					//Div that holds the meal and its add button together
					const mealHolder = document.createElement('div');
					mealHolder.className = 'mealHolder';
					mealHolder.append(addButton, mealName)

					centerColumn.append(mealHolder, secondNewLine);
					mealCounter++;
				}
			}

			//Add in the information in the right column
			const deliveryFee = document.createElement('p');
			deliveryFee.innerText = `Delivery Fee: $${restaurants[rest.id].delivery_charge.toFixed(2)}`;
			
			const subtotal = document.createElement('p');
			subtotal.innerText = `Subtotal: $${subtotalCounter.toFixed(2)}`;
		
			const taxAmount = document.createElement('p');
			taxAmount.innerText = `Tax(10%): $${(TAX * subtotalCounter).toFixed(2)}`;
		
			const total = document.createElement('p');
			total.innerText = `Total: $${(totalCounter + restaurants[rest.id].delivery_charge).toFixed(2)}`;
		
			const amountToMin = document.createElement('p');
			amountToMin.innerText = `You must add $${amountToMinCounter.toFixed(2)} more to your order before submitting`;
			
			orderInformation.append(deliveryFee, subtotal, taxAmount, total, amountToMin);
		}
	}

}
						
//Cleans certain HTML elements
function cleanHTML(){
	outsideContainer.innerHTML = ''; //Clean the title div
	centerColumn.innerHTML = '';     //Clean center column
	orderInformation.innerHTML = '';       //Clean the column that holds the restaurant specifications
	selectedMeals.innerHTML = '';   //Clean the column that holds all ordered meals
	dishTypeLinks.innerHTML = '';   //Cleans the div that holds all links
}

/**
 * Creates the restaurant title, minimum order amount,
 * and the delivery fee of the elected restaurant
 * @param chosenRestaurant: One of the restaurants chosen in the
 * restaurants array
 */
function createMiscElements(chosenRestaurant){
	//Restaurant title shown on the webpage tab
	webpageTabTitle.innerHTML = chosenRestaurant.name;

	//Restaurant title shown inside the webpage
	const restauarantTitle = document.createElement('h1');
	restauarantTitle.innerText = chosenRestaurant.name;
	outsideContainer.appendChild(restauarantTitle);
	
	//Min order
	const restaurantMinOrder = document.createElement('p');
	restaurantMinOrder.innerText = `Minimum order amount: $${chosenRestaurant.min_order.toFixed(2)}`;
	outsideContainer.appendChild(restaurantMinOrder);
	
	//Delivery free
	const deliveryFeeOutside = document.createElement('p');
	deliveryFeeOutside.innerText = `Delivery Fee: $${chosenRestaurant.delivery_charge.toFixed(2)}`;
	outsideContainer.appendChild(deliveryFeeOutside);
}

/**
 * Creates the html elements that will display all of
 * the selected meal items in the right column of the
 * web page
 * @param mealsArray: The array that holds all ordered meals
 */
function displayOrderedMeals(mealsArray){
	
	for(let i=0; i<mealsOrdered.length; i++){
		
		//* Creates the remove button
		const removeButton = document.createElement('img');
		removeButton.className = 'removeButton';
		removeButton.src = './remove.png';
		removeButton.objName = mealsArray[i].name;
		removeButton.price = mealsArray[i].price;
		removeButton.addEventListener('click', function(event){
			removeItem(removeButton.price, i);
		});
		
		//* Creates the chosen meal on the right column
		const chosenMeal = document.createElement('label');
		let totalChosenMealPrice = (mealsArray[i].totalAmountOrdered * mealsArray[i].price);
		chosenMeal.innerText = `${mealsArray[i].name} x ${mealsArray[i].totalAmountOrdered} ($${totalChosenMealPrice.toFixed(2)})`;
		
		//* Div that holds the removeButton with its corresponding chosen meal
		const chosenMealHolder = document.createElement('div');
		chosenMealHolder.className = 'mealHolder';
		chosenMealHolder.append(removeButton, chosenMeal);

		const lineBreak = document.createElement('br');
		selectedMeals.append(chosenMealHolder, lineBreak);

	}

	//* Creates the submit button to submit order
	const submitButton = document.createElement('button');
	submitButton.innerText = 'Submit Order';
	submitButton.id = 'submitButton';
	submitButton.addEventListener('click', function(event){
		alert('Order placed!');
		cleanHTML();
		resetCounters();
		render();
	});
	const secondLineBreak = document.createElement('br');

	//* Only shows the submit button if there are meals that
	//* have been ordered
	if(mealsArray.length != 0){
		selectedMeals.append(submitButton);
	}

	//Enables or disables the button depending on if the
	//minimum order amount is met or not
	if(amountToMinCounter == 0){
		submitButton.disabled = false;
	}
	else{
		submitButton.disabled = true;
	}

}

/*
Creates the restaurant options that are going 
to be put inside of the select box
*/
function createSelectBoxOptions(){
	/*
	*Used to tell which option in the select box corresponds
	*to which element in the restaurant array
	*/
	let counter = 0;
	
	//Load up items inside of the restaurant selector
	for(rest of restaurants){
		const {name} = rest;
		
		//Creates the restaurant options and their name
		const newRest = document.createElement('option');
		const restText = document.createTextNode(name);
		
		//Set the restaurant name and id
		newRest.appendChild(restText);
		newRest.id = counter;
		newRest.className = 'restaurantOptions';
		counter++;
		
		restaurantSelect.appendChild(newRest);
	}
}

/*
Responsible for loading the javascript file when
order.html is opened
*/
function onLoad(){
	console.log("loaded");
	createSelectBoxOptions();
	render();
	restaurantSelect.addEventListener('change', function(event){
		
		
		//* If no order is placed, then you can switch
		//* between restaurants without any checks
		if(mealsOrdered.length == 0){
			render();
		}
		
		//* If a restaurant is selected, ask the user to
		//* confirm the switch to the next restaurant
		else{
			let confirmation = confirm("Are you sure you want to switch restaurants?");
			if(confirmation == true){
				cleanHTML();
				resetCounters();
				render();
			}
			else{
				restaurantSelect.selectedIndex = chosenRestaurant.id;
			}
		}
	});
}