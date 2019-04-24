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
    instantsearch.widgets.refinementList({
        container: '#appliances-list',
        attribute: 'appliances',
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: "No results",
            item: `
                <style type="text/css">
                  #name {display:inline-block; float:left;}
                  #time {display:inline-block; float:right;}
                </style>
                <img src="{{imageURL}}" align="left" height="100px" width="100px" margin-right="30px" />
                <div class="hit-name" align="left" style="font-size:26px" id="name">
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
                </div>
                <div class="hit-time" align="right" style="font-size:26px" id="time">
                    {{time}} minutes
                </div>
            `,
        },
    })
);

window.onload = function () {
    var results = document.getElementsByClassName('ais-Hits-item');
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        result.onclick = function () {
            var name = this.getElementsByClassName("hit-name");
            alert(name[0].textContent);
        }
    }
}

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
    })
);

search.start();
