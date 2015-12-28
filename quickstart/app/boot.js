/**
 * Created by tomsonngassa on 12/27/15.
 */

(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));