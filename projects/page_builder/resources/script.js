var selection = false;
var lastSelection = false;
var currentClasslist = [];

var allProperties = []
var unitProperties = ['margin', 'padding', 'width', 'height', 'fontSize', 'borderRadius']
var selectTagProperties = ['textAlign', 'display', 'fontStyle', 'fontFamily']
var selectTagPropertiesOptions = {
    textAlign: ['left', 'center', 'right'],
    display: ['block', 'inline-block'],
    fontStyle: ['initial', 'italic'],
    fontFamily: ['', "Times New Roman", "Arial", "Calibri", "Consolas", "Sans Serif", "Serif", "cursive"]
}
var noBody = ['hr', 'img']

function $(q) {
    return document.querySelector(q)
}

function forEachCanvasChild(f) {
    var elems = $("#builder-canvas").querySelectorAll('*')
    for (let i = 0; i < elems.length; i++) {
        f(elems[i])
    }
}

function forEachChild(el, f) {
    var elems = el.querySelectorAll('*')
    for (let i = 0; i < elems.length; i++) {
        f(elems[i])
    }
}

function elementSelection(event) {
    event.preventDefault()
    selection = event.target
    lastSelection = event.target
    forEachCanvasChild(a => a.classList.remove('canvas-selected'))
    event.target.classList.add('canvas-selected')
}

function updateCanvasSelectionEvents() {
    forEachCanvasChild(a => {
        a.onclick = elementSelection
        a.oncontextmenu = function (e) {
            e.preventDefault()
        }
    });    
}

function init() {
    
    updateCanvasSelectionEvents()

    $('#builder-canvas-container').onclick = function (e) {
        if (selection == false) {
            forEachCanvasChild(a => a.classList.remove('canvas-selected'))
            hideSidebar()
        } else {
            showSidebar()
            setProperties(selection)
        }
        selection = false
    }

    forEachChild($("#element-properties-controls"), a => a.onchange = applyProperties)
    forEachChild($(".properties-propertycontainer"), function (a) {
        if (a.tagName == 'INPUT' || a.tagName == 'SELECT') {
            var toAdd = a.id
            if (toAdd.includes("-")) toAdd = toAdd.split("-")[0]

            if (!allProperties.includes(toAdd) )allProperties.push(toAdd)
        }
    })
    refreshClasslist()
}

function removeElement(el) {
    confirm("Are you sure that you want to remove this element from the canvas?")
}

function toggleSidebar() {
    $('#builder-canvas-container').classList.value = $('#builder-canvas-container').classList.value == 'col-9' ? 'col-6' : 'col-9'
    $('#element-properties-pane').classList.toggle('zero-width')
}

function showSidebar() {
    $('#builder-canvas-container').classList.value = 'col-6'
    $('#element-properties-pane').classList.remove('zero-width')
}

function hideSidebar() {
    $('#builder-canvas-container').classList.value = 'col-9'
    $('#element-properties-pane').classList.add('zero-width')    
}

function setProperties() {
    $("#properties-tagname").innerText = "<"+lastSelection.tagName+">"
    $("#properties-innertext").value = lastSelection.innerText
    $("#properties-innertext-container").style.display = 'block'
    if (noBody.includes(lastSelection.tagName)) {
        $("#properties-innertext-container").style.display = 'none'
    }

    allProperties.forEach(a => {
        if (unitProperties.includes(a)) {
            $(".properties-propertycontainer #"+a+'-num').value = (isNaN(parseInt(lastSelection.style[a])) ? '' : (parseInt(lastSelection.style[a])))
            $(".properties-propertycontainer #"+a+'-unit').value = 
            (isNaN(parseInt(lastSelection.style[a])) ? 'px' :
            (lastSelection.style[a]).replace( parseInt(lastSelection.style[a]) , ''))
        } else if (selectTagProperties.includes(a)) {
            var valueToSet = selectTagPropertiesOptions[a][0]
            if (lastSelection.style[a] != '') valueToSet = lastSelection.style[a]
            $(".properties-propertycontainer #"+a).value = valueToSet
        } else if (a == 'boxShadow' || a == 'textShadow') {
            if (lastSelection.style[a] == '') {
                $(".properties-propertycontainer #"+a+'-blurAmount').value = ''
                $(".properties-propertycontainer #"+a+'-blurUnit').value = 'px'
                $(".properties-propertycontainer #"+a+'-color').value = '#eee'
            } else {
                var color = lastSelection.style[a].split(' 0px 0px ')[0]
                var blur = lastSelection.style[a].split(' 0px 0px ')[1]
                var blurAmount = parseInt(blur)
                var blurUnit = blur.replace(blurAmount+'', '')
                                
                $(".properties-propertycontainer #"+a+'-blurAmount').value = blurAmount
                $(".properties-propertycontainer #"+a+'-blurUnit').value = blurUnit
                $(".properties-propertycontainer #"+a+'-color').value = color
            }
        } else {
            $(".properties-propertycontainer #"+a).value = lastSelection.style[a]
        }
    });
    refreshElementClasslist()
}

