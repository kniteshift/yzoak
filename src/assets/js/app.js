import $ from 'jquery'
window.$ = window.jQuery = $
window.$.velocity = require('velocity-animate/velocity.js')

import Materialze from 'materialize-css/dist/js/materialize.js'
import { WorksWith, Features } from './append'
import { mapIcons, callPlayer, openContactPage, closeContactPage } from './listener'

$(function(){
    // Map the Icons to the DOM Progammatically
    mapIcons(WorksWith, 'works', '#works-with-icons')
    mapIcons(Features, 'feat', '#feats')

    // Trigger scrollfire
    let options = [
        {selector: '.take-control', offset:200, callback: (el) => {
            $('.nav-wrapper').addClass('navbar-black')
        }},
        {selector: '.features', offset: 200, callback: (el) => {
            $('.box').addClass('faded')
        }}
    ]

    // let featuresOptions = [
    //     {selector: '.features', offset: 200, callback: (el) => {
    //         $('.box').addClass('faded')
    //     }}
    // ]

    Materialize.scrollFire(options)
    // Materialize.scrollFire(featuresOptions)

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