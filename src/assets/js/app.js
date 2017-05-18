import $ from 'jquery'
import 'materialize-css/bin/materialize.js'
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
            const iconString = `<img src='assets/media/img/${path}/${set.file}' alt=${set.name} />`

            if(!set.caption) {
                html += iconString
            }
            else {
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

})