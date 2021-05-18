var token = localStorage.token

fetch(`https://api.blooket.com/api/users/verify-token?token=${token}`, {
    method: "GET",
    headers: {
        referer: "https://www.blooket.com/",
        "content-type": "application/json"
    },
});

console.log(token)