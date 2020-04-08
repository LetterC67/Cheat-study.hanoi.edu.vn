ans = JSON.parse(localStorage.getItem("ans"))
var buttons = document.querySelectorAll('input[type="radio"]')
x = document.getElementsByClassName("question-box")
for(i=0;i<x.length;i++){
    ques = x[i].getElementsByClassName("col-11 question-box-title")[0].innerText;
    var j=0;
    for(j=0;j<ans.length;j++)
        if(ques == ans[j][0])
            break;
    ansList = x[i].querySelectorAll('input[type="radio"]')
    for(k=0;k<4;k++){
        if(ansList[k].parentNode.nextElementSibling.getElementsByTagName("img").length && ans[j][1] == ansList[k].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt)
            ansList[k].onclick()
        else if(ans[j][1] == ansList[k].parentNode.nextElementSibling.innerText)
            ansList[k].onclick()
    }
}
