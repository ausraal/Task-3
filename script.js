/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener('click', getUsers);
const output = document.querySelector ("#output");


function getUsers () {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => outputData(data))
    .catch(error => console.log(error))
    function outputData (data) {
        const message = document.querySelector("#message");
        message.style.display = "none";
        data.forEach (user => {
            let loginR = document.createElement("div");
            let img = document.createElement("img");
            Object.assign(img.style, {
                    height: "50%",  
                    margin:"2px", 
                   })
            Object.assign(loginR.style, {
                    height: "200px", 
                    width: "200px", 
                    margin:"2px",
                    display: "inline-flex", 
                    border: "2px solid black",
                    textAlign: "center"
                   })
           img.src = user.avatar_url;
           loginR.innerText= `login: ${user.login} `;
           output.append(loginR); 
           loginR.append(img); 

           })
        //    Object.assign(img.style, {
        //     height: "50px",  
        //     margin:"2px", 
        //    })
    }
}