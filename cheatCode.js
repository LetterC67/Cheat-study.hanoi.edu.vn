var cheatCode = ""
for(i=0;i<testResultLocalObject.length;i++)
    cheatCode = cheatCode + "SaveUserAnswer('"+testResultLocalObject[i].QuestionId.toString()+"','"+testResultLocalObject[i].AnswerId.toString()+"');";
cheatCode = cheatCode + "SubmitTestResultClick();"
console.log(cheatCode);
