'use strict';

app.factory('Post', function($resource) {
    return $resource('https://sweltering-fire-5020.firebaseio.com/posts/:id.json')
});
