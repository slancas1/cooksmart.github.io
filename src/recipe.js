var json = require('./Recipes.json');

window.onload = function () {
    var name = localStorage.getItem("storageName")
    var recipe = data.find(function (item, i) {
        if (item.name === val) {
            index = i;
            return i;
        }
    });
    document.getElementById("title").innerHTML = "<b>" + name + "</b>";
    document.getElementById("info").innerHTML = "<b> Total Time: </b>" + json.hits. + "mins & nbsp; <b> Servings: </b>" +  + "& nbsp; <b> Calories: </b>" + ;
    document.getElementById("directions").innerHTML = ;
}