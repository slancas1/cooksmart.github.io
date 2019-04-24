
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

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
        var myRecipes = JSON.parse(localStorage.getItem("myRecipes"));
        if (myRecipes == null || myRecipes.length <= 0) {
            var node = document.createElement('div');
            node.innerHTML = "No Recipes Added";
            document.getElementById("hits").appendChild(node);
        } else {
            for (i = 0; i < myRecipes.length; i++) {
                var title = myRecipes[i];
                var index = -1;
                var setData = data.findIndex(function (item, i) {
                    if (item.name === title) {
                        index = i;
                    }
                });
                var recipe = data[index];
                var node = document.createElement('div');
                node.innerHTML = '<style type="text/css"> \
                    #name {display: inline-block; float:left;} \
                            #time {display: inline-block; float:right;} \
                        </style> \
                    <img src="' + recipe.imageURL + '" align="left" height="100px" width="100px" margin-right="30px" /> \
                    <div class="hit-name" align="left" style="font-size:26px" id="name"> \
                        &nbsp; \
                        &nbsp; \
                        &nbsp; \
                            ' + title + ' \
                        </div> \
                    <button type="submit" class="btn-danger" id="delete" name="' + title + '" syle="align:right">Delete</button>';
                document.getElementById("hits").appendChild(node);
            }
        }
    });
}

window.onmousemove = function () {
    var results = document.getElementsByClassName('ais-Hits-item');
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        result.onclick = function () {
            var name = this.getElementsByClassName("hit-name");
            localStorage.setItem("storageName", name[0].textContent);
            window.location.href = "recipepage.html";
        }
    }
    var buttons = document.getElementsByClassName('btn-danger');
    for (i = 0; i < buttons.length; i++) {
        var remove = buttons[i];
        remove.onclick = function () {
            myRecipes = JSON.parse(localStorage.getItem("myRecipes"));
            removeA(myRecipes, this.getAttribute("name"));
            localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
            location.reload();
        }
    }
}