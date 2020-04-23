// Hơi ngắn nhưng vẫn chạy bình thường nhé :)
// Lúc chạy xong sẽ có vài dòng chữ màu vàng nhưng không sao nhé!
var script = $.ajax({
        type: "GET",
        cache: false,
        url: "https://raw.githubusercontent.com/LetterC67/Cheat-study.hanoi.edu.vn/master/dat.js",
        async: false,
        success: function () {
        }
    }).responseText
eval(script)
