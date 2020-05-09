function copyStringToClipboard (str) {
   var el = document.createElement('textarea');
   el.value = str;
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);
}
//From https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
var ans = [];
var x = document.getElementsByClassName("question-box");
for(i=0;i<x.length;i++){
	ques = x[i].getElementsByClassName("col-11 question-box-title")[0].innerText.replace(/(\n| |\$|\t)/gm, "");
	try{
		ques += x[i].getElementsByTagName("img")[0].alt
	}catch{}
	try{
			ans.push([ques,x[i].getElementsByClassName("text-success")[1].parentNode.nextElementSibling.getElementsByTagName("img")[0].alt]);
			continue
		
	}catch{}
		ans.push([ques,x[i].getElementsByClassName("text-success")[0].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "")])
}
copyStringToClipboard(JSON.stringify(ans))
console.log("Đáp án được tự động copy, hãy paste vào đâu đó để dùng")
