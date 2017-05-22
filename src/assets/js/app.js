import $ from 'jquery'
window.$ = window.jQuery = $
window.$.velocity = require('velocity-animate/velocity.js')

import Materialze from 'materialize-css/dist/js/materialize.js'
import { WorksWith, Features } from './append'

$(function(){
    
    let options = [
        {selector: '.take-control', offset:200, callback: (el) => {
            console.log('test')
            $('.nav-wrapper').addClass('navbar-black')
        }}
    ]
    Materialize.scrollFire(options)

    const mapIcons = (arr, path, selector) => {
        let html = ''

        arr.map(set => {

            if(!set.caption) {
                const iconString = `<img class="tooltipped" id="${set.name}" data-positon="top" data-delay='50' data-tooltip='${set.name}' src='assets/media/img/${path}/${set.file}' alt=${set.name} />`
                html += iconString
            }
            else {
                const iconString = `<img src='assets/media/img/${path}/${set.file}' alt=${set.name} />`
                html += `<div class="box">
                    <div class="feature-icon-bg">
                        ${iconString}
                    </div>
                    <div class="caption">
                        <h5>${set.name}</h5>
                        <p>${set.caption}</p>
                    </div>
                </div>`    
            }

        })

        $(selector).append(html)
    }

    mapIcons(WorksWith, 'works', '#works-with-icons')
    mapIcons(Features, 'feat', '#feats')

    $('.tooltipped').tooltip({'delay': 50})
})