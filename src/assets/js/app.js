import $ from 'jquery'
import Materialize from 'materialize-css/js/materialize.js'

$(function(){

    let options = [
        {selector: '.info', offset:200, callback: (el) => {
            $('.z-depth-0').addClass('navbar-black')
        }}
    ]
})