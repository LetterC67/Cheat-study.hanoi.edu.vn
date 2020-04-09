var ans = []
function getText(obj){
    text = ""
    for(p=0;p<obj.length;p++)
        text += obj[p].innerText
    return text
}
$.ajax({
    type: "GET",
    cache: false,
    url: "/home/scoredetails?id=" + parseInt(prompt("Nhập số")),
    async: false,
    success: function (data) {
        div = document.createElement("div")
        div.insertAdjacentHTML( 'beforeend', data );      
        x = div.getElementsByClassName("question-box");
        for(i=0;i<x.length;i++){
             y = x[i].getElementsByClassName("col-11 question-box-title")[0].getElementsByTagName("span")
            ques = ""
            for(l=0;l<y.length;l++)
                ques += y[l].innerText	
            if(x[i].getElementsByTagName("img").length == 4){
                if(x[i].getElementsByClassName("text-primary")[0] != null)
                    ans.push([ques,x[i].getElementsByClassName("text-primary")[0].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt])
                else
                    ans.push([ques,x[i].getElementsByClassName("text-success")[1].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt])
                continue
            }
            if(x[i].getElementsByClassName("text-primary")[0] != null)
                ans.push([ques,getText(x[i].getElementsByClassName("text-primary")[0].parentNode.nextElementSibling.getElementsByTagName("span"))])
            else
                ans.push([ques,getText(x[i].getElementsByClassName("text-success")[1].parentNode.nextElementSibling.getElementsByTagName("span"))])
        }
    }
});
var buttons = document.querySelectorAll('input[type="radio"]')
x = document.getElementsByClassName("question-box")
for(i=0;i<x.length;i++){
    QUES = x[i].getElementsByClassName("col-11 question-box-title")[0].getElementsByTagName("span");
    ques = ""
    for(y=0;y<QUES.length;y++)
        ques += QUES[y].innerText
    ansList = x[i].querySelectorAll('input[type="radio"]')
    ansList2 = []
    for(l=0;l<4;l++){
        if(ansList[l].parentNode.nextElementSibling.getElementsByTagName("img").length)
            ansList2.push(ansList[l].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt)
        else
            ansList2.push(getText(ansList[l].parentNode.nextElementSibling.getElementsByTagName("span")))
    }
    var j=0;
    for(j=0;j<ans.length;j++){
        if(ques.substr(0,20) == ans[j][0].substr(0,20) && ansList2.includes(ans[j][1]))
            break;
    }
    console.log(j)
    for(k=0;k<4;k++){
        if(ansList[k].parentNode.nextElementSibling.getElementsByTagName("img").length && ans[j][1] == ansList[k].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt)
            ansList[k].onclick()
        else if(ans[j][1] == getText(ansList[k].parentNode.nextElementSibling.getElementsByTagName("span")))
            ansList[k].onclick()
    }
}
