(function (document) {
    'use strict';

    var app = document.querySelector('#app');
    app.appName = 'Terra Mystica lobby';
    app.playersNum = 3;
    app.onDownloadNewVersion = function () {
        setTimeout(function () {
            window.location.reload();
        }, 400);
    };

    function waitForTemplateBound() {
        var templateBound = Q.defer();

        app.addEventListener('template-bound', function() {
            templateBound.resolve();
        });

        return templateBound.promise;
    }

    function waitForUpdateReady() {
        var updateReady = Q.defer();

        if (window.applicationCache) {
            window.applicationCache.addEventListener('updateready', function () {
                if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                    updateReady.resolve();
                } else {
                    updateReady.reject();
                }
            }, false);
        } else {
            updateReady.reject();
        }

        return updateReady.promise;
    }

    Q.all([waitForTemplateBound(), waitForUpdateReady()])
        .then(function () {
            document.querySelector('#updatePopup').toggle();
        });

})(wrap(document));
