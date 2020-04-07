x = document.getElementsByClassName("text-primary")
ans = []
for(i=1;i<x.length;i++){
    ans.push(x[i].parentNode.nextElementSibling.innerText)
}
y = document.getElementsByClassName("text-success")
for(i=2;i<y.length;i+=3){
    ans.push(y[i].parentNode.nextElementSibling.innerText)
}
localStorage.setItem("ans",JSON.stringify(ans))
