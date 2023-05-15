
var btn=document.getElementsById('btn');
alert("Hello! I am an alert box!!");
function like()
{
 if(btn.classList.contains("far")){
 btn.classList.remove("far");
 btn.classList.add("fas");}
 else{
  btn.classList.remove("fas");
  btn.classList.add("far");
 }
}
var btn1=document.getElementById('btn1');
function bookmark()
{
 if(btn1.classList.contains("far")){
 btn1.classList.remove("far");
 btn1.classList.add("fas");}
 else{
  btn1.classList.remove("fas");
  btn1.classList.add("far");
 }
}