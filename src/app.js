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
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: `
        <div max-height="400px">
          <div class="hit-image">
            <img src="{{imageURL}}" align="left" max-height="100px" width="auto" alt="{{name}}" />
          </div>
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
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
