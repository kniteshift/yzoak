(function () {
      var callback = function (actionId) {
        console.log('Action ' + actionId + ' performed');

        if (actionId == 2200315) {
          ga('send', {
            hitType: 'event',
            eventCategory: 'contest',
            eventAction: 'signup',
            eventLabel: 'widget',
            eventValue: 1
          })

          console.log('This worked!')
        }
      };

      var eventHandler = function (e) {
        if(e.origin === 'https://gleam.io' && e.data && e.data.match(/GleamEntry/)) {
          callback.call(window, parseInt(e.data.match(/\d+/)[0]))
        }
      };

      if (window.attachEvent) {
        window.attachEvent('message',eventHandler);
      } else {
        window.addEventListener('message', eventHandler, false);
      }
})();