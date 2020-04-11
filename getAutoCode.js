// ==UserScript==
// @name         auto study.hanoi.edu.vn by C67 (♕RED♚QUEEN♕)
// @namespace    http://tampermonkey.net/
// @version      get-auto-code-1.0
// @description  auto :D
// @author       C67 (♕RED♚QUEEN♕)
// @match        http://study.hanoi.edu.vn/lam-bai/*
// @grant        none
// ==/UserScript==

(function() {
    var script = $.ajax({
        type: "GET",
        cache: false,
        url: "https://raw.githubusercontent.com/LetterC67/Cheat-study.hanoi.edu.vn/master/fullyAutomaticCode.js",
        async: false,
        success: function () {
        }
    }).responseText
    eval(script)
})();
