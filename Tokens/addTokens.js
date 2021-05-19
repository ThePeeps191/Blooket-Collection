alert("Made by: glizzz_y#0777");
var username = prompt('Enter your Blooket username');
var amount = parseInt(prompt('How many tokens do you want? (max 500 daily)'));
if(amount <= 500)
{
  fetch("https://api.blooket.com/api/users/addtokens", {
    method: "PUT",
    "headers": {
        "referer": "https://www.blooket.com/",
        "content-type": "application/json",
        "authorization": localStorage.token
    },
    body: JSON.stringify({
        addedTokens: amount,
        name: username
    })
});

console.log(`${amount} tokens added to your account.`);  

}
else
{
  alert("I told you 500 is the limit!")
}
