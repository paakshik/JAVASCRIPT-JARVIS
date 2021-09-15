const video = document.getElementById("video"),
  content = document.querySelector(".content"),
  canvas1 = document.getElementById("canvas"),
  errorMsg = document.getElementById("spanErrorMsg");
  
 let options = {mimeType: 'video/webm;codecs=vp9,opus'};

  bt2 = document.getElementById("snaps");

  bt2.addEventListener('click',function () {
    recog.start();
    console.log('Start speaking');
  })

var speechRecognition = webkitSpeechRecognition,
recog = new speechRecognition;

recog.interimResults = 0, recog.continuous = 0, recog.maxAlternatives = 1, recog.language = "en-IN";

var constrain = {
   video: !0,
    width: 1280,
    height: 720
};

  async function init() {
  try {
    handleSuccess(await navigator.mediaDevices.getUserMedia(constrain))
  } 
  catch {
    console.log(`failed`) 
  }
}

function handleSuccess(e) {
window.stream = e, video.srcObject = e
}

init()
var context = canvas1.getContext("2d");
recog.onstart =  function(e){
 console.log(e); 
}
recog.onresult = function (e) {

const t = e.resultIndex,
o = e.results[t][0].transcript;
console.log(o);
console.log(`${100*e.results[t][0].confidence} is the confidence level`);
speech(o);
}
 


function speech(e) {
  if (e.includes("capture my photo")){
    img = context.drawImage(video, 0, 0, canvas1.width, canvas1.height)
  }
 
  if (e.includes("Jarvis")){
    window.open("https://paakshik.github.io/JAVASCRIPT-JARVIS/mic", "_self", "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
  } 
  
}
function handleDataAvailable(event) {
  console.log('handleDataAvailable', event);
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

