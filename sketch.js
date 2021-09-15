getNews();
getWeatherDetails(); 
getBattery();
var navLang = navigator.language,
navMemory = navigator.deviceMemory,
navEffect = navigator.connection.effectiveTypex,
navLink = navigator.connection.downlink,
conditionerVariable = 0;

textSlot1 = document.createElement("div"), textSlot1.id = "hammer";
textSlot2 = document.createElement("div"), textSlot2.id = "reema";
textSlot3 = document.createElement("div"), textSlot3.id = "ram";
textSlot4 = document.createElement("div"), textSlot4.id = "shram";
textSlot5 = document.createElement("div"), textSlot5.id = "Jigus";
textSlot6 = document.createElement("div"), textSlot6.id = "krish";
textSlot7 = document.createElement("div"),textSlot7.id = "king"
textSlot8 = document.createElement("div"), textSlot8.id ='ruler'
textSlot9 = document.createElement("div"), textSlot9.id = "rad";

textSlot10 = document.createElement("div"), textSlot10.id = "express", document.body.appendChild(textSlot10);

document.getElementById("cir").appendChild(textSlot4);
document.getElementById("cir6").appendChild(textSlot5);
document.getElementById("cir2").appendChild(textSlot6);
document.getElementById("cir10").appendChild(textSlot7);
document.getElementById("cir20").appendChild(textSlot8);
document.getElementById("cir3").appendChild(textSlot3);
document.getElementById("cir4").appendChild(textSlot9);

var Month = ['Jan','Feb','Mar','Aprail','May','June','July','Auguest','Sept','Oct','Nov','Dec']
var Day = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];

var dateVar = new Date;
let monthName = Month[dateVar.getMonth()];
let date = dateVar.getDate();
let year = dateVar.getFullYear();

const constrains = {
  audio: !1,
  video: !0,
  width: 500,
  height: 500
};
const modelParams = {
flipHorizontal: !0,
imageScaleFactor: .7,
maxNumBoxes: 20,
iouThreshold: .5,
scoreThreshold: .79
};

const videoDiv = document.getElementById("video")
const  content = document.querySelector(".content");
const Josua =  document.querySelector("#Josua");
const microphone = document.querySelector(".talks");
const canvas1 = document.querySelector("#canvass"),
canvasConfig = canvas1.getContext("2d");

const Google = document.getElementById("google_button");
const Youtube = document.getElementById("Youtube");
const Facebook = document.getElementById("Facebook");
const GoogleM =  document.getElementById("Mail");
const Gaana = document.getElementById("Gaana");
const OfficeM = document.getElementById("kk");
const Outlook  = document.getElementById('Out');
const Linkedin = document.getElementById('Link');



window.addEventListener("online", function () {
  dd = "online"
})

 window.addEventListener("offline", function () {
  dd = "offline"
})

