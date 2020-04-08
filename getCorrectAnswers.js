x = document.getElementsByClassName("question-box");
ques = document.getElementsByClassName("col-11 question-box-title")
ans = []
for(i=0;i<x.length;i++){
    ans.push([ques[i].innerText,x[i].getElementsByClassName("text-primary")[0].parentNode.nextElementSibling.innerText])
}
localStorage.setItem("ans",JSON.stringify(ans))
