for(i=0;i<testResultLocalObject.length;i++){
    var buttons = document.querySelectorAll('input[type="radio"]')
    for(var j=0;j<buttons.length;j++){
        if(buttons[j].name == testResultLocalObject[i].QuestionId && buttons[j].value == testResultLocalObject[i].AnswerId){
            buttons[j].checked=true;
            buttons[j].onclick();
        }
    }   
}

if (confirm('Bạn muốn tải file đáp án không?')) {
    ques = document.getElementsByClassName("ImportWord-Normal");
    _ques = [];

    for(i=0;i<y.length;i++)
        if(ques[i].innerText.replace(/\s/g, '').length)
            _ques.push(y[i]);

    data=""
    for(i=0;i<_ques.length;i++)    
        if(i%5==0)
            data += (Math.ceil(i/5)+1).toString() + ". " + _ques[i].innerText+"\n";
        else if(buttons[Math.floor(i/5)*4+i%5-1].checked)
            data += "[x] " + _ques[i].innerText + "\n" ;
        else data += "[ ] " + _ques[i].innerText + "\n";

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', "dap_an.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}else{
    
}'

// * https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
