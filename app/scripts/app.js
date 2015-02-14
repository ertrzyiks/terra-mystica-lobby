(function (document) {
    'use strict';

    var app = document.querySelector('#app');
    app.appName = 'Terra Mystica lobby';

    app.addEventListener('template-bound', function() {
        console.log('Our app is ready to rock!');
    });
})(wrap(document));
