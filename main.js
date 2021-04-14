var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult() = function run (event){
    console.log(event);
    var content = event.resuts[0][0].trascript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}