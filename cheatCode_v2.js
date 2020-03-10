var buttons = document.querySelectorAll('input[type="radio"]')
for(var i=0;i<buttons.length;i++){
    buttons[i].checked=true;
    buttons[i].onclick();
 }

MinID = parseInt(buttons[0].value);
for(i=1;i<4;i++){
	if(parseInt(buttons[i].value) < MinID)
		MinID = parseInt(buttons[i].value);
}
MinID = MinID % 4;

curQuesIdList = []
curAnsIdList = []
for(i=0;i<testResultLocalObject.length;i++){
    curQuesIdList.push(testResultLocalObject[i].QuestionId);
    curAnsIdList.push(testResultLocalObject[i].AnswerId);
}
prevQuesIdList = []
prevAnsIdList = []

runtime = 1 // Lần chạy
RT = localStorage.getItem("runtime");
if(RT != null)
	runtime = parseInt(RT) + 1;
	
if (runtime == 1){
	prevQuesIdList = curQuesIdList;
	prevAnsIdList = curAnsIdList;
}else{
	prevQuesIdList = JSON.parse(localStorage.getItem("prevQuesID"));
	prevAnsIdList = JSON.parse(localStorage.getItem("prevAnsID"));
}

Ques = buttons.length/4 + 1;
wrong = "";
if(runtime == 1)
	for(i=0;i<Ques;i++){
		wrong = wrong + i.toString() + ". ";
	}
else
	wrong = localStorage.getItem("wrong");

WrongList = [];
for(i=0;i<wrong.length;i++){
	if(wrong.charAt(i) == "."){
    	if(wrong.charAt(i-2) >= '0' && wrong.charAt(i-2) <= '9'){
        	WrongList.push(prevQuesIdList[parseInt(wrong.substr(i-2,2))-1]);
        }else{
        	WrongList.push(prevQuesIdList[parseInt(wrong.substr(i-1,1))-1]);
        }
    }
}

for(i=0;i<testResultLocalObject.length;i++){
    if(WrongList.includes(curQuesIdList[i])){
    	curAnsIdList[i] = (Math.floor((parseInt(curAnsIdList[i])-MinID)/4)*4+runtime+MinID-1).toString();
    }else{
		console.log(curQuesIdList[i]);
		for(j=0;j<prevQuesIdList.length;j++){
			if(curQuesIdList[i] == prevQuesIdList[j]){
				curAnsIdList[i] = prevAnsIdList[j];
				break;
			}
		}
	}
}

localStorage.setItem("prevQuesID",JSON.stringify(curQuesIdList));
localStorage.setItem("prevAnsID",JSON.stringify(curAnsIdList));

cheatCode = "";
for(i=0;i<curQuesIdList.length;i++){	
    SaveUserAnswer(curQuesIdList[i],curAnsIdList[i]);
    if(runtime == 4){
		cheatCode = cheatCode + "SaveUserAnswer('"+curQuesIdList[i]+"','"+curAnsIdList[i]+"');\n";
	}
}
if(runtime == 4){	
	console.log(cheatCode);
	console.log("Copy đoạn cheat code trên để có thể dùng lần sau!");	
	for(i=0;i<testResultLocalObject.length;i++){
			var buttons = document.querySelectorAll('input[type="radio"]')
			for(var j=0;j<buttons.length;j++){
				if(buttons[j].name == testResultLocalObject[i].QuestionId && buttons[j].value == testResultLocalObject[i].AnswerId){
					buttons[j].checked=true;
					buttons[j].onclick();
				}
			} 
			
		}
	console.log("Các đáp án đúng đã được tự động chọn! Xin mời tham khảo :) ");
}

localStorage.setItem("runtime",runtime.toString());
