//毫秒级本地时间
function show(){ 
var date = new Date(); //日期对象 
var now = "0"; 
now = date.getFullYear()+"年"; 
now = now + (date.getMonth()+1)+"月"; 
now = now + date.getDate()+"日"; 
now = now + date.getHours()+"时"; 
now = now + date.getMinutes()+"分"; 
now = now + date.getSeconds()+"秒";
now = now + date.getMilliseconds()+"毫秒"; 
document.getElementById("nowDiv").innerHTML = now; 
setTimeout("show()",1); 
} 
