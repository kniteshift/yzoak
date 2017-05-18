import $ from 'jquery'
import 'materialize-css/js/materialize.js'
import 'materialize-css/bin/materialize.js'

$(function(){

    let options = [
        {selector: '.info', offset:200, callback: (el) => {
            console.log('test')
            $('.z-depth-0').addClass('navbar-black')
        }}
    ]

    Materialize.scrollFire(options)

    console.log('success!')
})