(async () => {
    
    const id = prompt('Whats the game ID: ');
    const name = prompt('Please Enter a bot name');
    
    if (!name) return console.log('Please provide a name, (Restart your whole process).')

    const JoinGame = await fetch("https://api.blooket.com/api/firebase/join", {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
            id: id.toString(),
            name: name.toString()
        }),
        method: 'PUT'
    });
    const GameData = await JoinGame.json();

    if (!GameData.host) return console.log(`Couldn't find game with id ${id}`);

    const RemovePlayer = await fetch(`https://api.blooket.com/api/firebase/client?id=${id}&name=${name}`, {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8",
            "referer": "https://www.blooket.com/",
        },
        method: 'DELETE'
    });

    const GetAnswers = await fetch("https://api.blooket.com/api/games?gameId=" + GameData.host.set, {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8",
        },
        method: 'GET'
    });
    const Answers = await GetAnswers.json();
    //Start of css
    var answerDiv = document.createElement("div");
    var creditDiv = document.createElement("div")
    document.body.appendChild(creditDiv);
    let credss = document.createTextNode("Created By Sean V, Glizzy Flizzy Dlizzy Blizzy✔#0777")
    creditDiv.appendChild(credss)
    creditDiv.style.display="inline-block"
    creditDiv.style.color = "#ed286d"
    creditDiv.style.backgroundColor ="black"
    var showAnswerButton = document.createElement("button");
    showAnswerButton.style.display = "block";
    showAnswerButton.style.fontSize = "100%";
    showAnswerButton.innerHTML = "Show Answers!";
    document.body.appendChild(showAnswerButton);
    answerDiv.style.backgroundColor = "black";
    document.body.appendChild(answerDiv);
    answerDiv.style.color = "#ed286d";
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
    showAnswerButton.style.color = "#ed286d";
    showAnswerButton.style.backgroundColor = "black"
    showAnswerButton.style.border = "3px solid #ed286d"
    answerDiv.style.width = "500px";
    answerDiv.style.overflow = "scroll"
    answerDiv.style.height = "500px";
    var buttonActive = false;
    answerDiv.style.display = "none";
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
    //Done with css

}
    Answers.questions.forEach(question => {
       
        let yodad = document.createElement("img")
        yodad.style.width = "100px"
        yodad.style.height = "100px"
        yodad.src = `${question.image.url}`
        answerDiv.appendChild(document.createTextNode(` Q: ${question.question}, A: ${question.correctAnswers.join(', ')}\n`),yodad);
        answerDiv.appendChild(yodad)

    });
    


})();

