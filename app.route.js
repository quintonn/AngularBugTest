(function (app)
{
    'use strict';

    console.log('11');

    app.config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider)
    {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            '**']);

        $routeProvider.when("/",
            {
                templateUrl: function ()
                {
                    return "assets/home.html?v=" + guid();
                }
            });
    }]);

})(angular.module('gameFixtures', ['ngRoute']));

function guid()
{
    function s4()
    {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}