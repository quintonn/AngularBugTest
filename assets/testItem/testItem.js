(function (app)
{
    'use strict';

    function TestItemController()
    {
        var self = this;

        console.log('test item');
    }

    app.component('testItem', {
        templateUrl: 'assets/testItem/testItem.html?v=' + guid(),
        controller: TestItemController,
        
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