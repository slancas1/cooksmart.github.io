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
                <div>
                    <img src="{{imageURL}}" align="left" height="100px" width="auto"  />
                    <div class="hit-name" align="center">
                        {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
                    </div>
                    <div class="hit-time" align="center">
                        {{time}} minutes
                    </div>
                </div>
            `,
        },
    })
);

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
    })
);

search.start();
