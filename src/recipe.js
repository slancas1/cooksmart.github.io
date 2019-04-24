
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './Recipes.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

window.onload = function () {
    loadJSON(function (response) {
        var data = JSON.parse(response);
        var title = localStorage.getItem("storageName").trim();
        var index = -1;
        var setData = data.findIndex(function (item, i) {
            if (item.name === title) {
                index = i;
            }
        });
        var recipe = data[index];
        document.getElementById("image").src = recipe.imageURL;
        document.getElementById("title").innerHTML = "<b>" + title + "</b>";
        document.getElementById("info").innerHTML = "<b> Total Time: </b>" + recipe.time + " mins <b> Servings: </b>" + recipe.servings + "<b> Calories: </b>" + recipe.calories;
        for (i = 0; i < recipe.appliances.length; i++) {
            var node = document.createElement('div');
            node.innerHTML = '<input type="checkbox" name="appliances"/>  ' + recipe.appliances[i] + "<br/>";
            document.getElementById("appliances").appendChild(node);
        }
        for (i = 0; i < recipe.ingredients.length; i++) {
            var node = document.createElement('div');
            node.innerHTML = '<input type="checkbox" name="ingredients"/>  ' + recipe.ingredients[i].quantity + " " + recipe.ingredients[i].name + "<br/>";
            document.getElementById("ingredients").appendChild(node);
        }
        var directions = '';
        for (i = 0; i < recipe.steps.length; i++) {
            directions += (i+1).toString() + ") " + recipe.steps[i] + '<br/>';
        }
        document.getElementById("directions").innerHTML = directions;
    });
}