function applyProperties() {
    lastSelection.innerText = $("#properties-innertext").value
    allProperties.forEach(a => {
        if (unitProperties.includes(a)) {
            if ($(".properties-propertycontainer #"+a+'-num').value == '') lastSelection.style[a] = ''
            else lastSelection.style[a] = $(".properties-propertycontainer #"+a+'-num').value+$(".properties-propertycontainer #"+a+'-unit').value
        } else if (selectTagProperties.includes(a)) {
            var valueToSet = ''
            if ($(".properties-propertycontainer #"+a).value != '') valueToSet = $(".properties-propertycontainer #"+a).value
            lastSelection.style[a] = valueToSet
        } else if (a == 'boxShadow' || a == 'textShadow') {
            var valueToSet = ''
            var initialZeroes = "0 0 "

            var blurAmount =  $(".properties-propertycontainer #"+a+'-blurAmount').value
            var blurUnit =  $(".properties-propertycontainer #"+a+'-blurUnit').value
            var color =  $(".properties-propertycontainer #"+a+'-color').value

            if (blurAmount == '' && blurUnit == '' && color == '') {
                blurAmount = ''
                blurUnit = ''
                color = ''
                initialZeroes = ''
            } else {
                if (blurAmount == '') blurAmount = '0'
                if (blurUnit == '') blurUnit = 'px'
                if (color == '') color = '#ddd'
            }
            
            valueToSet = initialZeroes + blurAmount+blurUnit + " " + color
            lastSelection.style[a] = valueToSet
        } else {
            lastSelection.style[a] = $(".properties-propertycontainer #"+a).value
        }
    });
}

function removeElement() {
    lastSelection.outerHTML = ''
    hideSidebar()
}

function addElement(position) {
    var name = $('#insert-element-select').value
    var innertext = $('#insert-innertext').value
    var linkURL = $('#insert-link').value
    var imageLink = $('#insert-img-link').value
    if ($('#insert-innertext-container').style.display !== 'none' && innertext == '') return alert('Enter element body before inserting');
    if ($('#insert-link-container').style.display !== 'none' && linkURL == '') return alert('Enter link URL before inserting');
    if ($('#insert-img-link-container').style.display !== 'none' && imageLink == '') return alert('Enter image link before inserting');

    var element = document.createElement(name)
    element.innerText = innertext
    currentClasslist.forEach(function (e) {
        element.classList.add(e)
    })
    currentClasslist = []
    refreshClasslist()
    if (name == 'a') element.href = linkURL
    if (name == 'img') element.src = imageLink
    
    element.classList.add('canvas-selected')
    forEachCanvasChild(e => e.classList.remove('canvas-selected'))

    lastSelection = element
    showSidebar()
    setProperties()

    $('#insert-element-select').value = 'p'
    $('#insert-innertext').value = ''
    $('#insert-element-select').onchange({target: $('#insert-element-select')})
    
    $('#builder-canvas')[position](element)
    updateCanvasSelectionEvents()
}

function insertSelect(event) {
    var selection = event.target.value
    $("#insert-innertext-container").style.display = 'block'
    $("#insert-link-container").style.display = 'none'
    $("#insert-img-link-container").style.display = 'none'
    if (noBody.includes(selection)) {
        $("#insert-innertext-container").style.display = 'none'
    } 
    if (selection == 'a') {
        $("#insert-link-container").style.display = 'block'
    } else if (selection == 'img') {
        $("#insert-img-link-container").style.display = 'block'
    }
}

function exportHTML() {    
    var preparedHTML = ''
    preparedHTML += '<html>'
    preparedHTML += '<head>'
    preparedHTML += '<title>HTML Webpage</title>'
    preparedHTML += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">'
    preparedHTML += '</head>'
    preparedHTML += '<body>'
    preparedHTML += $('#builder-canvas').innerHTML
    preparedHTML += '</body>'
    preparedHTML += '</html>'

    

    prompt('Below is the HTML for your page, you can copy it:', preparedHTML)
}

