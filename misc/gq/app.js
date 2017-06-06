
    var cta = document.getElementById('cta')

    cta.addEventListener('click', function() {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contest',
            eventAction: 'entry',
            eventLabel: 'GQ',
            eventValue: 1
        })
    })
