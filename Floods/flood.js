// JOINS WITH HOW MANY BOTS YOU REQUESTED AHHAHAAHA
const names = [];
var i;
var bot_count = 10 //set here
for (i = 0; i < bot_count /* number of times to iterate +1 */ ; i++) {
    var zero = 'bot'
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var nums = '1234567890'
    var charactersLength = characters.length;
    for (var i = 0; i < bot_count; i++) {
        names.push(zero + characters.charAt(Math.floor(Math.random() *
            charactersLength)) + nums.charAt(Math.floor(Math.random() *
            nums.length)));
    }
}
names.forEach(function (namex) {
    fetch("https://api.blooket.com/api/firebase/join", {
        headers: {
            referer: "https://www.blooket.com/",
            "content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            id: 775061,
            name: namex
        }),
        method: "put"
    }).then(res => res.text())
})


// CUSTOM BETTER VERSION (bookmarklet)
var pin = prompt("Pin"),
name = prompt("Name"),
amount = prompt("Amount");
for (var i = 0; i < amount; i++) {
    fetch("https://api.blooket.com/api/firebase/join", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            id: pin,
            name: `${name}-${i}`
        })
    });
}

// below joins with most bots
const names = ['test', 'zero', 'mybot', 'wwasas', 'dwqfqf', 'dqwdqd', 'dqwfdr2', 'wqdqd1q', 'wqdqdq', '1d1wd1'];
var i;
var bot_count = 10 //set here
for (i = 0; i < bot_count /* number of times to iterate +1 */ ; i++) {

    async function flood() {
        for (var i = 0; i < bot_count; i++) {
            await names.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
        }
    }
    var namex = names[Math.floor(Math.random() * names.length)];
    fetch("https://api.blooket.com/api/firebase/join", {
        headers: {
            referer: "https://www.blooket.com/",
            "content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            id: 881690,
            name: namex
        }),
        method: "put"
    }).then(res => res.text())
}




// below works with one bot
fetch("https://api.blooket.com/api/firebase/join", {
    headers: {
        referer: "https://www.blooket.com/",
        "content-type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({
        id: 510829,
        name: "test"
    }),
    method: "put"
}).then(res => res.text())