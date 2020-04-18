var ans = [];
var x = document.getElementsByClassName("question-box");
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
sessionStorage.setItem("ans",ans)
