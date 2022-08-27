document.getElementById("list").onchange = function () {
    getinfo();

  };
  function getinfo() {
    let select = document.getElementById("list");
    var employeeName = select.options[select.selectedIndex].value;

    document.getElementById("cr7").innerHTML = ""
    var retrievedData = localStorage.getItem(employeeName);
    var movies2 = JSON.parse(retrievedData);
    for (i = 0; i < movies2.length; i++) {

      obj = movies2[i]
      if (obj.status == "poor") {
        document.getElementById(`color${i}`).innerHTML = obj.status
        document.getElementById(`color${i}`).style.color = "red"
        document.getElementById(`border${i}`).style.borderColor = "red"

        if (obj.question == "time") {
          document.getElementById(`cr7`).innerHTML += `<b>Time :</b>  Time management is nothing more than a process for effectively managing time for 
your work. It doesn’t require much effort, but good planning is essential..<br><br>`
        }
        if (obj.question == "dressing") {
          document.getElementById(`cr7`).innerHTML += `<b> Dressing :</b>  Dressing plays an essential role in public speaking. It is the way you dress which speaks volumes about your personality and confidence. A public speaker needs to dress as per the occasion, time and season. If you are addressing your office colleagues during the office hours,
it is essential to stick to formal dressing. <br><br>`
        }
        if (obj.question == "speech") {
          document.getElementById(`cr7`).innerHTML += `<b> Speech :</b> Practice Beforehand. Practice replacing filler words like "um," "so," and "like" with silence. ...
Work the Room. ...
Prepare with Relaxation Techniques. ...
Don't Read Your Speech. ...
Stand Up Straight.<br><br>`

        }
        if (obj.question == "done") {
          document.getElementById(`cr7`).innerHTML += `<b>done :</b>  never  take  advice  on an area  of life form someone  who  is  not doing  better  in it  than  you are . choose your mentors and  teachers wisely .
learn  from those  who already are  or have  what you want to become or have . learn "up"<br><br>`
        }
        if (obj.question == "accomplish") {
          document.getElementById(`cr7`).innerHTML += `<b>Accomplish :</b>Find the balance that works for today. Work and life are both demanding. ...
Focus on positive relationships. ...
Be brave. ...
Never stop learning. ...
Have fun. ...
Practice optimism. ...
Challenge your perspective. <br><br>`
        }
        if (obj.question == "work") {
          document.getElementById(`cr7`).innerHTML += `<b>Work :</b> Never Stop Learning. One of the most powerful things to advance your career -- or in any circumstance for that matter -- is knowledge. ...
Work On Goals. ...
Be Organized. ...
Be A Team Player. ...
Value Your Network. ...
Value Your Health. ...
Focus On Results. ...
Speak Up. <br><br>`
        }
        if (obj.question == "learning") {
          document.getElementById(`cr7`).innerHTML += `<b>Learning :</b>  Pick a place and time. Everyone has their own idea about the best place and time to study. ...
Study every day. ...
Plan your time. ...
Discover your learning style. ...
Review and revise. ...
Take breaks. ...
Ask for help. ...
Stay motivated. <br><br>`
        }
        if (obj.question == "asked") {
          document.getElementById(`cr7`).innerHTML += `<b>Ask for help :</b> Earn responses to your requests by generously helping others in the first place. ...
Know what you want to ask. ...
Ask SMARTly. ...
Don't assume you know who and what people know. ...
Create a culture where asking for help is encouraged <br><br>`
        }
        if (obj.question == "Creativity") {
          document.getElementById(`cr7`).innerHTML += `<b>Creativity :</b>  Practice. It may sound obvious, but practice is essential for creativity. ...
Discover Quality in Quantity. Creativity is not about perfection. ...
Look to the Ordinary. ...
Collaborate With Others. ...
Experiment With Different Styles. ...
Have Confidence. ...
Give Your Brain a Refresh.`
        }


      }
      else if (obj.status == "good") {
        document.getElementById(`color${i}`).innerHTML = obj.status
        document.getElementById(`color${i}`).style.color = "gold"
        document.getElementById(`border${i}`).style.borderColor = "gold"
      }
      else {
        document.getElementById(`color${i}`).innerHTML = obj.status
        document.getElementById(`color${i}`).style.color = "lightgreen"
        document.getElementById(`border${i}`).style.borderColor = "lightgreen"
      }
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
function cleardata(){
  localStorage.removeItem("ziad");
  localStorage.removeItem("asmaa");
  localStorage.removeItem("emran");
  localStorage.removeItem("ali");
  localStorage.removeItem("mohammad");

}