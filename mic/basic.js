function evaluate(input) {
  try {
    var result = eval(input);
    responsiveVoice.speak(`${result.toFixed(2)} is the answer.`), mess = result
  } catch (e) {
    console.log(e), mess = ""
  }
}

function imagify(e, t) {
  fetch("https://api.nasa.gov/planetary/earth/imagery?lon=" + t + "&lat=" + e + "&date=2021-03-20&api_key=pwgrniwbyiaRmm0rdniDQYkWVWkVtahHggOD2GHA").then(e => e.json()).then(e => console.log(e))
}

function manipulateWeatherData(e) {
  let t = e.name,
    s = e.main.temp,
    a = e.weather[0].main,
    i = e.main.humidity,
    n = e.visibility,
    o = e.wind.speed;
  console.log(a, t);
  const c = new SpeechSynthesisUtterance;
  c.text = `your location is ${t},the current temperature of your city is ${s}Celsius,your city's humidity is ${i}%, your city's visibility is ${n}metres,your city's wind speed is ${o}  meter/sec, your weather's description is ${a}`, c.volume = 1, c.rate = 1, c.pitch = 1, speechSynthesis.speak(c)
}

function clocks(e) {
  let t = Math.floor(e / 60),
    s = e % 60;
  return t, `${Math.floor(e/360)}:${t}:${s}s`
}