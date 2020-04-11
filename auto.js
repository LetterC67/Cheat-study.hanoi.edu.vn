ans = JSON.parse(localStorage.getItem("ans"))
var buttons = document.querySelectorAll('input[type="radio"]')
x = document.getElementsByClassName("question-box")
for(i=0;i<x.length;i++){
    ques = x[i].getElementsByClassName("col-11 question-box-title")[0].innerText.replace(/(\n| |\$)/gm, "");
    ansList = x[i].querySelectorAll('input[type="radio"]')
    ansList2 = []
    for(l=0;l<4;l++){
        if(ansList[l].parentNode.nextElementSibling.getElementsByTagName("img").length)
            ansList2.push(ansList[l].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt)
        else
            ansList2.push(ansList[l].parentNode.nextElementSibling.innerText.replace(/(\n| |\t)/gm, ""))
    }
    var j=0;
    for(j=0;j<ans.length;j++){
        if(ques == ans[j][0] && ansList2.includes(ans[j][1]))
            break;
    }
    if(j==x.length){
        console.log("Có vấn đề với câu " + (i+1).toString() + ". Bạn có thể tự làm lại câu đó nhé!")
        continue
    }
   
    for(k=0;k<4;k++){
        if(ansList[k].parentNode.nextElementSibling.getElementsByTagName("img").length && ans[j][1] == ansList[k].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt)
            ansList[k].onclick()
        else if(ans[j][1] == ansList[k].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, ""))
            ansList[k].onclick()
    }
}