function refreshClasslist() {
    var targetEl = $("#insert-classlist-list")
    targetEl.innerHTML = ''
    if (currentClasslist.length == 0) {
        targetEl.innerHTML = '<i>No items</i>'
    }
    currentClasslist.forEach(e => {
        targetEl.innerHTML += "<div style='border: 1px solid #ddd; border-radius: 6px; padding: 4px; margin: 4px;'>"
                            +   "<div id='single-element-"+e+"-listitem' style=' display: flex;'>"
                            +     "<span style='width: 100%;'>"+e+"</span>"
                            +     "<span class='btn btn-outline-secondary' style='cursor: pointer;' onclick='$(\"#single-element-"+e+"-editclassname\").style.display = \"flex\"; $(\"#single-element-"+e+"-listitem\").style.display = \"none\"; '>Edit</span>"
                            +     "<span class='btn btn-outline-secondary' style='cursor: pointer;' onclick='modifyClasslist(\"remove\", \""+e+"\")'>&times;</span>"
                            +   "</div>"
                            +   "<div style='display: none;' id='single-element-"+e+"-editclassname'>"
                            +     "<input type='text' placeholder='Class Name' id='single-element-"+e+"-edit-input' class='form-control' value='"+e+"'>"
                            +     "<button class='btn btn-primary' onclick='modifyClasslist(\"edit\", $(\"#single-element-"+e+"-edit-input\").value, \""+e+"\")'>Done</button>"
                            +     "<button class='btn' onclick='$(\"#single-element-"+e+"-editclassname\").style.display = \"none\"; $(\"#single-element-"+e+"-listitem\").style.display = \"flex\"; '>Cancel</button>"
                            +   "</div>"
                            + "</div>"
    });
}

function modifyClasslist(action, value, target) {
    if (action == 'add') {
        if (value == '') return
        if (currentClasslist.includes(value.replaceAll(' ', ''))) return alert('Classname already exists')
        currentClasslist.push(value)
        $('#insert-classlist-classname').value = ''
    } else if(action == 'remove') {
        currentClasslist = currentClasslist.filter(a => a != value)
    } else if(action =='edit') {
        if (value == '') return
        if (currentClasslist.includes(value.replaceAll(' ', ''))) return alert('Classname already exists')
        currentClasslist = currentClasslist.map(a => a == target ? value : a)
        $('#single-element-'+target+'-edit-input').value = value
    }
    refreshClasslist()
}

function refreshElementClasslist() {
    var targetEl = $("#properties-classlist-list")
    targetEl.innerHTML = ''
    if (lastSelection.classList.length == 0 || lastSelection.classList.value == 'canvas-selected') {
        targetEl.innerHTML = '<i>No items</i>'
    }
    lastSelection.classList.forEach(e => {
        if (e == 'canvas-selected') return;
        else targetEl.innerHTML += "<div style='border: 1px solid #ddd; border-radius: 6px; padding: 4px; margin: 4px;'>"
                            +   "<div id='element-properties-"+e+"-listitem' style=' display: flex;'>"
                            +     "<span style='width: 100%;'>"+e+"</span>"
                            +     "<span class='btn btn-outline-secondary' style='cursor: pointer;' onclick='$(\"#element-properties-"+e+"-editclassname\").style.display = \"flex\"; $(\"#element-properties-"+e+"-listitem\").style.display = \"none\"; '>Edit</span>"
                            +     "<span class='btn btn-outline-secondary' style='cursor: pointer;' onclick='modifyElementClasslist(\"remove\", \""+e+"\")'>&times;</span>"
                            +   "</div>"
                            +   "<div style='display: none;' id='element-properties-"+e+"-editclassname'>"
                            +     "<input type='text' placeholder='Class Name' id='element-properties-"+e+"-edit-input' class='form-control' value='"+e+"'>"
                            +     "<button class='btn btn-primary' onclick='modifyElementClasslist(\"edit\", $(\"#element-properties-"+e+"-edit-input\").value, \""+e+"\")'>Done</button>"
                            +     "<button class='btn' onclick='$(\"#element-properties-"+e+"-editclassname\").style.display = \"none\"; $(\"#element-properties-"+e+"-listitem\").style.display = \"flex\"; '>Cancel</button>"
                            +   "</div>"
                            + "</div>"
    });
}

function modifyElementClasslist(action, value, target) {
    var classlist = lastSelection.classList
    if (action == 'add') {
        if (value == '') return
        if (classlist.contains(value.replaceAll(' ', ''))) return alert('Classname already exists')
        classlist.add(value)
        $('#properties-classlist-classname').value = ''
    } else if(action == 'remove') {
        classlist.remove(value)
    } else if(action =='edit') {
        if (value == '') return
        if (classlist.contains(value.replaceAll(' ', ''))) return alert('Classname already exists')
        classlist.remove(target)
        classlist.add(value)
        $('#element-properties-'+target+'-edit-input').value = value
    }
    lastSelection.classList = classlist
    refreshElementClasslist()
}


init()