(function() {
    ver = "1.2"
    console.log("Auto study.hanoi.edu.vn by C67(♕RED♚QUEEN♕) ver "+ ver)
    var t = document.getElementsByClassName("col-12")[1];
    var cID = t.innerText.substr(11,t.innerText.search("\n")-11);
    var data = $.ajax({
        type: "GET",
        cache: false,
        url: "https://raw.githubusercontent.com/LetterC67/Cheat-study.hanoi.edu.vn/master/examID",
        async: false,
        success: function () {
        }
    }).responseText
    data = data.split("\n");
    var bID = 0;
    for(i=0;i<data.length;i++){
        temp = data[i].split(": ");
        if(temp[0] == cID)
            bID = temp[1];
    }
    if(!bID)
        alert("Auto study.hanoi.edu.vn by C67 (♕RED♚QUEEN♕) " + ver + "\nĐề không hỗ trợ!\n Bạn hãy vào repo của mình: https://github.com/LetterC67/Cheat-study.hanoi.edu.vn để xem cách thủ công!");
    else{
        desiredPoint = parseFloat(prompt("Phiên bản mới 1.2\nNhập số điểm tối thiểu bạn muốn","10"))
        var ans = [];
        $.ajax({
            type: "GET",
            cache: false,
            url: "/home/scoredetails?id=" + bID,
            async: false,
            success: function (data) {
                var div = document.createElement("div");
                div.insertAdjacentHTML( 'beforeend', data );
                var x = div.getElementsByClassName("question-box");
                for(i=0;i<x.length;i++){
                    ques = x[i].getElementsByClassName("col-11 question-box-title")[0].innerText.replace(/(\n| |\$|\t)/gm, "");
                    try{
                        ques += x[i].getElementsByTagName("img")[0].alt
                    }catch{}
                    try{
                        try{
                            ans.push([ques,x[i].getElementsByClassName("text-primary")[0].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt]);
                            continue;
                        }catch{
                            ans.push([ques,x[i].getElementsByClassName("text-success")[1].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt]);
                            continue
                        }
                    }catch{}
                    try{
                        ans.push([ques,x[i].getElementsByClassName("text-primary")[0].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "")])
                    }catch{
                        ans.push([ques,x[i].getElementsByClassName("text-success")[1].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "")])
                		}
				}
            }
        });
        var buttons = document.querySelectorAll('input[type="radio"]')
        x = document.getElementsByClassName("question-box")
        pointPerAns = 10/x.length
        cPoint = 0
        for(i=0;i<x.length;i++){
            if(cPoint >= desiredPoint)
                break
            ques = x[i].getElementsByClassName("col-11 question-box-title")[0].innerText.replace(/(\n| |\t|\$)/gm, "")
            try{
                ques += x[i].getElementsByTagName("img")[0].alt
            }catch{
            }
            ansList = x[i].querySelectorAll('input[type="radio"]')
            ansList2 = []
            for(l=0;l<ansList.length;l++){
                try{
                    ansList2.push(ansList[l].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt)
                }catch{
                    ansList2.push(ansList[l].parentNode.nextElementSibling.innerText.replace(/(\n| |\t|\$)/gm, ""))
				}
            }
            var j=0;
            for(j=0;j<ans.length;j++){
                if(ques == ans[j][0] && ansList2.includes(ans[j][1]))
                    break;
            }
            if(j==x.length){
                for(j=0;j<ans.length;j++){
                    if(ansList2.includes(ans[j][1]))
                        break;
                }
            }
            try{
                for(k=0;k<ansList.length;k++){
                    if(ansList[k].parentNode.nextElementSibling.getElementsByTagName("img").length && ans[j][1] == ansList[k].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt)
                        ansList[k].onclick()
                    else if(ans[j][1] == ansList[k].parentNode.nextElementSibling.innerText.replace(/(\n| |\t|\$)/gm, ""))
                        ansList[k].onclick()
                }
                cPoint += pointPerAns
            }catch{
                console.log("Có vấn đề với câu " + (i+1).toString() + ". Bạn có thể tự làm lại câu đó nhé!")
                continue
            }
        }
	alert("Auto study.hanoi.edu.vn by C67 (♕RED♚QUEEN♕)" + ver + "\n Đáp án đúng đã được chọn!")
    }
})();
