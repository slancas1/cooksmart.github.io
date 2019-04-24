
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
    var cards = document.getElementsByClassName('card h-100');
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.onclick = function () {
            var name = this.getAttribute('name');
            localStorage.setItem("storageName", name);
            window.location.href = "recipepage.html";
        }
    }
    var add = document.getElementById('addToRecipes');
    add.onclick = function () {
        myRecipes = JSON.parse(localStorage.getItem("myRecipes"));
        if (myRecipes.indexOf(localStorage.getItem("storageName").trim()) == -1) {
            myRecipes.push(localStorage.getItem("storageName").trim());
            localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
        }
        $("#topdiv").append("<div class='alert alert-success alert-fade' id='myAlert3' style='width:50%;'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> <strong>Success!</strong> Recipe added to list.</div>");

    }
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
