// Common Footer:

var footerHTML = `
<div style="width: 50%;">                
    <h2>Thanos Catt</h2>
    <p>
        Hope you uh enjoyed my stuff maybe?<br>
        Copyright &copy; 2021 Thomas Catt (jk)
    </p>
</div>

<div style="float: right;">
    <a href='https://reddit.com/r/memes'>Reddit</a>
    <a href='https://Facebook.com/'>Facebook</a>
    <a href='https://Instagram.com/'>Instagram</a>
</div>`

document.querySelector("footer").innerHTML = footerHTML;

// Page Entering Transition:

document.body.style = "transition-duration: 600ms;"
document.body.className = "b"
setTimeout(() => {
    document.body.style = ""
}, 600);