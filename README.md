# Development

### Link to Deployed Website
If you used the stencil code, this is `https://tiredaxolotl521.github.io/development/`

### Goal and Value of the Application
The goal of the application is to allow users to sort through lego products and add lego products to their cart. Users can browse through an assorted variety of lego products and pick one based on their desired interests. The value of the application is to have an easy  on-stop-shop interface for users to filter through lego products. 

### Usability Principles Considered
I implemented various sort and filter options that proves to be most beneficial to the users. I chose sorting based on: `Rating, Price #Minifigures, #Pieces, Age and Name`. I also had options for users to filter by model type as well as availability and whether or not the model was `exclusive, hard to fine or easy to find`. For general users, this website allows people to easily sort through a lego database to find exactly what they want and determine if it is available to buy now. For the more serious lego buyers, they are able to find specific information about each set like the number of minifigures or the total number of pieces to determine if the set is worth their money. All of these details can be filtered by the user. Once the user is ready to buy their legos, multiple sets can be added to the cart to then checkout. Cart items can be increased or decreased as well for any last minute changes. Users read the website from left to right, then top to bottom where all the filters are on the right, the items places in the middle and finally the checkout cart on the way right. Thus, the user can view all the major components at once. 

### Organization of Components
There are two components in this React app (`LegoItem` and `CartItem`)

`LegoItem` represents the component for every lego set card displayed on the page. The LegoItem card displays data like the name of each set, number of minifigures, number of pieces, age, availability, type of set and type of model. In each card, there is also an add to cart button that adds each individual item to the cart for checkout.

`CartItem` represents the component for each type of lego set that is added to the cart. A CartItem is only displayed when the user clicks the `add to cart` button in the lego card and is added to the cart. This component contains data like the name of the item, the price of the item, an image of the item, the counts for the number of items in the cart and two buttons to add or remove more of the same item into the cart.

### How Data is Passed Down Through Components
I have one `JSON` file that contains data on all the lego attributes. This fill includes information about each of the 26 lego items. Each item includes data on the `name, rating, price, pieces, age, #minifigures, model_type availability, type, and an image link`. This information is passed in to the LegoItem component so that it can be displayed. This data is also passed into the sort and filter functions so that the program knows which fields it can sort/filter on. 

The data also flows into the `CartItem` component and receives all the information from the `JSON` file. Price data and name data are also passed into the functions that add and remove items from the cart. 

### How the User Triggers State Changes

### Sorting
I used 2 sorting states called sortBy and sortLego to get sorting functionality to work. The sortLego constant holds all the newly sorted lego cards depending on which type of sorting the user selects. This constant is updated by the filterChanger function where all the cards on the page are sorted with the .sort function. Sorting is either acceding, descending or alphabetical depending on which sorting option the user selects. If the user selects price or age, the sorting occurs acceding. If the user selects rating, pieces or minifigures, the sorting occurs descending. Finally if they sort by name, sorting occurs alphabetically. The sortBy constant represents the category which the program is sorting by.

### Filters
For each type of filter, there are states associated with each filter. In my program, I have 3 different dictionaries that sort by model type, set type and available. Each of these 3 dictionaries have their own independent filters. When the user choses a filter states, the program is called to update the states of the checked filters. This triggers the Lego cards to be displayed that correlate with the filters that the user checked. At the beginning of the program, all filters are initially checked. The user then unselects filters to chose specific types.

### Cart and Total
There is a constant that represents a tuple that holds both a dictionary and a total price called cart. The  dictionary to holds the state of the cart with information on the type of items and how many of each item are included in the cart. Once the user selects an item they want, they can add it to the cart. This functionality is a result of the updateCart function that updates the number of items in the cart to include the item name and its count. The cart is also updated if the user clicks on the plus or minus buttons. 

In parallel, the total price in the cart in increased when a user adds an additional item to the cart. When the user clicks the "Add to cart" button, the total price of the cart is similarly updated by the updateCart function. This functionality also extends to the plus and minus buttons with the addItem and removeItem function. The total is updated as a result and keeps track of the aggregate cost.
