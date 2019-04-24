
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