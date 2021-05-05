
let nameForBot = "BOBBy6969" + Math.floor(Math.random() * 1000);
let roomCode = prompt("Enter room code: ")
let quizSet = undefined;
let buttonActive = false;
let answerData;
let currentIndex = 0;
let weiner = 0;
let fetched = {};

fetch("https://api.blooket.com/api/firebase/join", {
"headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json;charset=UTF-8",
},
"body": '{"id":"' + roomCode + '","name":"' + nameForBot + '"}',
"method": "PUT"
})
.then(response => response.json()
.then(data => fetched = data)
.then(() => console.log(fetched))
.then(() => {console.log("got data")})

);

let checkingData = setInterval(()=>{

    if(fetched != {})
    {
        let doggy = setInterval(()=>{
            if(quizSet != undefined || quizSet == null)
            {
                clearInterval(doggy)
                clearInterval(checkingData)
                quizSet = fetched.host.set
                getAnswers()
                
            }
        },500)
        
    }

})

function getAnswers()
{
    setTimeout(function(){
    fetch("https://api.blooket.com/api/games?gameId=" + quizSet, {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "if-none-match": "W/\"1d5a-6cFJkfEi8XgVPbSYkm7536r8Fdc\"",
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://www.blooket.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
    })
    .then(response => response.json()
    .then(data => answerData = data)
    
    
    );


    },500)

}

function appendAnswers()
{
    
    for(i=0; i < weiner; i++)
    {
        answerDiv.appendChild(document.createTextNode( "\n" + "Question: " + "\n" + answerData.questions[currentIndex].question + "\n" +  " Answer: " + "\n"+ answerData.questions[currentIndex].correctAnswers));
        currentIndex = currentIndex + 1;
    }
}

let tommy = setInterval(function(){

    if(answerData != {} )
    {
        
        weiner = answerData.questions.length;
        appendAnswers()
        if(weiner != 0)
        {
            clearInterval(tommy)
        }
        
    }
  
})




var showAnswerButton = document.createElement("button");
showAnswerButton.style.display = "block";
showAnswerButton.style.fontSize = "100%"
showAnswerButton.innerHTML = "Show Answers!"
document.body.appendChild(showAnswerButton)
var answerDiv = document.createElement("div");
answerDiv.style.backgroundColor = "black"
document.body.appendChild(answerDiv)
answerDiv.style.color = "white"
answerDiv.style.whiteSpace =  "pre";
showAnswerButton.style.borderRadius = "6px";
showAnswerButton.style.boxShadow =  "0 0 8px 3px rgba(0,0,0,.2)";
showAnswerButton.style.fontSize = "20px";
showAnswerButton.style.outline = "none";
showAnswerButton.style.position = "absolute";
showAnswerButton.style.top = "10%";
showAnswerButton.style.fontFamily = "Nunito,sans-serif";
showAnswerButton.style.top = "4%";
showAnswerButton.style.left = "45%";
showAnswerButton.onclick = function(){
if(buttonActive == false)
    {
        buttonActive = true;
        answerDiv.style.display = "block";
        

    }
    else
    {
        buttonActive = false;
        answerDiv.style.display = "none";
        
    }
}