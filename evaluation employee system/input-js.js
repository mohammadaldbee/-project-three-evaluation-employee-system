const survey = document.getElementsByClassName("survey");
const myForm = document.querySelector(".survey");
const option1 = document.getElementById("option1");
var e = document.getElementById("list");
var NameOfPerson="";
var text="";
function onChange() {
    NameOfPerson = e.value;
   text = e.options[e.selectedIndex].text;
  console.log(text);
}
e.onchange = onChange;
onChange();
function addtoAsmaa(preson,question,status){
    obj={preson,question,status}
    let asmaaData = JSON.parse(localStorage.getItem('asmaa')) || [];
    asmaaData.push(obj);
    localStorage.setItem('asmaa', JSON.stringify(asmaaData));
}
function addtoEmran(preson,question,status){
    obj={preson,question,status}
    let emranData = JSON.parse(localStorage.getItem('emran')) || [];
    emranData.push(obj);
    localStorage.setItem('emran', JSON.stringify(emranData));
}
function addtoZiad(preson,question,status){
    obj={preson,question,status}
    let ziadData = JSON.parse(localStorage.getItem('ziad')) || [];
    ziadData.push(obj);
    localStorage.setItem('ziad', JSON.stringify(ziadData));
}
function addtoMohammad(preson,question,status){
    obj={preson,question,status}
    let mohammadData = JSON.parse(localStorage.getItem('mohammad')) || [];
    mohammadData.push(obj);
    localStorage.setItem('mohammad', JSON.stringify(mohammadData));
}

function addtoAli(preson,question,status){
    obj={preson,question,status}
    let aliData = JSON.parse(localStorage.getItem('ali')) || [];
    aliData.push(obj);
    localStorage.setItem('ali', JSON.stringify(aliData));
}

function submitData(event){
   
        var ele = document.getElementsByTagName('input');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
            if(ele[i].type=="radio") {

                if(ele[i].checked)
                   if(NameOfPerson=='asmaa'){
                    addtoAsmaa(text,ele[i].name, ele[i].value)

                   }
                   else if(NameOfPerson=='emran'){
                    addtoEmran(text,ele[i].name, ele[i].value)

                   }
                   else if(NameOfPerson=='ziad'){
                    addtoZiad(text,ele[i].name, ele[i].value)

                   }
                   else if(NameOfPerson=='mohammad'){
                    addtoMohammad(text,ele[i].name, ele[i].value)
                }
                else if(NameOfPerson=='ali'){
                    addtoAli(text,ele[i].name, ele[i].value)
                }
                

            }
          
        }
    }
 

}
document.getElementById("accountName").textContent = window.sessionStorage.getItem("nameValue");

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
    clock.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    clock.style.color = "#14569D"
  }

  setInterval(time, 1000);
  
  function logout(){
    sessionStorage.clear();
    window.close();
   
}
