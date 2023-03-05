function init() {
    console.log("hey what are you doing here? :\\")
    var header = document.querySelector('header')
    document.body.style.opacity = "1"

    function setInnerText(el, t) {
        t.split("\n").forEach(function (line, index) {
            var tabs = line.replace(line.replaceAll("\t", ""), "").replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;")

            var newline = (index == 0) ? '' : "<br>"
            el.innerHTML += newline+tabs
            el.innerText += line
        })
    }

    document.body.onscroll = function (event) {
        var bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

        if (document.documentElement.scrollTop > 175) header.classList.value = ('sticky-header')
        else header.classList.value = ('card')
    }

    window.removeSpaces = function(s) {
        if (s.split("\n").join("").trim() == "") return s
        s = s.replaceAll('    ', '\t').replaceAll('	', '\t')

        var lines = s.split("\n")
        if (lines[0].trim() == '') lines.shift()
        if (lines[lines.length-1].trim() == '') lines.pop()
        var cleaned = false
        
        while (true) {
            cleaned = true
            lines.forEach(l => {
                if (l == "") {
                } else if (l.substr(0,1) !== "\t") {
                    cleaned = false
                }
            })

            if (!cleaned) break
            
            lines.forEach( (l, i) => {
                l = l.replace('\t', '')
                lines[i] = l
            })
        }

        return lines.join("\n")
    }
    
    document.querySelectorAll("code:not(.no-color)").forEach(function (el) {
        var text = el.innerText
        var langName = [...el.classList].find(a => a.startsWith('language-')) || 'language-js'
        
        el.innerHTML = removeSpaces(text).trim().replaceAll('\t', '    ')
        if (el.parentElement.tagName == 'pre' && el.parentElement.classList == 'hl-code') {
            el.parentElement.style.transitionDuration = '0ms'
            el.parentElement.classList.add(langName)
            hljs.highlightElement(el.parentElement)
        } else {
            el.style.transitionDuration = '0ms'
            el.classList.add(langName)
            hljs.highlightElement(el)
        }
    })

    var taskToDoNum = 0;
    document.querySelectorAll(".task-to-do .number").forEach(e => e.innerText = ++taskToDoNum);
    
    document.body.onkeydown = (e) => (e.key == 'd') ? document.querySelector("#darkmode").click() : ((e.key == 'C') ? document.querySelector("#togglecss").click() : true)
    updateFormatterTheme()
}

function toggleCollapse(element, button) {
    element.style.transitionDuration = '0ms'
    element.classList.toggle("expanded")
    button.classList.toggle("expanded")
    if (element.classList.contains("expanded")) element.style.height = (element.scrollHeight+1)+"px"
    else element.style.height = '0px'
    element.style.transitionDuration = ''
}

hljs_lightThemeVal = 'stackoverflow-light'
var hljs_lightTheme = (s) => s === undefined ? hljs_lightThemeVal : (function (s) { hljs_lightThemeVal = s; updateFormatterTheme() })(s)

hljs_darkThemeVal = 'stackoverflow-dark'
var hljs_darkTheme = (s) => (s === undefined) ? hljs_darkThemeVal : (function (s) { hljs_darkThemeVal = s; updateFormatterTheme() })(s)

function updateFormatterTheme(t) {
    var theme = document.body.classList.contains('dark') ? hljs_darkTheme() : hljs_lightTheme()
    if (t !== undefined) theme = t
    var link = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/'+theme+'.min.css'
    document.querySelector("#hljs-theme").href = link

    return document.querySelector("#hljs-theme").href
}

window.onerror = function (e) {
    document.getElementById("error-reporting").classList = ""
    document.querySelector("#error-reporting p").innerText = e
    document.body.style.opacity = "1"
}

try {
    init()
} catch(e) {
    window.onerror(e)
}
