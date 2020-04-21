// Các bạn có thể đăng nhập vào tài khoản khác để đáp án trước xong trở lại tài khoản cũng được nhé!
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
sessionStorage.setItem("ans",JSON.stringify(ans))
copyStringToClipboard(str)
console.log("Nếu bạn không muốn chia sẻ đáp án bạn vừa lấy được thì hãy bỏ qua! Nếu không đáp án đã được tự động copy lại, bạn hãy paste ra đâu đó rồi gửi cho bạn bè dùng lại!")