document.getElementById("play").addEventListener("click", () => {
  window.open("https://code.whitehatjr.com/s/dashboard", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})


video.addEventListener("play", async function () {
  const e = new SpeechSynthesisUtterance;
  e.text = "All the files are loaded, and I am ready to start, click on the arc reactor for giving commands..", e.volume = 1, e.rate = 1, e.pitch = 1, speechSynthesis.speak(e)

document.querySelector("#hand-Detection").addEventListener("click", () => {
  conditionerVariable = 1;
  handPoseDetector();
})
 document.querySelector("#body-pix").addEventListener("click", () => {
  conditionerVariable = 2;
  loadAndPredict();
})
document.querySelector("#pose-net").addEventListener("click", () => {
  conditionerVariable = 3;
  poseNetDetector()
})
 document.querySelector("#object-detection").addEventListener("click", () => {
  conditionerVariable = 4;
  objectDetect()
})

 document.querySelector("#face-recoginition").addEventListener("click", () => {
  conditionerVariable = 5;
faceRecogntiton();
})
document.querySelector("#null").addEventListener("click", () => {
  conditionerVariable = 0;
});
})




microphone.addEventListener("click", function () {
  window.open("https://paakshik.github.io/JAVASCRIPT-JARVIS/mic", "new window", "width=300,height=300")
})
 
document.querySelector("#Josua").addEventListener("click", function () {
  isWebBLEAvailable() && getDeviceInfo()
})

Josua.addEventListener("mouseover", function () {
  Josua.style.backgroundColor = "violet"
})
Josua.addEventListener("mouseout", function () {
 Josua.style.backgroundColor = "aqua"
})


Google.addEventListener("click", function () {
  window.open("https://www.google.co.in/", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})
Google.addEventListener("mouseover", function () {
Google.style.backgroundColor = "yellow"
})
 Google.addEventListener("mouseout", function () {
  Google.style.backgroundColor = "aqua"
})


 Facebook.addEventListener("click", function () {
  window.open("https://www.facebook.com/", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})

Facebook.addEventListener("mouseover", function () {
 Facebook.style.backgroundColor = "white"
})

Facebook.addEventListener("mouseout", function () {
 Facebook.style.backgroundColor = "aqua"
})

Linkedin.addEventListener("click", function () {
  window.open("https://www.linkedin.com/feed/", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})
 Linkedin.addEventListener("mouseover", function () {
 Linkedin.style.backgroundColor = "green"
})
Linkedin.addEventListener("mouseout", function () {
  Linkedin.style.backgroundColor = "aqua"
})

GoogleM.addEventListener("click", function () {
  window.open("https://mail.google.com/mail/u/0/", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})
 GoogleM.addEventListener("mouseover", function () {
  GoogleM.style.backgroundColor = "grey"
})
 GoogleM.addEventListener("mouseout", function () {
  GoogleM.style.backgroundColor = "aqua"
})


Youtube.addEventListener("click", function () {
  window.open("https://www.youtube.com/", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})
 Youtube.addEventListener("mouseover", function () {
  Youtube.style.backgroundColor = "red"
})
Youtube.addEventListener("mouseout", function () {
  Youtube.style.backgroundColor = "aqua"
})

Gaana.addEventListener("click", function () {
  window.open("https://gaana.com/", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})
Gaana.addEventListener("mouseout", function () {
  Gaana.style.backgroundColor = "aqua"
})
Gaana.addEventListener("mouseover", function () {
  Gaana.style.backgroundColor = "pink"
})

Whatsapp.addEventListener("click", function () {
  window.open("https://web.whatsapp.com/", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})
 Whatsapp.addEventListener("mouseout", function () {
  Whatsapp.style.backgroundColor = "aqua"
})
Whatsapp.addEventListener("mouseover", function () {
  Whatsapp.style.backgroundColor = "gold"
})



OfficeM.addEventListener("mouseout", function () {
  OfficeM.style.backgroundColor = "aqua"
}) 
OfficeM.addEventListener("mouseover", function () {
  OfficeM.style.backgroundColor = "orange"
})
OfficeM.addEventListener("click", function () {
  window.open("https://outlook.office365.com/mail/inbox", "_blank", "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")
})



setInterval(() => {
  textSlot3.innerText = `${monthName} \n  ${date}/${year}\n \n  `;
textSlot8.innerText = `\nAppCode:${navigator.appCodeName}\nCookie: ${navigator.cookieEnabled}\nJava:${navigator.javaEnabled()}\n`;
 let dateVariable = new Date;
    hour = dateVariable.getHours();
    minute = dateVariable.getMinutes();
 a = Day[dateVariable.getDay()]
  textSlot9.innerText = `${a}\n  ${hour}:${minute}`
},1000)

async function modelLoader() {
  return await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"), faceapi.nets.faceRecognitionNet.loadFromUri("/models"), faceapi.nets.ssdMobilenetv1.loadFromUri("/models"), faceapi.nets.ageGenderNet.loadFromUri("/models"), faceapi.nets.faceRecognitionNet.loadFromUri("/models"), faceapi.nets.faceLandmark68Net.loadFromUri("/models"), faceapi.nets.faceExpressionNet.loadFromUri("/models")])
}

 modelLoader().then(async function (e) {
  navigator.getUserMedia({
    video: {}
  }, e => video.srcObject = e, e => console.log(e))
});

async function handPoseDetector(){

  const e = await handpose.load();
  console.log(e)  

  setInterval(async () => {
    if (conditionerVariable === 1){
      const t = await e.estimateHands(video, !0);
    
      
      if (t.length !== 0){
       scrollTo(t[0].boundingBox.topLeft[1], t[0].boundingBox.topLeft[0]), draw(t, canvasConfig, canvas1)
      }
    }
    })
  }


// blazeface detections;
async function detectFace(){
  const model = await blazeface.load();
  console.log(model);
  const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
  setInterval(async () => {
    const predictions = await model.estimateFaces(video, returnTensors);
    BlastFaceDraw(predictions,canvasConfig)
    
  },1000)

}




async function loadAndPredict() {
  const x = await bodyPix.load();
  setInterval(async function () {
    if (conditionerVariable === 2){
      const t = await x.segmentPerson(video),
        n = bodyPix.toColoredPartMask(t),
        o = document.getElementById("canvass");
      bodyPix.drawMask(o, video, n, 20, 0, !1, 15)
    }
    }, 100)
    }

async  function poseNetDetector(){
  const e = await posenet.load();
  setInterval(async function () {
    if (conditionerVariable === 3){
   const t = await e.estimateMultiplePoses(video, {
        flipHorizontal: !1,
        maxDetections: 5,
        scoreThreshold: .5,
        nmsRadius: 20
      });

      drawers(canvasConfig, t, canvas1)
    }
  }, 100)
}

async function objectDetect(){


  cocoSsd.load().then(e => {
    setInterval(() => {
      e.detect(video).then(e => {
        if (4 === conditionerVariable){
        drawDetect(canvasConfig, e, canvas1)
        }
      }, 100)
    })
  })
}


async function faceRecogntiton(){ 
let n =document.getElementById('canvass');
  document.body.append(n);
  const o = {
    width: video.width,
    height: video.height
  };
  faceapi.matchDimensions(n, o), setInterval(async () => {
if (conditionerVariable === 5){
      const e = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions).withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors();
      let a = faceapi.resizeResults(e, o)
      if (a.length !== 0){
        d = a[0].expressions.happy,
        i = a[0].expressions.fearful,
        c = a[0].expressions.angry,
        s = a[0].expressions.disgusted,
        r = a[0].expressions.sad,
        l = a[0].expressions.suprised,
        u = a[0].expressions.neutral;
      }
      expression = [c, r, d, l, s, i, u], setInterval(() => {
        large(expression) === d && (textSlot10.innerText = "😊"), large(expression) === l && (levels = "suprised", textSlot10.innerText = "😲"), large(expression) === c && (levels = "angry", textSlot10.innerText = "😡"), large(expression) === r && (levels = "sad", textSlot10.innerText = "😞"), large(expression) === s && (textSlot10.innerText = "🤢", levels = "disgusted"), large(expression) === i && (textSlot10.innerText = "😨 ", levels = "fearful"), large(expression) === u && (textSlot10.innerText = "😐", levels = "neutral")
      }, 1), n.getContext("2d").clearRect(0, 0, n.width, n.height), faceapi.draw.drawDetections(n, a), faceapi.draw.drawFaceExpressions(n, a), faceapi.draw.drawFaceLandmarks(n, a), a.forEach(e => {
      })
}
  })
}




const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  rightFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20]
};

function draw(e, t, n) {
  t.clearRect(0, 0, n.width, n.height), e.length > 0 && e.forEach(e => {
    const n = e.landmarks;
    for (let e = 0; e < Object.keys(fingerJoints).length; e++) {
      let o = Object.keys(fingerJoints)[e];
      for (let e = 0; e < fingerJoints[o].length - 1; e++) {
        const a = fingerJoints[o][e],
          d = fingerJoints[o][e + 1];
        t.beginPath(), t.moveTo(n[a][0], n[a][1]), t.lineTo(n[d][0], n[d][1]), t.strokeStyle = "plum", t.lineWidth = 4, t.stroke()
      }
    }
    for (i = 0; i < n.length; i++) {
      const e = n[i][0],
        o = n[i][1];
      t.beginPath(), t.arc(e, o, 4, 0, 3 * Math.PI), t.lineWidth = 3, t.strokeStyle = "#FF0000", t.stroke()
    }
  })
}

function drawers(e, t, n) {
  t.forEach(t => {
    e.clearRect(0, 0, n.width, n.height), keys = t.keypoints, keys.forEach(t => {
      e.beginPath(), e.arc(t.position.x, t.position.y, 2, 0, 2 * Math.PI, !1), e.lineWidth = 3, e.strokeStyle = "black", e.fillStyle = "rgba(255,0,0,0.1)", e.stroke(), e.fill()
    })
  })
}

function drawDetect(e, t, n) {
  e.clearRect(0, 0, n.width, n.height), t.forEach(t => {
    const [n, o, a, d] = t.bbox;
    e.strokeStyle = "black", e.font = "18px Arial", e.fillStyle = "black", e.beginPath(), e.fillText(t.class, t.bbox[0], t.bbox[1]), e.rect(t.bbox[0], t.bbox[1], t.bbox[2], t.bbox[3]), e.stroke()
  })
}
function BlastFaceDraw(predictions,ctx){
  for (let i = 0; i < predictions.length; i++) {
    const start = predictions[i].topLeft;
    const end = predictions[i].bottomRight;
    const size = [end[0] - start[0], end[1] - start[1]];
 
    // Render a rectangle over each detected face.
    
 ctx.clearRect(0,0,canvas1.width,canvas1.height);
 ctx.fillStyle = 'rgba(225,225,225,0.5)';
ctx.fillRect(start[0]-100, start[1]-100, size[0]-50, size[1]-50);

  }
}
function isWebBLEAvailable() {
  return !!navigator.bluetooth || (console.log("Bluetooth is not available"), !1)
}

function getDeviceInfo() {
  navigator.bluetooth.requestDevice({
    acceptAllDevices: !0
  }).then(e => {
    textSlot7.innerText = `Device: ${e.name}\nGatt ${e.gatt}\n\nId: ${e.id}\n\n`, console.log(e.gatt)
  })
}
const large = e => {
  he = 0;
  for (let t = 0; t < e.length; t++) e[t] > he && (he = e[t]);
  return he
};

function getWeatherDetails() {
  "geolocation" in navigator && navigator.geolocation.getCurrentPosition(async function (e) {
    const t = `https://api.openweathermap.org/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&appid=f49676e4e771d9a88cb26ad40994c652&units=metric`;
    let n = await fetch(t),
      o = await n.json();
    setInterval(() => {
      ran = o.main.temp, rans = o.main.humidity, rnn = o.name, rands = o.weather[0].description, ranysd = o.sys.country, rany = Math.floor(o.coord.lat), ranys = Math.floor(o.coord.lon), r = o.visibility, ransds = o.wind.speed, textSlot4.innerText = `     Country:${ranysd}\n      City:${rnn}\n      Device:${navigator.appName}\n           Platform:   ${navigator.platform}\n     \n      `,  textSlot6.innerText = `Temprature:${ran}*C\n      Humidity: ${rans}g/kg\n      Weather:${rands}\n   Visiblity:${r}m\n      Wind:${ransds}km\n\n`
    }, 100)
  })
}



function getNews() {
  setTimeout(() => {
    fetch('http://api.mediastack.com/v1/news?access_key=a01cb74bb4105d86e31e03aca5811465&keywords=us&countries=us&search=india').then(e => e.json()).then(e => {
      e.data.forEach(function (e) {
        e.title = e.title.replace("Terms of Use", ""), e.title = e.title.replace("Contact Us", ""), e.title = e.title.replace("About Us", ""), e.title = e.title.replace("US turmoil", ""), e.title = e.title.replace("The Onus is On Us", ""), e.title = e.title.replace("This is Us", ""), textSlot2.innerText = `${e.title}`, document.getElementById("cir7").appendChild(textSlot2)
      })
    })
  }, 1)
}

function getBattery() {
  navigator.getBattery().then(e => {
    var t = Math.round(100 * e.level);
    navigator.storage.estimate()
    .then(function (n) {

      let bs = navigator.hardwareConcurrency
      setInterval(() => {
        !0 === navigator.onLine && (dd = "online");
       !1 === navigator.onLine && (dd = "offline");
        dse.innerText = `\nOnline: ${dd}\n     Processor: ${Math.floor(bs)}Gz\nType: ${navEffect}\n\n`;
      })
      
      e.addEventListener("levelchange", function (n) {
        t = Math.round(100 * e.level)
        textSlot1.innerText = `Battery : ${t}%${daysd}\n  Language:${navLang}\n  RAM:${navMemory}GB\n Bandwidth:${navLink}bpm`
      })
      
      daysd = "", e.addEventListener("chargingchange", function (n) {
        !0 === e.charging && (daysd = "🔋", textSlot1.innerText = `Battery : ${t}%${daysd}\n    Language:${navLang}\n    RAM:${navMemory}GB\n    Bandwidth:${navLink}bpm`),
        !1 === e.charging && (daysd = "", textSlot1.innerText = `Battery : ${t}%${daysd}\n     Language:${navLang}\n     RAM:${navMemory}GB\n     Bandwidth:${navLink}`)
      })
      !0 === navigator.onLine && (dd = "online")
      !1 === navigator.onLine && (dd = "offline"), textSlot1.innerText = `\nBattery : ${t}%${daysd}\nLanguage:${navLang}\nRAM:${navMemory}GB \nBand:${navLink}bpm\n`, document.getElementById("cir9").appendChild(textSlot1), dse = document.createElement("div"), dse.id = "Jigu", dse.innerText = `Online:${dd}\nSpace:${Math.floor(bs)}\nType:${navEffect}\n`, document.getElementById("cir8").appendChild(dse)
    })
  })
}
