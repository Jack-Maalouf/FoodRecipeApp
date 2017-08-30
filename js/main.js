

var food = [
    {"foodName": "Chicken", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Avocado", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Pizza", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Fruit Loops", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Feces", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Robot Cereal", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Stack Overflow", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Powerschool Jokes", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Dinosaur Tits", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Potatoes", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Radishes", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Pineapples", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Toast", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"},
    {"foodName": "Great", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"}
];


function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function compareFood(Food1,Food2){
    if(Food1.foodName==Food2.foodName)
        {
            return false;
        } else {
            return true;
        }
}

function chooseFood() {
    var length = Object.keys(food).length;
    var selectedFood = [];
    var i = 0;
    
    var random = 0;
    var on = true;
    while (i < 5) {
        random = getRandom(0,length);
        //console.log(random);
        //console.log(food[random]);
        var j = 0;
        while (j<Object.keys(selectedFood).length && on)
            {
              on = compareFood(selectedFood[j],food[random]);
              j++;
            }
        if(on){
        selectedFood.push(food[random]);
        console.log(food[random].foodName);
        i++;
        } else {
        on = true;    
        }
    }
    console.log(selectedFood);
    return selectedFood;
}
