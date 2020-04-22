var buttons = document.querySelectorAll('input[type="radio"]')
desiredPoint = prompt("Nhập số điểm tối thiểu","10")
x = document.getElementsByClassName("question-box")
pointPerAns = 10/x.length
cPoint = 0
ans = JSON.parse(sessionStorage.getItem("ans"))
if(!ans)
    ans = JSON.parse(prompt("Hãy nhập đáp án!"))
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
sessionStorage.clear()
alert("Auto study.hanoi.edu.vn by C67 (♕RED♚QUEEN♕)\n Đáp án đúng đã được chọn!")
