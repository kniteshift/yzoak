import $ from 'jquery'
window.$ = window.jQuery = $
window.$.velocity = require('velocity-animate/velocity.js')

import Materialze from 'materialize-css/dist/js/materialize.js'
import { WorksWith, Features } from './append'
import { mapIcons, callPlayer } from './listener'

$(function(){

    // Trigger scrollfire
    let scrollOptions = [
        {selector: '.take-control', offset:200, callback: (el) => {
            console.log('test')
            $('.nav-wrapper').addClass('navbar-black')
        }}
    ]
    Materialize.scrollFire(scrollOptions)

    // Map the Icons to the DOM Progammatically
    mapIcons(WorksWith, 'works', '#works-with-icons')
    mapIcons(Features, 'feat', '#feats')

    // Init ToolTip
    $('.tooltipped').tooltip({'delay': 50})

    let modalOptions = {
        dismissible: true,
        opacity: .5,
        inDuration: 300,
        outDuration: 200,
        complete: () => {
                var $this = $(this).find('iframe'),
                tempSrc = $this.attr('src');
                $this.attr('src', "");
                $this.attr('src', tempSrc);
        }
    }

    $('.modal').modal(modalOptions)
        
     
})