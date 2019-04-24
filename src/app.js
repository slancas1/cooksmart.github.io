/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
    'J447XF3GOT',
    '7e9319d00ee4d24a4fc6499fa50c2473'
);

const search = instantsearch({
    indexName: 'Recipes',
    searchClient,
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#searchbox',
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#calories-list',
        attribute: 'calories',
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#time-list',
        attribute: 'time',
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#price-list',
        attribute: 'price',
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#servings-list',
        attribute: 'servings',
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: "No results",
            item: `
                <img src="{{imageURL}}" align="left" height="100px" width="auto" margin-right="30px" />
                <div class="hit-name" align="left">
                    {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
                </div>
                <div class="hit-time" align="right">
                    {{time}} minutes
                </div>
            `,
        },
    })
);

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
}

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
    })
);

search.start();
