(function ()
{
    var scripts = [];
    scripts.push('app.route.js');
    scripts.push('assets/testItem/testItem.js');
    scripts.push('assets/bigItem/bigItem.js');
    
    console.log('gettings scripts');

    addDynamicScript("scripts/angular.1.7.2.min.js?v=" + guid(), "js").then(function ()
    {
        console.log('got angular');
        var app = angular.module('gameFixtures', ['ngRoute']);
        
        return addDynamicScript("scripts/angular-route.1.7.2.min.js?v=" + guid(), "js")
    })
        .then(function ()
        {
            console.log('got angular route');

            var promises = [];

            for (var i = 0; i < scripts.length; i++)
            {
                var promise = addDynamicScript(scripts[i] + "?v=" + guid(), "js");
                promises.push(promise);
            }
            
            return Promise.all(promises).then(function ()
            {
                console.log('all scripts added');
                //angular.element(function ()
                //{
                //    angular.bootstrap(document.getElementById('myApp'), ['gameFixtures']);
                //});
                console.log('timeout');
                setTimeout(function ()
                {
                    console.log('script setup done, before bootstrap');
                    var div = document.getElementById('myApp');
                    angular.bootstrap(div, ['gameFixtures'], { strictDi: true, debugInfoEnabled: true });

                    console.log('script setup done, after bootstrap');
                }, 1); // WHY SHOULD THERE BE A TIME OUT HERE?
                console.log('end');
            });
        });
})();

function addDynamicScript(url, type)
{
    var script = null;

    if (type == "js")
    {
        script = document.createElement('script');
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", url);
    }
    else if (type == "css")
    {
        script = document.createElement("link");
        script.setAttribute("rel", "stylesheet");
        script.setAttribute("type", "text/css");
        script.setAttribute("href", url);

    }
    else
    {
        console.error('unknown script type: ' + type);
    }

    if (script != null && typeof script != "undefined")
    {
        return new Promise(function (res, rej)
        {
            script.setAttribute('id', url);
            script.onload = function (e)
            {
                console.log('script loaded: ' + e.target.id, 0);
                res();
            }
            script.onerror = function (e)
            {
                console.error('script ' + e.target.id + ' was unable to load');
                res();
            }

            document.getElementsByTagName("head")[0].appendChild(script);
        });
    }
    else
    {
        return Promise.resolve();
    }
}

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