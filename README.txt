Purpose of Project:
	Design a simple webpage that represents a restaurant takeout page using DOM
manipulation. There is no server and database that is used for this project. Everything
is done on the client side. 
	

Changes to base code:
	Change #1:
	In client.js, I changed the ordering of the dishes in restaurant_A from
	"0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14" to
	"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13"

Design Strategies:

-Some general comments about the choices I made when designing
my solution. I split up my code into 3 main sections, state, functions
& events, and render. 
    Any variables that hold state are put into the state section, 
such as a variable for tax, the subtotal, an array that holds all 
of the ordered meals, etc. 
    The Functions & Events section stores functions that change
the state of the program. So if I wanted to update the subtotal
of the user, or if I wanted to add another meal to the array that
holds all ordered meals, the functions in this section would do
just that.
    The Render section contains functions that are purely meant
to change and update the HTML on the webpage. None of the functions
will update the state.
    The elements outside of these 3 sections are either the given
restaurant objects or the hardcoded html elements that were created
inside of the order.html file.

-How items are added or removed from the "cart":
    In order to add and remove items, I made an array that stores
all of the meals that the user selected and I updated this array
everytime the user decided to add or take away a meal in their
chosen restaurant. Once the array was updated, I would render the
page once more to display the changes

-In order to access the various properties of the given restaurants,
I used a combination of keys and values. I used the keys in order
to create the headers for each of the dish types. I used the values
so I could get to the actual meals inside of the menu. This allowed
me to display the menu in the center column of the screen
