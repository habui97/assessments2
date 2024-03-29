///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

let pizza = {
    name: 'Evil Empire',
    price: '23',
    category: 'entree',
    popularity: '9',
    rating: '10/10',
    tags: 'gluten-free'
}
console.log(pizza.price);

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity);


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza['tags']);


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
delete pizza.price
console.log(pizza)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/
const {rating} = 10/10;


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/
const foodArr = [
    {
        name: 'Cheese',
        category: 'entree',
        price: 20,
        popularity: '10',
        tags: ["veggie", "gluten-free"]
    },
    {
        name: 'Garlic Knots',
        category: 'appertizer',
        price: 10,
        popularity: 9,
        tags: ['Gluten-free', "veggie"]
    },
    {
        name: 'When I Dip',
        category: 'appertizer',
        price: 12,
        popularity: 8,
        tags: ['Gluten', 'non-veggie']
    },
    {
        name: 'Uncle Bob',
        category: 'entree',
        price: 23,
        popularity: 9.5,
        tags:['Gluten', 'non-veggie']
    },
    {
        name: "Farmhouse",
        category: "entree",
        price: 10,
        popularity: 8.5,
        tags: ['gluten-free','veggie']
    }
    
]




//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

// const filteredFood = foodArr.filter(elem => elem.category === 'entree')
// console.log(filteredFood);

filterFood = (array, requiredTag) => {
    let result = [] 
    array.forEach(element => {
        element.tags.forEach(tag => {
            if (tag == requiredTag)
                result.push(element)
        }); 
    }); 
    return result
}

// creating an empty array to store the result
let result = []
result = filterFood(foodArr, 'veg');
if (result.length > 0)
    console.log(result);
else
    console.log("No item found for the given tag");


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/
function filterByProperty(property, number, type) {
    let filteredArray = []; 
    for (let i = 0; i < foods.length; i++) {  
    let food = foods[i];   
    if (type === 'above') {  
    if (food[property] > number) {
    filteredArray.push(food);
    }
    } else if (type === 'below') {
    if (food[property] < number) {
    filteredArray.push(food);
    }
    }
    }
    return filteredArray;
    }
 



/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE