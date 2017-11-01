var typeagn;
window.onload = function here() {
  var textarea = document.getElementById("textarea");
  var demo = document.getElementById("demo");
  var timer;
  var seconds = 1000 * 60;
  var messageLength;
  var s = ["In computing, a computer keyboard is a typewriter-style device which uses an arrangement of buttons or keys to act as a mechanical lever or electronic switch. Following the decline of punch cards and paper tape, interaction via teleprinter-style keyboards became the main input device for computers.",
  		   "The keyboard on the teleprinter played a strong role in point-to-point and point-to-multipoint communication for most of the 20th century, while the keyboard on the keypunch device played a strong role in data entry and storage for just as long.",
  		   "In normal usage, the keyboard is used as a text entry interface to type text and numbers into a word processor, text editor or other programs. In a modern computer, the interpretation of key presses is generally left to the software."]
typeagn = document.getElementById("typeagn");
typeagn.disabled = true;
var item = Math.floor(Math.random()*s.length);
document.getElementById("article").innerHTML = s[item];


  textarea.addEventListener("keypress", startTimer);
  function startTimer() {
    if (seconds == 60000) {
      timer = setInterval(startTimer, 1000);
    }
    seconds -= 1000;
    textarea.removeEventListener("keypress", startTimer);
    document.getElementById("timer").innerHTML = "0:" + seconds / 1000;
    str = document.getElementById("textarea").value;
    messageLength = textarea.value.length;
    document.getElementById("count").innerHTML = messageLength;
    if (seconds == 0) {
      clearInterval(timer);
      document.getElementById("result").innerHTML =
        "You type" + " " + messageLength + " " + "chars/min";
        accuracy(messageLength);
    }
  }

  document.getElementById("reset").addEventListener("click", function() {
    console.log("reset");
    document.getElementById("textarea").value = "";
    document.getElementById("timer").innerHTML = "1:00";
    document.getElementById("count").innerHTML = "0";
     document.getElementById("result").innerHTML = "";
     here();

    clearInterval(timer);
  });
};
function accuracy(msg){
var article = document.getElementById("article").innerHTML;
var str = document.getElementById("textarea").value;
var after = '';
var counter = 0;
for(var i=0;i<str.length;i++)
{
  var a = article.charAt(i);
  if(str.charAt(i) != a)
  {
    
    after = after + "<span>" + a + "</span>";
    
  }
  else
  after = after +  a;
	
}
for(var i=0;i<str.length;i++)
{
  var a = article.charAt(i);
  if(str.charAt(i) == a)
  {
  	counter++;
  }
}

var acc = Math.floor((counter/str.length)*100);
document.getElementById("acc").innerHTML = acc + "%";
document.getElementById("article").innerHTML = after;
document.getElementById("article").style.color = "green";
alert("Wrongly typed characters are shown in red color");
typeagn.disabled = false;
reset.disabled = true;

}
