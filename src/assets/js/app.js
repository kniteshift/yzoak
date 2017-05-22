import $ from 'jquery'
window.$ = window.jQuery = $
window.$.velocity = require('velocity-animate/velocity.js')

import Materialze from 'materialize-css/dist/js/materialize.js'
import { WorksWith, Features } from './append'
import { mapIcons } from './listener'

$(function(){

    let options = [
        {selector: '.take-control', offset:200, callback: (el) => {
            console.log('test')
            $('.nav-wrapper').addClass('navbar-black')
        }}
    ]
    Materialize.scrollFire(options)

    mapIcons(WorksWith, 'works', '#works-with-icons')
    mapIcons(Features, 'feat', '#feats')

    $('.tooltipped').tooltip({'delay': 50})
})