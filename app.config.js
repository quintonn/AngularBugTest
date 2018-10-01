(function ()
{
    //angular.module('ngRoute', []);
    var app = angular.module('gameFixtures', ['ngRoute']);

    //angular.element(function ()
    //{
    //    angular.bootstrap(document.getElementById('myApp'), ['gameFixtures']);
    //});
    console.log('x');
    setTimeout(function ()
    {
        console.log('script setup done');
        var div = document.getElementById('myApp');
        angular.bootstrap(div, ['gameFixtures']);
        
        console.log('script setup done');
    }, 1); // WHY SHOULD THERE BE A TIME OUT HERE?
    console.log('x');
})();