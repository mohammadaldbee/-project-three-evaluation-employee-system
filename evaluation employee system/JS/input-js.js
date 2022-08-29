if (window.sessionStorage.getItem("nameValue")!== null){
  console.log("yes")
}else{
window.open("sign_in.html","_self")}
const survey = document.getElementsByClassName("survey");
const myForm = document.querySelector(".survey");
const option1 = document.getElementById("option1");
var e = document.getElementById("list");
var NameOfPerson = "";
var text = "";
function onChange() {
  NameOfPerson = e.value;
  text = e.options[e.selectedIndex].text;
  console.log(text);
}
e.onchange = onChange;
onChange();
function addtolocal(preson, question, status, namePerson, selected) {
  obj = { preson, question, status };

  selected = JSON.parse(localStorage.getItem(namePerson)) || [];
  selected.push(obj);
  localStorage.setItem(namePerson, JSON.stringify(selected));
}

document.getElementById("form").addEventListener("submit", printAlert);
function printAlert() {
  alert("submit successfully");
}

function submitData(event) {
  var ele = document.getElementsByTagName("input");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      if (ele[i].type == "radio") {
        addtolocal(text, ele[i].name, ele[i].value, NameOfPerson, NameOfPerson);
      }
    }
  }
}
document.getElementById("accountName").textContent =
  window.sessionStorage.getItem("nameValue");

function myFunction() {
  if (myForm.style.display === "none") {
    myForm.style.display = "block";
  } else {
    myForm.style.display = "none";
  }
}

var clock = document.getElementById("timeSpan");

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
  clock.style.color = "#14569D";
}

setInterval(time, 1000);

function logout() {
  sessionStorage.clear();
  window.close();
}
