const speechRec = webkitSpeechRecognition;


gotDatas()

function gotDatas() {


  recog = new speechRec;
  recog.onstart = function () {
    console.log("Tell me what you want to search")
  }
  btn = document.querySelector(".talk2"), btn.addEventListener("click", () => {
    recog.start()
  })
  
  recog.onresult = function (e) {
    const t = e.resultIndex,
      s = e.results[t][0].transcript;
    console.log(s), speechRecog(s)
  };

  function speechRecog(message) {
if (message.includes('tell me about')){
    message = message.replace('tell me about', '');
    fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${message}&gsrlimit=20&prop=pageimages|extracts&exintro&explaintext&exlimit=max&format=json&origin=*`)
      .then(res => res.json())
      .then(data => {
        var keys = Object.keys(data.query.pages)[0]
        responsiveVoice.speak(data.query.pages[keys].extract)

        if (data.query.pages[keys].thumbnail.source !== undefined) {
          window.open(data.query.pages[keys].thumbnail.source, "_blank", "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
        }
      })

  }
  }
  if (message.includes('lets go back to JARVIS')){
    window.open("https://paakshik.github.io/JAVASCRIPT-JARVIS/mic", "_self", "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
  }
}