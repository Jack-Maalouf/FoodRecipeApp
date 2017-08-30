

var food = [
    {"foodName": "Lasagna", "url": "http://allrecipes.com/recipe/23600/worlds-best-lasagna/?internalSource=streams&referringId=17562&referringContentType=recipe%20hub&clickId=st_recipes_mades"},
    {"foodName": "Slow Cooker Chicken Barbecue", "url": "http://allrecipes.com/recipe/65896/zesty-slow-cooker-chicken-barbecue/?internalSource=streams&referringId=17562&referringContentType=recipe%20hub&clickId=st_recipes_mades"},
    {"foodName": "Parmesan Chicken Bake", "url": "http://allrecipes.com/recipe/219164/the-best-parmesan-chicken-bake/?internalSource=streams&referringId=17562&referringContentType=recipe%20hub&clickId=st_recipes_mades"},
    {"foodName": "Eggplant Parmesan", "url": "http://allrecipes.com/recipe/25321/eggplant-parmesan-ii/?internalSource=streams&referringId=17562&referringContentType=recipe%20hub&clickId=st_recipes_mades"},
    {"foodName": "Sweet Hot Mustard Chicken Thighs", "url": "http://allrecipes.com/video/3565/sweet-hot-mustard-chicken-thighs/?internalSource=videocard&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Pork Marsala", "url": "http://allrecipes.com/recipe/140829/pork-marsala/?internalSource=staff%20pick&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Fry Bread Tacos", "url": "http://allrecipes.com/recipe/50435/fry-bread-tacos-ii/?internalSource=staff%20pick&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Lemon Rosemary Salmon", "url": "http://allrecipes.com/recipe/80388/lemon-rosemary-salmon/?internalSource=staff%20pick&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Tomato Shrimp Pasta", "url": "http://allrecipes.com/recipe/87648/fresh-tomato-shrimp-pasta/?internalSource=staff%20pick&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Brown Sugar Meatloaf", "url": "http://allrecipes.com/recipe/25203/brown-sugar-meatloaf/?internalSource=hub%20recipe&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Sloppy Joes", "url": "http://allrecipes.com/recipe/24264/sloppy-joes-ii/?internalSource=hub%20recipe&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Chicken Cordon Bleu II", "url": "http://allrecipes.com/recipe/8669/chicken-cordon-bleu-ii/?internalSource=hub%20recipe&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Baked Pork Chops", "url": "http://allrecipes.com/recipe/16348/baked-pork-chops-i/?internalSource=hub%20recipe&referringId=17562&referringContentType=recipe%20hub"},
    {"foodName": "Banana Bread", "url": "http://www.simplyrecipes.com/recipes/banana_bread/"}
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
