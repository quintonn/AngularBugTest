(function (app)
{
    'use strict';

    function BigItemController()
    {
        var self = this;
    }

    app.component('bigItem', {
        templateUrl: 'assets/bigItem/bigItem.html?v=' + guid(),
        controller: BigItemController,
        
    });

})(angular.module('gameFixtures'));

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