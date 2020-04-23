// Cũng ngắn nhưng không sao nhé!
var script = $.ajax({
        type: "GET",
        cache: false,
        url: "https://raw.githubusercontent.com/LetterC67/Cheat-study.hanoi.edu.vn/master/dat2.js",
        async: false,
        success: function () {}
    }).responseText
eval(script)
