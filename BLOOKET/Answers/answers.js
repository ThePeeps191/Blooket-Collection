(async () => {

    const id = prompt('Please input the game id');
    const name = prompt('Please input a bot name');

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

    const GetAnswers = await fetch("https://api.blooket.com/api/games?gameId=" + GameData.host.set, {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8",
        },
        method: 'GET'
    });
    const Answers = await GetAnswers.json();

    Answers.questions.forEach(question => {
        console.log(`${question.question} is: ${question.correctAnswers.join(', ')}`);
    });

})();
