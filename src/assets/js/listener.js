import $ from 'jquery'

export const mapIcons = (arr, path, selector) => {
    let html = ''

    arr.map(set => {

        if(!set.caption) {
            const iconString = `<img class="tooltipped" id="${set.name}" data-positon="top" data-delay='50' data-tooltip='${set.name}' src='assets/media/img/${path}/${set.file}' alt=${set.name} />`
            html += iconString
        }
        else {
            const iconString = `<img src='assets/media/img/${path}/${set.file}' alt=${set.name} />`
            html += `<div class="col s6 m4 l3 feature-item">
                <div class="box">
                    <div class="feature-icon-bg">
                        ${iconString}
                    </div>
                    <div class="caption">
                        <h5>${set.name}</h5>
                        <p>${set.caption}</p>
                    </div>
                </div>
            </div>`    
        }

    })

    $(selector).append(html)
}
