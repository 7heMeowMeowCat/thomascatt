window.tmplts = {
    htmldoc: "Beginner Document for HTML Learning",
    cssdoc: "Document for Intermediate level CSS Learning",
    jsprac: "Document containing small tasks to do for basic JavaScript Practice",
    jsass: "Document containing a large JavaScript, HTML, and CSS inclusive assignment",

    p_cal: "Um, it doesn't really... well, work :/",
    p_reddit: "Honestly the actual website is better imo",
    p_htmlrun: "Um you can run HTML code with this real quick :|",
    p_pagebuilder: "An HTML page builder I made, you can create beaultiful HTML pages with it",
    p_fallingblocks: "It's really good I swear just try it:D",
}

document.querySelectorAll('.tmplt').forEach(a => a.innerHTML = window.tmplts[a.innerText])