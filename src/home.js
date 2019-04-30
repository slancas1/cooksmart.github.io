
window.onload = function () {
    if (localStorage.getItem("myRecipes") == null) {
        var myRecipes = new Array();
        localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
    }
    if (localStorage.getItem("myList") == null) {
        var myList = new Array();
        localStorage.setItem("myList", JSON.stringify(myList));
    }
}

window.onmousemove = function () {
    var clicks = document.getElementsByClassName('card h-100');
    for (var i = 0; i < clicks.length; i++) {
        var click = clicks[i];
        click.onclick = function () {
            var name = this.getAttribute('name');
            localStorage.setItem("storageName", name);
            window.location.href = "recipepage.html";
        }
    }
    var clicks = document.getElementsByClassName('carousel-item');
    for (var i = 0; i < clicks.length; i++) {
        var click = clicks[i];
        click.onclick = function () {
            var name = this.getAttribute('name');
            localStorage.setItem("storageName", name);
            window.location.href = "recipepage.html";
        }
    }
}