for(i=0;i<testResultLocalObject.length;i++){
    var buttons = document.querySelectorAll('input[type="radio"]')
    for(var j=0;j<buttons.length;j++){
        if(buttons[j].name == testResultLocalObject[i].QuestionId && buttons[j].value == testResultLocalObject[i].AnswerId){
            buttons[j].checked=true;
            buttons[j].onclick();
        }
    }   
}
