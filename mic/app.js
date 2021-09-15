// CORS ERROR
// THE DASHBOAR GETTING SLOW
// MAKE MY AI MODELS EFFIECIENT
// DISCUSSION OF FACE MATCHER API
// LITTLE DISCUSSION ABOUT EMAIL PROBLEM
// KEYWORD TRIGGER CORRECT
// MORE CODE IMPROVEMENT IN ANY CASE
// CHECK DOWNLOAD AND VIDEO FACILITY IN CAMERA.
// MORE FEATURES IDEAS.
//GITUB ISSUE

// SUGGESTING
// CREATE MULTILINE NEWS TEXTBOX.
// SEND API NOTEPAD.
// WRITE ALL COMMANDS. 
// CHECK AI CONSOLE.
//LIST OF FUNCTIONALITY.
responsiveVoice.setDefaultVoice("UK English Male");
const nameGreeting = [
        "Hello, my name is Jarvis, a prototype of Alexa.",
        "Bonjour, Paakshik my name is Jarvis.",
        "My name is Jarvis, Thank you Paakshik."
    ],
    howAreYou = [
        'I am good , Hope that you are also good',
        'I am excellent',
        'I am very good, thank you for asking'

    ],
    HiGreeting = [
        "Hi Paakshik",
        "Hello Paakshik"
    ]

// commands array for recording all the commands.
var commandFolder = [],
    mess,
    Clock = document.createElement("div");

const speechRecognition = webkitSpeechRecognition,
    recog = new speechRecognition,
    mic = document.getElementById("start");

// setting the properties  of the recognition
recog.interimResults = !1, recog.continuous = !0, recog.maxAlternatives = 1, recog.language = "en-IN";

// getting the element button from the DOM.

// creating the addEvetLisener on the start button.
mic.addEventListener("click", () => {
    recog.start(), mic.style.backgroundColor = "aqua"
});

// setting a addEventListener on the recognition when it ends
recog.onresult = function (e) {
    // changing the color of thestart button
    mic.style.backgroundColor = "black"
    // stopping the recognition

    recog.stop();
    // getting the index of the result
    const t = e.resultIndex
    // accessing the transcript from the results    
    const o = e.results[t][0].transcript;
    console.log(o)
    // console.log itand the (confidence level - 100*e.results[t][0].confidence)

    // calling the editor functions to run on the  commands
    editor(o);
    // adding the transcript on the commands array.
    commandFolder.push(o) // ----
}

