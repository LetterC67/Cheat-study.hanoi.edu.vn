x = document.getElementsByClassName("question-box");
ques = document.getElementsByClassName("col-11 question-box-title")
ans = []
for(i=0;i<x.length;i++){
    if(x[i].getElementsByTagName("img").length == 4){
        if(x[i].getElementsByClassName("text-primary")[0] != null)
            ans.push([ques[i].innerText,x[i].getElementsByClassName("text-primary")[0].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt])
        else
            ans.push([ques[i].innerText,x[i].getElementsByClassName("text-success")[1].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt])
        continue
    }
    if(x[i].getElementsByClassName("text-primary")[0] != null)
        ans.push([ques[i].innerText,x[i].getElementsByClassName("text-primary")[0].parentNode.nextElementSibling.innerText])
    else
        ans.push([ques[i].innerText,x[i].getElementsByClassName("text-success")[1].parentNode.nextElementSibling.innerText])
}
localStorage.setItem("ans",JSON.stringify(ans))
