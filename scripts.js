window.tmplts = {
    htmldoc: "Beginner Document for HTML Learning",
    cssdoc: "Document for Intermediate level CSS Learning",
    jsdoc: "Document for learning JavaScript Programming",
    jsprac: "Document containing small tasks to do for basic JavaScript Practice",
    jsass: "Document containing a large JavaScript, HTML, and CSS inclusive assignment",

    p_cal: "Um, it doesn't really... well, work :/",
    p_reddit: "Honestly the actual website is better imo",
    p_htmlrun: "Um you can run HTML code with this real quick :|",
    p_pagebuilder: "An HTML page builder I made, you can create beaultiful HTML pages with it",
    p_diseases: "Browse through artificially generated diseases :D",
    p_fallingblocks: "It's really good I swear just try it :D",
}

function init() {
    var sections = [
        [
            'What do I do?', 
            '<span style="color: white; font-weight: normal;">Programming</span>, some <span style="color: white; font-weight: normal;">gaming</span> sometimes, and <span style="color: white; font-weight: normal;">anime</span> rarely, but mostly <span style="color: white; font-weight: normal;">programming</span>'
        ],
        [
            'Why programming?', 
            "Programmig is fun and I love the idea how a normal person can get started so easily if they are interested.",
            'With the skill of programming you seem to have the sense of creating any sort of application you want, which is joyful in my case. I love bringing those thoughts to reality.</p>'
        ],
        [
            'Isn\'t programming hard?', 
            "Programmig is as simple as talking to someone.",
            "Quite literally though.<br>The listener is the computer, and you are the speaker.<br>For interested people, programming can be really fun and also addicting.<br><br>But the point at which things seem to get a bit difficult is to keep the fact in mind that computers aren't humans, so their way of understanding is different, and perhaps too literal. Our minds are used to 'autocompleting' the every single bit of information, so, because of that, many beginners usually seem to 'assume' parts of code in their mind, with the computer utterly confused about the user's requirement.<br><br>If you're interested in getting started, I'll suggest getting started with strict languages like C#, Java, etc. (keep in mind I'm not a professional when it comes to suggestions) In my opinion, they are better for beginners in building up basic concepts more powerfully due to their strictness for them.<p>"
        ]
    ]

    sections.forEach(a => {
        document.querySelector('#introduction').innerHTML += '<center style="padding-top: 10%; color: #aaa; text-transform: uppercase;">'+a[0]+'</center><h1 style=" padding: 10%; padding-top: 0;"><center style="font-size: 36px; color: #eee; font-weight: 100;">'+a[1]+'<br><p style=\"font-size: 50%;\">'+(a[2] || '')+'</center></h1><br><hr><br>'
    })
}

init()

document.querySelectorAll('.tmplt').forEach(a => a.innerHTML = window.tmplts[a.innerText])