// creating the editor function.
function editor(voice) {

    if (voice.includes('name')) {
        // telling name
        if (voice.includes('I want to know more about you')) {
            responsiveVoice.speak("J.A.R.V.I.S. (Just A Rather Very Intelligent System) is a fictional artificial intelligence that first appeared in the Marvel Cinematic Universe where he was voiced by Paul Bettany in Iron Man, Iron Man 2, The Avengers, Iron Man 3, and Avengers: Age of Ultron. The AI is based on the Marvel Comics.")
           } 
        else {
            responsiveVoice.speak(nameGreeting[Math.round(Math.random(1, 2))]);
        }
    }
if (voice.includes('stop')){
responsiveVoice.pause();
}
    if (voice.includes('how are')) {
        // speaking the responce.
        responsiveVoice.speak(howAreYou[Math.round(Math.random(0, 2))]);

    }

    if (voice.includes('hi')) {

        // speaking the responce.
        responsiveVoice.speak(HiGreeting[Math.round(Math.random(0, 1))]);
    }

    if (voice.includes('good')) {
        if (voice.includes('afternoon')) {
            // speaking the bid back.
            responsiveVoice.speak("Good afternoon Paakshik")
        }
        if (voice.includes('morning')) {
            // speaking the text
            responsiveVoice.speak("Good morning Paakshik")
        }
        if (voice.includes('evening')) {
            // speaking the text
            responsiveVoice.speak("Good evening Paakshik")
        }
    }

    if (voice.includes('please open')) {
        if (voice.includes("WhatsApp")) {
            // speaking the text
            responsiveVoice.speak("Ok sir opening Whatsapp, please study")
            // opening Whatsapp
            web_opener('https://web.whatsapp.com/')
        }
        // telling if we want to open Google.
        else if (voice.includes('Google')) {
            // opening Google
            web_opener('https://www.google.co.in/')
            // speaking the text
            responsiveVoice.speak("Ok sir");
        }
        // telling if they want to oepn Youtube
        else if (voice.includes('YouTube')) {
            // opening Youtube
            web_opener('https://www.youtube.com/')
            // speaking the text
            responsiveVoice.speak("Ok sir");
        }
        // telling if he want to open whitehat junior
        else if (voice.includes("white hat junior")) {
            // speaking the text
            responsiveVoice.speak("Ok  sir opening whitehatjunior, please code my friends")
            // opening whitehat junior
            web_opener('https://code.whitehatjr.com/s/dashboard')
        }
        // telling if wnat to open hotstar
        else if (voice.includes("hotstar")) {
            // speaking the text
            responsiveVoice.speak("Ok sir , opening Disney hotstar")
            // opening hotstar
            web_opener('https://www.hotstar.com/in');
        }

    }
    if (voice.includes("time")) {
        // creating  a new Date
        const newDate = new Date()

        // getting hour from date
        const latestHour = newDate.getHours();
        // getting  minutes from Date.
        const latestMinutes = newDate.getMinutes();
        //creating a array for giving responce
        const latestYear= newDate.getFullYear();
        const latestMonths = newDate.getMonth();
        console.log(newDate,latestYear,latestMonths,newDate.getDate())
        const time = [
            "The time is " + latestHour + ":" + latestMinutes + 'and the date is '+ newDate.getDate() + 'the month is '+latestMonths+' the year is '+ latestYear,
            "Sir the time on the clock is " + latestHour + ":" + latestMinutes + 'and the date is '+ newDate.getDate() + 'the month is '+latestMonths+' the year is '+ latestYear,
            "Sir it is " + latestHour + ":" + latestMinutes + 'and the date is '+ newDate.getDate() + 'the month is '+latestMonths+' the year is '+ latestYear

        ]

        // speaking the text
        responsiveVoice.speak(time[Math.round(Math.random(0, 2))])
    }

    // for reloading the site ----
    if (voice.includes('start again')) {
        // reloading the site.
        window.location.reload()
    }

    // telling if asked about PC
    if (voice.includes('PC')) {

        responsiveVoice.speak(`${navigator.appName},${navigator.appVersion},the language is ${navigator.language} and the app code name is ${navigator.appCodeName}`)
    }


//GETTING SOME ERRORS
    // // telling if send email
       // if (voice.includes("send email")) {
// // ]]]   mail = prompt('Please tell the email-id');
// // ]]]   subject = prompt('Please tell the subject')
// // ]]]   body = prompt('Please tell the body')
 
// //  ]]]       // setting the  username.
// //  ]]]       emailjs.init("user_98uT5o1W1FRCF84I2rna5");
// //  ]]]       // sending the email using a function
// //  ]]]       emailjs.send('service_z16pmrl', 'template_li9wg5v')


// //     }


    if (voice.includes("battery")) {
        // getting the  promise from Navigator.battery.
        navigator.getBattery().then(function (battery) {
            // getting the level from the responce
            var batteryLevel = Math.ceil(battery.level * 100);
            // speaking the responce.
            responsiveVoice.speak(`${batteryLevel.toString()}% is the battery level of the PC`)
        })
    };

    if (voice.includes("photo of the day")) {
        // opening the image using fetch request.
        fetch("https://api.nasa.gov/planetary/apod?api_key=pwgrniwbyiaRmm0rdniDQYkWVWkVtahHggOD2GHA")
            .then(e => e.json())
            .then(e => web_opener(e.hdurl))

    }

    if (voice.includes("seconds")) {
        // covering the text and getting the seconds. Also displaying the clock..
        voice = (voice = (voice = (voice = (voice = voice.toLowerCase()).replace("set a", "")).replace("countdown", "")).replace("for", "")).replace("seconds", ""), coundown = voice
        // setting  a interval for changing the time and displaying the clock and stopping when the time is over. 
        setInterval(
            function () {
                coundown > 0 && ( 0 === coundown && 1 === coundown && ( responsiveVoice.speak("Paakshik, Coundown is over"),coundown = 0))
            }, 1000)
    }
    //telling if the user wants to search on google.
    if (voice.includes("on Google")) {
        // changing the message and getting the search query.
        voice = voice.replace("search", "");
        voice = voice.replace("Google", "");
        voice = voice.replace("Jarvis", "");
        voice = voice.replace("on", "");

        // telling the text searched.
        responsiveVoice.speak("searched " + voice)

        // showing the window that was searched.
        web_opener("https://www.google.com/search?query=" + voice);

    }

    //telling if the user wants to search on Youtube.
    if (voice.includes("search on YouTube")) {
        // changing the message and getting the search query.
        voice = voice.replace("search", "")
        voice = voice.replace("YouTube", "")
        voice = voice.replace("Jarvis", "")
        voice = voice.replace("please", "")
        voice = voice.replace("on", "");
        // telling the text searched.
        responsiveVoice.speak("searched " + voice);
        // showing the window that was searched.
        web_opener("https://www.youtube.com/search?q=" + voice);
    }


    //telling if the user wants to add a meeting.
    if (voice.includes('I have a meeting')) {
        // changing the text and getting the hour and minute of the meeting.
        voice = voice.replace('I', '');
        voice = voice.replace('have', '');
        voice = voice.replace('a', '');
        voice = voice.replace('meeting', '');
        voice = voice.replace('at', '');
        voice = voice.replace('minutes', '');
        voice = voice.replace('hours', ',');

        // spliting thetwo strings to an array.
        voice = voice.split(',')

        // converting the mesage strings to integers.
        voice[0] = Number(voice[0]);
        voice[1] = Number(voice[1]);
meet= localStorage.getItem("meet")
if (meet === null) {
    meetA = [];
} else {
    // else parsing the notes.
    meetA = JSON.parse(meet)
}
// pushing the note to the array.

meetA.push('You have a meeting at '+voice[0]+'hours ,'+voice[1]+' minutes')
// setting the notes in the local storage and stringify it.
localStorage.setItem("meet", JSON.stringify(meetA))
        // setting a inerval
        setInterval(function () {
            // creating a  new date.
            var date = new Date()
            ///setting a if conditon to check if the time is right now
            if (date.getHours() === voice[0] || date.getHours() === (voice[0] + 12)) {
                if (date.getMinutes() === voice[1] && date.getSeconds() === 0) {
                    //speaking the responce
                    responsiveVoice.speak('I think your meeting is started which was on ' + voice[0] + ' hours and ' + voice[1] + ' minutes.')
                }
            }
        }, 1000)
    }

    // creating a  variable for the answer
if (voice.includes('tell me all my meetings')){
    responsiveVoice.speak(`${localStorage["meet"]} are meetings added by you.`)
}

    // telling if the user want to perform addition
    if (voice.includes('+')) {

        // setting the message = to mess
        mess = voice;
        // setting a timeout
        setTimeout(function () {
            // evaluating the asnwer from the string.
            evaluate(voice);
        }, 2000);

    }

    // telling if the user want to perform subtraction
    if (voice.includes('-')) {
        // setting the message = to mess
        mess = voice;
        // setting a timeout
        setTimeout(function () {
            // evaluating the asnwer from the string.
            evaluate(voice);
        }, 200);
    }

    // telling if the user want to perform multplication
    if (voice.includes('x') ||voice.includes('X') ) {
        // setting the message = to mess
        voice = voice.replace('x','*');
        voice = voice.replace('X','*');
        mess = voice;
        // setting a timeout
        setTimeout(function () {
            // evaluating the asnwer from the string.
            evaluate(voice);
        }, 200);
    }
    // telling if the user want to perform division
    if (voice.includes('/')) {
        // setting the message = to mess
        mess = voice;
        // setting a timeout
        setTimeout(function () {
            // evaluating the asnwer from the string.
            evaluate(voice);
        }, 200);
    }

    //  // telling if the user want to perform square
    if (voice.includes('square')) {
        //         // setting the a

        voice = voice.replace('square', '')
        num = voice;

        responsiveVoice.speak(`${Math.pow(num,2)}`)

    }
    if (voice.includes('cube')) {
        voice = voice.replace('cube', '')
        num = voice;

        responsiveVoice.speak(`${Math.pow(num,3)}`)
    }

    //  telling if the user wants to delete all the notes
    if (voice.includes("delete all note")) {
        // clearing all the notes.
        localStorage.clear();
        // speaking about it.
        responsiveVoice.speak("All the notes are deleted")
    }
    // telling if the user wnats to knwo about his notes.
    if (voice.includes("tell me all my notes")) {
        // speaking all is notes.
        responsiveVoice.speak(`${localStorage["notes"]} are notes added by you.`)
    }
    // tell  if the user wants to wite a note.
    if (voice.includes('write a note')) {
        // setting the note to message by getting the note from it.

        note = voice.replace('write a note', '');
        // creating a new date.
        newDate = new Date();
        // creating a new notein localstorage.
        var notes = localStorage.getItem("notes")

        //cen=king whether  note is equal to null
        if (notes === null) {
            notesA = [];
        } else {
            // else parsing the notes.
            notesA = JSON.parse(notes)
        }
        // pushing the note to the array.
        notesA.push(`${note}  and the 
        time was ${newDate.getHours()} hours ,${newDate.getMinutes()} minutes  and ${newDate.getSeconds()} seconds`)
        // setting the notes in the local storage and stringify it.
        localStorage.setItem("notes", JSON.stringify(notesA))
        // notifing the user that it is completed.
        responsiveVoice.speak("Done Paakshik.")
    }

    // for getting my location
    if (voice.includes("tell me my place")) {
        // settign a condition to get the geolocation.
        if ('geolocation' in navigator) {
            // creating a async function to get the current position from the geolocation.

            navigator.geolocation.getCurrentPosition(async function (position) {
                // setting the latitude1 to the person's latitiude.
                let latituteCoords = position.coords.latitude;
                // flooring the latitude
                latituteCoords = Math.floor(latituteCoords);
                // setting the longitude to users longitude.
                let longitudnalCoords = position.coords.longitude;
                // flooring the longitude
                longitudnalCoords = Math.floor(longitudnalCoords);


                // speaking the latitude ad longitude.
                responsiveVoice.speak(`Your location is ${latituteCoords} and ${longitudnalCoords}`)

            });
        }

    }

    // tell if the user asks for effective type.
    if (voice.includes("please tell me my effective type")) {
        //setting bers as the effective type.
        bers = navigator.connection.effectiveType
        // speaking the effective type.
        responsiveVoice.speak("Sir your effective type is " + bers + ".")
    }
    ////////////////////////////////////////////////////////
    if (voice.includes("please tell me my data transfer")) {
        bers1 = navigator.connection.downlink;
        responsiveVoice.speak("Sir your data type is" + bers1 + ".")
    }

    //for getting weather report
    if (voice.includes("show weather report")) {

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {

                let latitudeCoords = position.coords.latitude;
                let longitudeCoords = position.coords.longitude;
                const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeCoords}&lon=${longitudeCoords}&appid=c7f56b0957bdf4a8d6bc449dfa156863&units=metric`;
                let responce = await fetch(api_url);
                let data = await responce.json();
                manipulateWeatherData(data)
            })
        }

    }

    // for telling a joke
    if (voice.includes("joke")) {
        async function generateJokes() {
            const jokes = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const jokesRes = await jokes.json();


            responsiveVoice.speak(`The joke is${jokesRes.joke.toString()}`)

        }
        generateJokes();

    }

    // for getting info from wikipedia
    if (voice.includes('Wikipedia')) {
        web_opener("https://paakshik.github.io/JAVASCRIPT-JARVIS/Wikipedia/")
    }

    //for clicking my picture
    if (voice.includes('open camera')) {
        web_opener('https://paakshik.github.io/JAVASCRIPT-JARVIS/Camera/')
    }

    // for getting informataion about the movie
    if (voice.includes("description of")) {
        var movie = voice;
        movie = movie.replace("description of", '');

        var web = `https://api.themoviedb.org/3/search/movie?api_key=91dbe072499060a1f8c83b6eb112ca11&query=${movie}`

        fetch(web).then((data) => data.json()).then((data) => {

            if (data.results.length > 0) {

                responsiveVoice.speak(`${data.results[0].overview} is the overview of movie.`)
            }

        })
    }
    if (voice.includes("popularity of")) {
        var movie1 = voice;
        movie1 = movie1.replace('popularity of', '')
        var webs = `https://api.themoviedb.org/3/search/movie?api_key=91dbe072499060a1f8c83b6eb112ca11&query=${movie1}`

        fetch(webs).then((data) => data.json()).then((data) => {
            if (data.results.length > 0) {
                responsiveVoice.speak(`${data.results[0].popularity} is the popularity of movie.`)
            }
        })
    }

    if (voice.includes("weather forecast")) {
        voice = voice.toLowerCase()
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=J4QK42FNN5WVM98AZBZRR6FZW&dataElements=default&locations=Ajmer%2C%20RJ%2C%20IN")
            .then(data => data.json())
            .then(data => {
                for (i = 1; i < 4; i++) responsiveVoice.speak(`The date is ${data.location.values[i].datetimeStr.slice(0,10)},the description is ${data.location.values[i].conditions},the visiblility is ${data.location.values[i].visibility}km, the humidity is  ${data.location.values[i].humidity}, the maximum temprature would be ${data.location.values[i].maxt} Celcius . the minimum temprature would be ${data.location.values[i].mint}  Celcius, the estimated temprature would be ${data.location.values[i].temp} Celcius.`)
            })
        }
    if (voice.includes("play")) {
        (voice = (voice = (voice = (voice = voice.toLowerCase()).replace("play", "")).trim()).replace(/(^\s+|\s+$)|\s/g, "-"), r = "https://gaana.com/song/" + voice, web_opener(r))
    }

   

    if (voice.includes('virus cases')) {
        voice = voice.replaceAll('virus cases of', '');
        voice = voice.trim();

        fetch("https://api.covid19api.com/summary").then(data => data.json()).then(data => {

            data.Countries.forEach(t => {
                t.Country === voice && responsiveVoice.speak(`$${t.Date} is the date when the data was last updated.${t.NewConfirmed} are the newly confirmed cases.${t.NewRecovered} are the newly recovered cases.${t.NewDeaths} are the newly demised cases.${t.TotalConfirmed} are the total confirmed cases.${t.TotalRecovered} are the total recovered cases.${t.TotalDeaths} are the total demised cases.`)
            }, 100)
        })

    }





if (voice.includes("location of International Space Station")) {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(e => e.json())
            .then(e => {
                lon = e.iss_position.longitude, lat = e.iss_position.latitude, responsiveVoice.speak(`${lat} and ${lon} are the latitudnal and longitunal coordinates of ISS.`)
            })
    }

    // for all type of news
    if (voice.includes("tell me news")) {
        var query = voice;
        query = query.replace('tell me news');
        var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=bae4e810bb804f2c8f6125607c145398`;
        fetch(url)
            .then((data) => data.json())
            .then((data) => {


                for (let i = 0; i < 4; i++) {
                    console.log(data.articles[i])


                    responsiveVoice.speak(`The headline for the news is: '${data.articles[i].title}' and This is the description for the news: '${data.articles[i].description}' and For reading further click on: '${data.articles[i].url}'`)

                }
            });
    }

    // for covid related news /// SOLVE CROSS ORIGIN ERROR
    if (voice.includes('tell me covid cases')) {
        var virus_data = voice;

        virus_data = virus_data.replace('tell me covid cases of', '')
        virus_data = virus_data.trim()

        URLs = 'https://api.covid19india.org/data.json';
        fetch(URLs)
            .then((data) => data.json())
            .then((data) => {
                pro = (data.statewise)
                pro.forEach(element => {

                    if (element.state === virus_data) {
                        const active = element.active
                        const confirmed = element.confirmed
                        const recovered = element.recovered
                        const deaths = element.deaths;


                        responsiveVoice.speak("The state you searched for is " + virus_data + ".The active cases are " + active + ".The recovered cases are " + recovered + ".The deaths are " + deaths + '.')



                    }
                });
            });
    }

}


function changer(id, color) {
    document.getElementById(id).style.background = color;

}

function web_opener(website) {
    window.open(website, "_blank", "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
}